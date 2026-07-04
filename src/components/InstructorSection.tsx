import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import instructorImg from "@/assets/images/instructor-beach.jpg";

/**
 * ————————————————————————————————————————————
 * CONTENT — verbatim từ bản gốc, không thêm / không bớt.
 * Chỉ tách theo nhịp kể chuyện để phục vụ trình bày.
 * ————————————————————————————————————————————
 */

const eyebrow = "Cycle Breaker";
const title = "Chào bạn, mình là Nga Alchemist";
const subtitle =
  "Người đồng hành giúp phụ nữ phá vỡ những mô thức vô thức đang lặp lại trong tình yêu, các mối quan hệ và cách họ nhìn nhận chính mình.";

const intro = [
  "Trong những năm qua, mình đã đồng hành cùng hàng trăm phụ nữ trên hành trình chữa lành những vết thương về giá trị bản thân, sự phụ thuộc cảm xúc và nỗi sợ bị bỏ rơi, giúp họ xây dựng lại lòng tự trọng từ gốc rễ và tìm về cảm giác an toàn từ bên trong.",
  "Nhưng trước khi trở thành người đồng hành, mình cũng từng là người mắc kẹt rất lâu trong chính những vòng lặp đó.",
];

const relate = {
  lead: "Có thể bạn cũng đã từng trải qua cảm giác này.",
  body: "Bạn yêu rất nhiều, cố gắng rất nhiều, và luôn là người nhường nhịn và thấu hiểu. Nhưng càng bước sâu vào một mối quan hệ, bạn càng thấy mình dần đánh mất chính mình. Bạn lo lắng khi người kia im lặng, bạn liên tục tự hỏi liệu mình có làm gì sai, bạn cố gắng trở nên tốt hơn, ngoan hơn, hiểu chuyện hơn để giữ lấy điều mình trân trọng.",
  cue: "Và đến một ngày, bạn bắt đầu nhận ra:",
};

const quoteWorth = "Dù đã cố gắng rất nhiều... Dường như mọi chuyện vẫn luôn kết thúc theo cùng một cách.";
const echo = "Đó cũng từng là câu hỏi của mình.";

const herStruggle =
  "Đã có một thời gian dài, mình đặt giá trị bản thân vào cách người khác đối xử với mình. Mình sợ bị bỏ rơi, sợ không được chọn, sợ không đủ tốt… Và những nỗi sợ đó âm thầm điều khiển cách mình yêu, cách mình gắn bó và cách mình nhìn nhận chính mình.";

const turningPointLead = "Cho đến khi cuộc hôn nhân của mình đi đến điểm đổ vỡ.";

const turningPoint = [
  "Đó là một ngày cuối tháng 8 năm 2022. Sau một trận cãi vã dữ dội với chồng, mình chạm đáy. Mình đã ngồi bất động trên ghế thật lâu, kiệt quệ, thất vọng và hoàn toàn mất phương hướng.",
  "Đó cũng là thời điểm mình vừa trải qua phá sản, thất nghiệp, còn con trai mới được ba tuổi.",
  "Mọi thứ dường như sụp đổ cùng một lúc.",
];

const realizationIntro =
  "Nhưng điều thay đổi cuộc đời mình lại không nằm ở cuộc cãi vã đó. Nó đến từ một câu hỏi. Một câu hỏi mà trước đó mình chưa từng thật sự đối diện:";

const quoteWhy = "Tại sao kết cục luôn giống nhau?";

const realization = [
  "Mình chưa bao giờ là người chấp nhận ở lại trong những mối quan hệ khiến mình đau khổ. Mình luôn đủ mạnh mẽ để rời đi khi cảm thấy không còn phù hợp. Nhưng lần đầu tiên, mình ngừng nhìn vào người khác và bắt đầu nhìn vào chính mình.",
  "Dù là những con người khác nhau, những hoàn cảnh khác nhau, những câu chuyện khác nhau nhưng kết cục vẫn luôn giống nhau một cách kỳ lạ. Sau cùng, mình luôn là người bị tổn thương, luôn cảm thấy mình không đủ giá trị, luôn đánh mất chính mình khi mối quan hệ kết thúc.",
  "Và trong khoảnh khắc đó, mình nhìn thấy một điều mà trước đây chưa từng nhìn thấy: Đây không phải là một biến cố đơn lẻ. Đây là một vòng lặp.",
  "Một mô thức đã âm thầm vận hành trong cuộc đời mình suốt nhiều năm mà mình chưa từng nhận ra. Và nếu mình không chữa lành nó, nó sẽ tiếp tục lặp lại.",
];

