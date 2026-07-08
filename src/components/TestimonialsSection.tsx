import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Mình tìm được vòng lặp tiêu cực từ đâu thì mình sẽ chữa lành được đúng nơi đó. Thay đổi từ bên trong, từ chính mình — mình nghĩ đó là điều sâu sắc nhất mình có được.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
  {
    text: "Em thấy kết nối với bản thân mình hơn, tin tưởng vào bản thân. Hiện tại em thấy nhẹ nhõm hơn rất nhiều, tim không còn bị nặng nữa. Em cảm thấy không còn bị cảm xúc tiêu cực chi phối mạnh nữa.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
  {
    text: "Các triệu chứng cũ gần như không gặp lại. Em ngủ tốt hơn. Đợt này em cũng thấy yêu đời hơn haha.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
  {
    text: "Sau buổi hôm nay nhiều vấn đề với tớ đã rõ ràng hơn. Thấy mình bỏ bê bản thân lâu quá, mà cứ phải trông cậy yêu thương từ bên ngoài.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
  {
    text: "Dạo này mọi thứ nhẹ nhàng hơn với em, chỉ là thỉnh thoảng vẫn còn khùng lên — nhưng tỷ lệ cáu giận giảm hơn nhiều. Em đang thấy mình easy hơn, kiểu enjoy my life và yêu thương bản thân hơn.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
  {
    text: "Điều em thấy rõ nhất là bây giờ em tự tin hơn rất nhiều. Không phải kiểu gồng lên để tỏ ra mạnh, mà là một sự tự tin rất sâu từ bên trong, kiểu dù mình có đang ở đâu, đang là ai, mình vẫn thấy mình có giá trị. Em thật sự biết ơn chị rất nhiều.",
    name: "Khách hàng 1:1",
    location: "Hà Nội",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#140728]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-3">
            Những chia sẻ thật từ phụ nữ đã làm việc cùng tôi
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Rebirth là khóa học được chắt lọc trực tiếp từ những gì mình đã áp dụng thành công trong các phiên 1:1 dưới đây — cùng một hệ thống, cùng một lộ trình gốc → ngọn, chỉ khác là bạn tự đi qua nó theo tốc độ của riêng mình, có audio và bài tập dẫn dắt từng bước thay cho việc ngồi cùng mình trực tiếp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-amber-300 transition-all hover:shadow-md flex flex-col group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors" />
              </div>

              <p className="text-sm text-gray-600 leading-[1.85] italic flex-1 mb-5">
                "{t.text}"
              </p>

              <div className="border-t border-border/30 pt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm font-serif">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role && `${t.role} · `}{t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
