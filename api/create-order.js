import { Redis } from "@upstash/redis";

// Vercel Marketplace (Upstash) bơm biến môi trường dưới tên KV_REST_API_URL / KV_REST_API_TOKEN.
// Tài khoản Upstash gốc dùng tên UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.
// Hỗ trợ cả hai để không phụ thuộc vào cách bạn cài đặt.
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Thông tin nhận tiền — Maritime Bank (MSB)
// QUAN TRỌNG: MSB yêu cầu nhận tiền qua Tài khoản ảo (VA) để SePay theo dõi được giao dịch,
// không nhận trực tiếp vào số tài khoản gốc. Tiền vẫn về thẳng tài khoản chính như thường,
// VA chỉ là "đường" để SePay nhìn thấy giao dịch.
const BANK_BIN = "970426"; // Mã BIN VietQR của MSB
const ACCOUNT_NO = "96886693015092"; // Số VA cố định do MSB cấp qua SePay
const ACCOUNT_NAME = "NGUYEN THANH NGA";
const AMOUNT = 444000;
const ORDER_TTL_SECONDS = 60 * 60 * 24; // giữ đơn hàng 24h rồi tự xoá

function generateOrderCode() {
  // Mã ngắn, chỉ chữ + số, dễ đọc trong nội dung chuyển khoản
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "NGA";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ error: "Thiếu họ tên hoặc số điện thoại" });
    }

    // Tạo mã đơn hàng duy nhất, kiểm tra tránh trùng (rất hiếm nhưng vẫn nên kiểm tra)
    let code = generateOrderCode();
    let attempts = 0;
    while ((await redis.get(`order:${code}`)) && attempts < 5) {
      code = generateOrderCode();
      attempts++;
    }

    const order = {
      code,
      name,
      phone,
      email: email || "",
      amount: AMOUNT,
      status: "pending", // pending | paid
      createdAt: new Date().toISOString(),
    };

    await redis.set(`order:${code}`, JSON.stringify(order), { ex: ORDER_TTL_SECONDS });

    const qrUrl = `https://qr.sepay.vn/img?acc=${ACCOUNT_NO}&bank=MSB&amount=${AMOUNT}&des=${encodeURIComponent(code)}`;

    return res.status(200).json({
      code,
      amount: AMOUNT,
      qrUrl,
      bankName: "MSB - Ngân hàng TMCP Hàng Hải Việt Nam",
      accountNo: ACCOUNT_NO,
      accountName: ACCOUNT_NAME,
    });
  } catch (err) {
    console.error("create-order error:", err);
    return res.status(500).json({ error: "Có lỗi xảy ra, vui lòng thử lại" });
  }
}
