import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import phoneGirlImg from "@/assets/images/problem-phone.jpg";
import windowGirlImg from "@/assets/images/problem-window.jpg";

const checklist = [
  "Thức dậy là bạn kiểm tra điện thoại xem người ta có nhắn gì không",
  "Chỉ cần họ im lặng vài tiếng, bạn bắt đầu tưởng tượng đủ mọi kịch bản",
  "Bạn luôn là người nhịn, người hiểu chuyện, người xin lỗi và người cố giữ mối quan hệ",
  "Mối quan hệ nào cũng kết thúc giống nhau — dù người khác nhau",
  "Bên ngoài mạnh mẽ, nhưng khi ở một mình lại thấy trống rỗng và kiệt sức",
];

export function ProblemSection() {
  return (
    <>
      {/* ── BIG QUESTION (dark + phone girl) ── */}
      <section className="bg-[#1a0a2e] relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[480px]">
          <div className="relative overflow-hidden min-h-[300px]">
            <img src={phoneGirlImg} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a0a2e] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-transparent lg:hidden" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-8 py-16 lg:pl-10 lg:pr-16"
          >
            <h2 className="font-serif font-bold text-xl md:text-2xl lg:text-[2.2rem] text-white leading-[1.18]">
             Nếu chỉ cần một tin nhắn chậm cũng đủ khiến bạn bất an, hãy đọc tiếp.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── BẠN CÓ ĐANG NHƯ VẬY KHÔNG? (white, checklist cụ thể) ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-violet-900 mb-3">
              Có phải bạn cũng đang sống như thế này?
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Đọc 5 dòng dưới đây. Nếu bạn thấy mình trong từ 3 điều trở lên, rất có thể bạn đang mắc kẹt trong một vòng lặp mà mình chưa từng gọi tên.
            </p>
          </motion.div>

          <div className="space-y-3 mb-10">
            {checklist.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-violet-50/60 border border-violet-100 rounded-xl p-4 md:p-5"
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0 mt-2.5" />
                <p className="text-gray-800 text-base md:text-lg leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* SỰ THẬT — bản rút gọn, dùng ngôn ngữ đơn giản thay vì ẩn dụ trừu tượng */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-8 md:p-10 text-center shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 mb-5">
              <AlertTriangle className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">
                Nếu bạn vừa gật đầu nhiều hơn một lần, đừng vội nghĩ mình "yếu đuối".
              </span>
            </div>
            <p className="text-gray-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Có thể bạn chỉ đang phản ứng theo một mô thức đã hình thành từ rất lâu. Và điều đã được học thì cũng có thể học lại.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TỰ BỎ RƠI (full-bleed crying woman + half-width text overlay) ── */}
      <section className="relative overflow-hidden min-h-[480px] lg:min-h-[560px] flex items-center bg-[#140728]">
        <img
          src={windowGirlImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: "saturate(0.7) brightness(0.7)" }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#140728] via-[#140728]/85 to-[#140728]/15" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#140728]/70 via-transparent to-transparent" />

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 py-14"
          >
            <h3 className="font-serif font-bold text-2xl md:text-3xl lg:text-[2.1rem] text-white leading-[1.35] mb-6">
              Càng cố hiểu chuyện, càng cố nhịn để giữ một người —{" "}
              <span className="text-[#F5D78E]">đó chính là lúc bạn đang tự bỏ rơi chính mình.</span>
            </h3>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Nếu sự nhẫn nhịn và hy sinh có thể đổi lấy tình yêu chân thành, đáng lẽ bạn đã là người
              hạnh phúc nhất từ lâu rồi.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
