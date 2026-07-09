import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  {
    before: "Thức dậy là kiểm tra điện thoại xem người ta có nhắn gì không",
    after: "Thức dậy thấy bình an, không cần chờ tin nhắn của ai",
  },
  {
    before: "Sợ làm người khác thất vọng, luôn cố gắng làm hài lòng",
    after: 'Biết nói "không" mà không thấy tội lỗi',
  },
  {
    before: "Luôn thấy mình là lựa chọn phụ của ai đó",
    after: "Biết rõ giá trị của mình không phụ thuộc vào người khác",
  },
  {
    before: "Hiểu hết lý thuyết chữa lành nhưng vẫn lặp lại y như cũ",
    after: "Có công cụ thực hành cụ thể, áp dụng ngay được mỗi ngày",
  },
  {
    before: "Sợ cô đơn và sợ sự im lặng",
    after: "Thấy ổn khi ở một mình, không cần ai lấp đầy khoảng trống",
  },
];

export function TransformationSection() {
  return (
    <section className="py-24 bg-[#1a0a2e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-violet-800/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-white">
            SAU 7 NGÀY, BẠN SẼ KHÁC{" "}
            <span className="text-[#F5D78E]">NHƯ THẾ NÀO?</span>
          </h2>
        </motion.div>

        {/* Column headers */}
        <div className="grid grid-cols-2 gap-4 mb-4 px-1">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
              <X className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-400 text-xs md:text-sm font-bold tracking-widest uppercase">
              Trước hành trình
            </span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-[#140728]" />
            </div>
            <span className="text-[#F5D78E] text-xs md:text-sm font-bold tracking-widest uppercase">
              Sau hành trình
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid grid-cols-2 gap-4 bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="p-4 md:p-5 border-r border-white/10">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{r.before}</p>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-gray-100 text-sm md:text-base leading-relaxed">{r.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
