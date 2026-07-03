import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import instructorImg from "@/assets/images/instructor-beach.jpg";

const methods = [
  "Thôi miên trị liệu",
  "Timeline healing",
  "Somatic therapy",
  "Inner child work",
  "Shadow work",
  "Coaching chữa lành",
];

const mirrorIntro = [
  "Có thể bạn cũng đang ở trong một vòng lặp quen thuộc.",
  "Bạn yêu rất nhiều, cố gắng rất nhiều, luôn là người nhường nhịn và thấu hiểu. Nhưng càng bước sâu vào một mối quan hệ, bạn càng thấy mình dần đánh mất chính mình. Bạn lo lắng khi người kia im lặng, tự hỏi liệu mình có làm gì sai, cố trở nên ngoan hơn, hiểu chuyện hơn để được yêu nhiều hơn.",
  "Và đến một ngày, bạn nhìn chính mình rồi tự hỏi. Đó cũng từng là câu hỏi của mình.",
];

const storyIntro =
  "Mình không đến đây với vai trò một người hoàn hảo hay có tất cả câu trả lời. Mình đến đây với trải nghiệm của một người đã từng đánh mất chính mình, và với kinh nghiệm đồng hành cùng hàng trăm phụ nữ trên hành trình tìm lại giá trị bản thân từ gốc rễ.";

const quoteBoxText = "Mình có thật sự xứng đáng được yêu không?";

const storyAfter = [
  "Sau nhiều lần thất bại trong tình yêu, sau những lần bị xem nhẹ, bị hạ thấp, bị tổn thương bởi những lời nói tưởng chừng vô tình, mình đã từng tin rằng vấn đề nằm ở mình. Rằng mình không đủ tốt. Rằng mình không đủ giá trị để được yêu thương và trân trọng.",
  "Tháng 8 năm 2022, mình chạm đến điểm thấp nhất. Sau một trận cãi vã dữ dội với chồng, mình nằm bất động trên sàn nhà. Đêm đó, mình thức trắng đến gần sáng, đầu óc quay cuồng giữa kiệt quệ, đau đớn và tuyệt vọng.",
  "Giữa cơn kiệt quệ ấy, một sự thật hiện ra rõ ràng đến mức mình không thể tiếp tục né tránh. Đây không phải lần đầu tiên. Mình đã sống trong cùng một kịch bản suốt nhiều năm, chỉ là những gương mặt khác nhau, những hoàn cảnh khác nhau, nhưng kết cục thì luôn giống nhau. Mình luôn đánh mất chính mình để giữ lấy một mối quan hệ. Và cuối cùng, mình luôn là người bị tổn thương.",
  "Lần đầu tiên mình đã nhìn thấy vòng lặp đó rõ như ban ngày. Và lúc đó mình chỉ biết một điều duy nhất. Không thể tiếp tục sống như vậy thêm một ngày nào nữa.",
];

const divorcePunchLine = "Mình quyết định ly hôn.\nKhông phải vì hết yêu.\nMà vì lần đầu tiên, mình chọn cứu lấy chính mình.";

const storyAfter2 = [
  "Sự chuyển hóa thực sự bắt đầu khi mình ngừng tìm câu trả lời ở bên ngoài và quay vào bên trong, dấn thân vào hành trình Tái lập trình Tiềm thức, học cách lắng nghe và đối diện với những vết thương mà trước đó mình luôn né tránh. Đó cũng là lúc mình chọn con đường trở thành một Người thực hành Thôi miên trị liệu và chữa lành Tiềm thức tầng sâu. Vì mình đã hiểu ra rằng thế giới không đối xử với bạn theo cách bạn muốn, mà đối xử với bạn đúng cách bạn đang đối xử với chính mình.",
];

const insight = {
  headline:
    "Vết thương không được chữa lành sẽ luôn tìm cách lặp lại chính nó (dưới một gương mặt khác, một hoàn cảnh khác) cho đến khi bạn thật sự nhìn thẳng vào nó.",
  support:
    "Đó là điều mình đã tự mình đi qua. Và cũng là điều mình đã chứng kiến ở hàng trăm phụ nữ mình từng đồng hành, người này qua người khác, cùng một kịch bản, cho đến ngày họ chọn dừng lại và quay vào bên trong.",
};

const helps = [
  {
    icon: "🔓",
    title: "Giải mã kịch bản vô thức",
    desc: 'Nhìn thấu cơ chế vì sao nỗi sợ "vô giá trị" lại đang âm thầm điều khiển bạn tự hạ thấp tiêu chuẩn để chuốc lấy tổn thương.',
  },
  {
    icon: "🛡️",
    title: "Thu hồi quyền lực cá nhân",
    desc: "Ngừng phản ứng dựa trên vết thương cũ, cắt đứt sự phụ thuộc cảm xúc để trở thành bến đỗ vững chãi và an toàn nhất cho chính mình.",
  },
  {
    icon: "🦋",
    title: "Tái lập mối quan hệ bên trong",
    desc: "Đưa tiềm thức về trạng thái an toàn nguyên bản, để bạn không bao giờ còn sống với nhu cầu phải cầu xin sự công nhận từ bất kỳ ai khác.",
  },
];

