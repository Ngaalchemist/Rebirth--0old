import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

const items = [
  {
    num: "01",
    title: "7 bài học video theo từng ngày",
    desc: "Mỗi ngày một bài giảng ngắn (15–20 phút), đi thẳng vào mô thức cần tháo gỡ ngày hôm đó — không lý thuyết dài dòng.",
  },
  {
    num: "02",
    title: "Workbook bài tập sau mỗi ngày",
    desc: "Bài tập cụ thể giúp bạn áp dụng ngay điều vừa học, thay vì chỉ nghe rồi quên.",
  },
  {
    num: "03",
    title: "Bộ câu hỏi journaling (viết chữa lành)",
    desc: "Chỉ dẫn từng bước giúp bạn tự nhìn rõ mô thức bỏ rơi đang âm thầm điều khiển mình.",
  },
  {
    num: "04",
    title: "Kế hoạch 7 ngày quay về với bản thân",
    desc: "Việc cần làm rõ ràng cho từng ngày, để bạn không bị lạc giữa chừng.",
  },
  {
    num: "05",
    title: "Kế hoạch duy trì sau khóa học",
    desc: "Hướng dẫn tiếp tục sau ngày thứ 7, để những gì bạn xây được không rơi rụng khi gặp thử thách mới.",
  },
];

export function WhatsInsideSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-4">
            BẠN NHẬN ĐƯỢC GÌ?
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            Không phải khóa học lý thuyết suông — mỗi phần đều có bài tập cụ thể để bạn làm ngay.
          </p>
        </motion.div>

        <div className="space-y-5">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-5 bg-white/5 border border-[#C9A84C]/20 rounded-2xl p-6 hover:border-[#C9A84C]/50 transition-colors"
            >
              <span className="font-serif font-bold text-3xl text-[#C9A84C]/50 leading-none flex-shrink-0">
                {it.num}
              </span>
              <div>
                <h3 className="font-serif font-bold text-white text-lg md:text-xl mb-1.5">{it.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <CtaButton
            onClick={scrollToPricing}
            className="bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A] rounded-none px-10 py-5"
            data-testid="button-cta-whatsinside"
          >
            TÔI MUỐN BẮT ĐẦU KHÓA HỌC NÀY
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
