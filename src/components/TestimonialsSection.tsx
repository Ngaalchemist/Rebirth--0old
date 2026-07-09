import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Em thấy kết nối với bản thân mình hơn. Tim không còn thấy nặng nữa, không còn bị cảm xúc tiêu cực chi phối mạnh như trước.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
  {
    quote: "Sau buổi học, nhiều thứ trở nên rõ ràng hơn. Em nhận ra mình đã bỏ bê bản thân quá lâu.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
  {
    quote: "Em tự tin hơn rất nhiều — không phải kiểu gồng lên, mà là tự tin từ sâu bên trong.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-gray-900 mb-3">
            Học viên nói gì
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Rebirth được xây từ đúng hệ thống dùng trong các phiên 1:1 dưới đây — chỉ khác là bạn tự học
            theo tốc độ riêng, có video và bài tập dẫn dắt từng bước.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-violet-50/60 border border-violet-100 rounded-2xl p-7 flex flex-col"
            >
              <Quote className="w-7 h-7 text-[#C9A84C] mb-4" />
              <p className="text-gray-700 text-base leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-violet-100">
                <p className="font-semibold text-violet-900 text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