const trust = ["Học online", "Bắt đầu ngay", "Cộng đồng riêng", "Truy cập trọn đời", "Hoàn tiền 7 ngày"];

export function InstructorSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-gray-900 tracking-wide">
            Chào bạn, mình là Nga Alchemist
          </h2>
          <p className="mt-3 text-violet-700 text-sm md:text-base">
            Người bẻ gãy mô thức &amp; chữa lành cảm xúc từ gốc
          </p>
          <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Trong những năm qua, mình đã đồng hành cùng{" "}
            <span className="font-semibold text-gray-900">hàng trăm phụ nữ</span> trên hành trình chữa lành những vết thương về giá trị bản thân, sự phụ thuộc cảm xúc và nỗi sợ bị bỏ rơi, giúp họ xây dựng lại lòng tự trọng từ gốc rễ.
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-violet-100 mb-6 max-w-md mx-auto"
        >
          <img src={instructorImg} alt="Nga Alchemist" className="w-full object-cover" />
        </motion.div>

        {/* Methods */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {methods.map((m, i) => (
            <span key={i} className="px-3.5 py-1.5 rounded-full text-xs border border-violet-200 text-violet-700 bg-violet-50">
              {m}
            </span>
          ))}
        </div>

        {/* Mirroring intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-gray-700 leading-[1.9] text-base md:text-lg mb-5"
        >
          {mirrorIntro.map((p, i) => (
            <p key={i} className={i === 0 ? "font-semibold text-gray-900" : ""}>
              {p}
            </p>
          ))}
        </motion.div>

        {/* Quote box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl px-7 py-6 mb-7"
        >
          <p className="text-white font-semibold text-lg md:text-xl leading-relaxed text-center">
            {quoteBoxText}
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 text-gray-700 leading-[1.9] text-base md:text-lg"
        >
          <p>
            {storyIntro.split("kinh nghiệm đồng hành cùng hàng trăm phụ nữ")[0]}
            <span className="font-semibold text-gray-900">kinh nghiệm đồng hành cùng hàng trăm phụ nữ</span>
            {storyIntro.split("kinh nghiệm đồng hành cùng hàng trăm phụ nữ")[1]}
          </p>

          {storyAfter.map((p, i) => (
            <p key={i} className="whitespace-pre-line">{p}</p>
          ))}

          <p className="whitespace-pre-line font-serif font-semibold text-violet-900 text-lg md:text-xl text-center py-2">
            {divorcePunchLine}
          </p>

          {storyAfter2.map((p, i) => (
            <p key={i} className="whitespace-pre-line">{p}</p>
          ))}
        </motion.div>

        {/* Insight box (contrasting dark bg) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl p-7 md:p-9 bg-gradient-to-br from-[#1a0a2e] to-[#140728] border border-[#C9A84C]/30 shadow-xl"
        >
          <h3 className="font-serif font-bold text-[#F5D78E] text-lg md:text-xl mb-4 tracking-wide">
            ĐIỀU MÌNH TIN, SAU TẤT CẢ NHỮNG GÌ ĐÃ ĐI QUA
          </h3>
          <p className="text-white font-semibold text-lg md:text-xl leading-relaxed mb-5">
            {insight.headline}
          </p>
          <p className="text-gray-300 leading-[1.9] text-sm md:text-base">
            {insight.support}
          </p>
        </motion.div>

        {/* Transition + 3 helps */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-gray-700 leading-[1.9] text-base md:text-lg"
        >
          <p>
            Hành trình 7 ngày này không được xây dựng từ những lý thuyết xa vời. Nó được{" "}
            <span className="font-semibold text-gray-900">chắt lọc từ những gì mình đã trải nghiệm, thực hành và kiểm chứng</span>{" "}
            trong quá trình đồng hành cùng khách hàng thực tế.
          </p>
          <p className="mt-3">
            Mình ở đây để giúp bạn rút ngắn con đường, không còn phải mò mẫm trong bóng tối.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {helps.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-violet-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-3">{h.icon}</div>
              <h4 className="font-serif font-bold text-violet-900 text-base md:text-lg mb-2">{h.title}</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-violet-900 font-serif font-bold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
            Bạn chưa từng thiếu giá trị.
            <br />
            Bạn chỉ đang mang những vết thương khiến mình quên mất giá trị thật sự của bản thân mà thôi.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Hành trình này đang ở đây đợi bạn, nếu bạn đã sẵn sàng ngừng nỗ lực để được yêu và bắt đầu trở thành{" "}
            <span className="text-violet-800 font-semibold whitespace-nowrap">người không thể bị bỏ rơi.</span>
          </p>
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-guide"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-none font-bold text-sm md:text-base text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.6)] mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI CHỌN NGỪNG TỰ BỎ RƠI CHÍNH MÌNH</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <div className="flex flex-nowrap justify-center items-center gap-x-3 mt-4 text-xs text-gray-500 overflow-x-auto">
            {trust.map((t, i) => (
              <span key={i} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                {i > 0 && <span className="text-[#C9A84C]/60">•</span>}
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