const realizationClose = "Chính khoảnh khắc đó đã thay đổi mọi thứ.";

const divorceLines = [
  "Mình quyết định ly hôn.",
  "Không phải vì hết yêu.",
  "Mà vì lần đầu tiên, mình hiểu rằng điều mình cần cứu không phải là một mối quan hệ.",
  "Điều mình cần cứu là cứu lấy chính mình.",
];

const afterDivorce = [
  "Nhưng rời khỏi một mối quan hệ không đồng nghĩa với việc chữa lành những gì đang diễn ra bên trong. Sau ly hôn vẫn là những khoảng trống, vẫn là nỗi sợ cô đơn, vẫn là những đêm dài overthinking, vẫn là cảm giác bất an mà mình đã mang theo suốt nhiều năm.",
  "Mình tu tập và bắt đầu thiền định. Mình học cách quay vào bên trong, đối diện với những phần sâu nhất mà bản thân trước đây luôn tìm cách né tránh. Nhưng sự chuyển hóa thực sự chỉ bắt đầu khi mình bước sâu vào hành trình làm việc với tiềm thức tầng sâu thông qua Thôi miên trị liệu và các phương pháp chữa lành tận gốc.",
];

const rebirthOrigin = "Đó cũng là lý do Rebirth ra đời.";
const rebirthDesc =
  "Hành trình 7 ngày này không được xây dựng từ những lý thuyết xa vời. Nó là những gì tinh gọn, thực tế và sâu sắc nhất được chắt lọc từ hành trình chuyển hóa của chính mình, cùng những gì mình đã thực hành, kiểm chứng và quan sát trong quá trình đồng hành với khách hàng thực tế. Mình ở đây để giúp bạn rút ngắn con đường đó.";

const pillars = [
  {
    icon: "🔓",
    title: "Giải mã kịch bản vô thức",
    desc: "Nhìn thấu cơ chế vì sao nỗi sợ vô giá trị lại đang âm thầm điều khiển cách bạn yêu, cách bạn lựa chọn và cách bạn cho phép người khác đối xử với mình.",
  },
  {
    icon: "🛡️",
    title: "Thu hồi quyền lực cá nhân",
    desc: "Ngừng phản ứng từ những vết thương cũ, cắt đứt sự phụ thuộc cảm xúc và xây dựng cảm giác an toàn từ bên trong.",
  },
  {
    icon: "🦋",
    title: "Tái lập mối quan hệ với chính mình",
    desc: "Để bạn không còn phải tìm kiếm giá trị bản thân thông qua sự công nhận, sự chú ý hay tình yêu từ người khác.",
  },
];

const closing = [
  "Bạn chưa từng thiếu giá trị.",
  "Bạn chỉ đang mang những vết thương khiến mình quên mất giá trị vốn có của bản thân.",
];
const closingInvite =
  "Và nếu bạn đã sẵn sàng ngừng tự bỏ rơi chính mình, mình sẽ đồng hành cùng bạn trên hành trình trở về ấy.";

/**
 * ————————————————————————————————————————————
 * PRESENTATION PRIMITIVES
 * ————————————————————————————————————————————
 */

// Nhịp chuyển cảnh — dùng vì đây là một dòng thời gian có thật
// (trước biến cố → điểm chạm đáy → sau ly hôn), không phải số thứ tự trang trí.
function PhaseMarker({ children }: { children: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 my-12 select-none"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-200 to-violet-200" />
      <span className="flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.28em] text-[#B0893A] uppercase whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
        {children}
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-violet-200 to-violet-200" />
    </motion.div>
  );
}

// Vòng tròn đứt gãy — chữ ký thị giác của "Cycle Breaker": một vòng lặp
// không khép kín, làm nền cho những câu hỏi bản lề của câu chuyện.
function BrokenCircleQuote({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex items-center justify-center my-9 py-10"
    >
      <svg
        viewBox="0 0 240 240"
        className="absolute w-56 h-56 md:w-64 md:h-64 pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx="120"
          cy="120"
          r="104"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="1"
          strokeOpacity="0.35"
          strokeDasharray="560 100"
          strokeDashoffset="60"
          strokeLinecap="round"
        />
      </svg>
      <p className="relative font-serif italic font-semibold text-violet-900 text-2xl md:text-3xl leading-snug text-center max-w-md px-4">
        “{text}”
      </p>
    </motion.div>
  );
}

export function InstructorSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#B0893A] mb-3">
            {eyebrow}
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-gray-900 tracking-wide">
            {title}
          </h2>
          <p className="mt-4 text-violet-700/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-violet-100 mb-14 max-w-md mx-auto"
        >
          <img src={instructorImg} alt="Nga Alchemist" className="w-full object-cover" />
        </motion.div>

        {/* ————— TRƯỚC ĐIỂM CHẠM ĐÁY ————— */}
        <div className="space-y-5 text-gray-700 leading-[1.9] text-lg md:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="first-letter:font-serif first-letter:font-bold first-letter:text-[#C9A84C] first-letter:text-6xl first-letter:leading-[0.8] first-letter:mr-2 first-letter:float-left"
          >
            {intro[0]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {intro[1]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <p className="font-serif font-semibold text-violet-900 text-xl md:text-2xl mb-3">
              {relate.lead}
            </p>
            <p>{relate.body}</p>
            <p className="mt-4">{relate.cue}</p>
          </motion.div>
        </div>

        <BrokenCircleQuote text={quoteWorth} />

        <div className="space-y-5 text-gray-700 leading-[1.9] text-lg md:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-violet-800/80 font-medium"
          >
            {echo}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {herStruggle}
          </motion.p>
        </div>

        {/* ————— ĐIỂM CHẠM ĐÁY ————— */}
        <PhaseMarker>Tháng 8, 2022 — Điểm chạm đáy</PhaseMarker>

        <div className="space-y-5 text-gray-700 leading-[1.9] text-lg md:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif font-medium text-gray-900"
          >
            {turningPointLead}
          </motion.p>
          {turningPoint.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {p}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-2"
          >
            {realizationIntro}
          </motion.p>
        </div>

        <BrokenCircleQuote text={quoteWhy} />

        <div className="space-y-5 text-gray-700 leading-[1.9] text-lg md:text-xl">
          {realization.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {p}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif font-semibold text-gray-900"
          >
            {realizationClose}
          </motion.p>
        </div>

        {/* Divorce punch line — dấu ngoặt lớn nhất của câu chuyện */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative my-10 pl-6 md:pl-8 border-l-2 border-[#C9A84C]"
        >
          {divorceLines.map((line, i) => (
            <p
              key={i}
              className={`font-serif ${
                i === 3
                  ? "font-bold text-violet-900 text-2xl md:text-3xl"
                  : "font-medium text-violet-800 text-xl md:text-2xl"
              } leading-snug mb-1.5`}
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* ————— SAU CUỘC LY HÔN ————— */}
        <PhaseMarker>Sau cuộc ly hôn — Hành trình chữa lành</PhaseMarker>

        <div className="space-y-5 text-gray-700 leading-[1.9] text-lg md:text-xl">
          {afterDivorce.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Rebirth origin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="font-serif font-bold text-violet-900 text-2xl md:text-3xl mb-4">
            {rebirthOrigin}
          </p>
          <p className="text-gray-700 leading-[1.9] text-lg md:text-xl max-w-2xl mx-auto">
            {rebirthDesc}
          </p>
        </motion.div>

        {/* Three pillars — dark navy / gold, đồng bộ ngôn ngữ thị giác của trang */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl p-7 md:p-9 bg-gradient-to-br from-[#1a0a2e] to-[#140728] border border-[#C9A84C]/30 shadow-xl"
        >
          <ul className="space-y-7">
            {pillars.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <span className="text-3xl leading-none mt-0.5">{p.icon}</span>
                <div>
                  <h4 className="font-serif font-bold text-[#F5D78E] text-lg md:text-xl mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-gray-100 leading-[1.9] text-base md:text-lg">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-violet-900 font-serif font-bold text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-2">
            {closing[0]}
          </p>
          <p className="text-violet-900/90 font-serif font-semibold text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-6">
            {closing[1]}
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            {closingInvite}
          </p>
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-guide"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.6)] mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI CHỌN NGỪNG TỰ BỎ RƠI CHÍNH MÌNH</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
