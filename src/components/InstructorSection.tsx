import { motion } from "framer-motion";
import { ChevronRight, Monitor, Zap, Users, Infinity } from "lucide-react";
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

const herStruggle =
  "Đã có một thời gian dài, mình đặt giá trị bản thân vào cách người khác đối xử với mình. Mình sợ bị bỏ rơi, sợ không được chọn, sợ không đủ tốt… Và những nỗi sợ đó âm thầm điều khiển cách mình yêu, cách mình gắn bó và cách mình nhìn nhận chính mình.";

const turningPointLead = "Cho đến khi cuộc hôn nhân của mình đi đến điểm đổ vỡ.";

const turningPoint = [
  "Đó là một ngày cuối tháng 8 năm 2022. Sau một trận cãi vã dữ dội với chồng, mình chạm đáy. Mình ngồi bất động trên ghế thật lâu, kiệt quệ, thất vọng và hoàn toàn mất phương hướng.",
  "Đó cũng là thời điểm mình vừa trải qua phá sản, thất nghiệp, còn con trai mới bước sang tuổi lên ba.",
];

// Aha moment — kéo dài nhịp, mỗi dòng một nhát cắt, dồn về "toàn bộ cuộc đời mình"
const ahaMoment = [
  "Mọi thứ dường như sụp đổ cùng một lúc.",
  "Và trong khoảnh khắc đó, lần đầu tiên mình ngừng nghĩ về cuộc cãi vã.",
  "Ngừng nghĩ về chồng.",
  "Ngừng nghĩ về việc ai đúng ai sai.",
  "Mình bắt đầu nhìn vào một điều đáng sợ hơn.",
  "Toàn bộ cuộc đời mình.",
];

const realizationIntro =
  "Nhưng điều thay đổi số phận mình lại không nằm ở cuộc cãi vã đó. Nó đến từ một câu hỏi mà trước đây mình chưa từng thật sự đối diện:";

const quoteWhy = "Tại sao kết cục luôn giống nhau?";

const realization = [
  "Trước đây, mình luôn nghĩ mình là người mạnh mẽ, sẵn sàng rời đi khi mối quan hệ không còn phù hợp. Nhưng lần đầu tiên, mình ngừng đổ lỗi cho hoàn cảnh để nhìn thẳng vào bản thân và hiện thực trước mắt.",
  "Dù là những con người khác nhau, những câu chuyện khác nhau nhưng kết cục vẫn lặp lại một cách kỳ lạ. Sau cùng, mình vẫn luôn là người ôm lấy tổn thương, luôn cảm thấy mình không đủ giá trị và đánh mất chính mình khi mọi thứ kết thúc.",
  "Trong khoảnh khắc đó, mình nhìn ra một sự thật: Đây không phải là một biến cố ngẫu nhiên. Đây là một vòng lặp.",
  "Một mô thức đã âm thầm vận hành trong cuộc đời mình suốt nhiều năm. Và nếu mình không chữa lành gốc rễ, nó sẽ tiếp tục lặp lại.",
];

const realizationClose = "Chính nhận thức đó đã thay đổi mọi thứ.";

const divorceLines = [
  "Mình quyết định ly hôn.",
  "Không phải vì hết yêu, mà vì lần đầu tiên mình hiểu rằng:",
  "Điều cần được cứu vớt không phải là một cuộc hôn nhân, mà là chính bản thân mình.",
  ];

const afterDivorce = [
  "Nhưng rời đi không đồng nghĩa với việc những giông bão bên trong sẽ tự động biến mất. Sau ly hôn vẫn là những khoảng trống, là nỗi sợ cô đơn, là những đêm dài overthinking và cảm giác bất an âm ỉ.",
  "Mình bắt đầu tu tập và học cách thiền định, học cách quay vào bên trong để đối diện với những góc khuất bản thân từng né tránh. Nhưng sự chuyển hóa thực sự chỉ bắt đầu khi mình bước sâu vào hành trình làm việc với tiềm thức thông qua Thôi miên trị liệu và các phương pháp chữa lành tận gốc.",
];

// Triết lý "đóng đinh" world view của Cycle Breaker — xuất hiện TRƯỚC khi tiết lộ
// lý do Rebirth ra đời, để người đọc thấm quan điểm trước khi nghe về giải pháp.
const cycleBreakerPhilosophy = {
  lead: "Trong suốt những năm tháng sau đó, mình nhận ra một điều:",
  core: [
    "Chúng ta không lặp lại cùng một kiểu tổn thương vì kém may mắn.",
    "Chúng ta lặp lại nó vì có một phần bên trong vẫn đang coi sự đau khổ đó là "vùng an toàn" quen thuộc.",
  ],
  wound: "Một vết thương chưa được chữa lành sẽ luôn tìm cách tái tạo chính nó.",
  faces: ["Dưới một gương mặt khác.", "Một mối quan hệ khác.", "Một hoàn cảnh khác."],
  until: "Cho đến khi chúng ta đủ can đảm nhìn thẳng vào nó.",
  witness: [
    "Đó là bài học xương máu trong cuộc đời mình, và cũng là câu chuyện mình đã chứng kiến ở hàng trăm phụ nữ mà mình có cơ hội đồng hành.",
  ],
};

const rebirthOrigin = "Đó cũng là lý do Rebirth ra đời.";
const rebirthDesc =
  "Hành trình 7 ngày này không được xây dựng từ những lý thuyết xa vời. Nó là những gì tinh gọn, thực tế và sâu sắc nhất được chắt lọc từ chính sự chuyển hóa của mình, cùng những trải nghiệm thực tế từ các khách hàng. Mình ở đây để giúp bạn rút ngắn con đường đó.";

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

const ctaBadges = [
  { icon: Monitor, label: "Học online" },
  { icon: Zap, label: "Bắt đầu ngay" },
  { icon: Users, label: "Cộng đồng riêng" },
  { icon: Infinity, label: "Truy cập trọn đời" },
];

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

// Triết lý "đóng đinh" world view của Cycle Breaker — không đóng box, chỉ dùng
// phân cấp typography + nhịp khoảng trắng để tách khỏi dòng kể chuyện và giữ
// cảm giác chuyên nghiệp, dễ đọc trên nền trắng chung của section.
function CycleBreakerStatement({ data }: { data: typeof cycleBreakerPhilosophy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-14 md:my-16"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="text-violet-800 text-base md:text-lg mb-6">{data.lead}</p>

        <div className="space-y-2.5 mb-8">
          {data.core.map((line, i) => (
            <p
              key={i}
              className="font-serif font-bold text-violet-900 text-2xl md:text-3xl leading-snug"
            >
              {line}
            </p>
          ))}
        </div>

        <p className="font-serif italic text-gray-800 text-xl md:text-2xl leading-snug mb-5">
          {data.wound}
        </p>
        <div className="space-y-2 mb-8">
          {data.faces.map((line, i) => (
            <p
              key={i}
              className="text-gray-500 text-lg md:text-xl tracking-wide leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>

        <p className="font-serif font-bold text-[#B0893A] text-xl md:text-2xl mb-10">
          {data.until}
        </p>

        <span className="block w-12 h-px bg-[#C9A84C] mx-auto mb-8" aria-hidden="true" />

        <div className="space-y-2">
          {data.witness.map((line, i) => (
            <p key={i} className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
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
        </div>

        {/* Aha moment — kéo dài nhịp, mỗi dòng một nhát cắt riêng biệt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative my-8 pl-6 md:pl-8 border-l-2 border-[#C9A84C]"
        >
          {ahaMoment.map((line, i) => (
            <p
              key={i}
              className={`font-serif ${
                i === ahaMoment.length - 1
                  ? "font-bold text-violet-900 text-2xl md:text-3xl"
                  : "font-medium text-gray-800 text-lg md:text-xl"
              } leading-snug mb-1.5`}
            >
              {line}
            </p>
          ))}
        </motion.div>

        <div className="space-y-5 text-gray-700 leading-[1.9] text-lg md:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

        <CycleBreakerStatement data={cycleBreakerPhilosophy} />

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

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {ctaBadges.map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-sm md:text-base text-violet-700/80 font-medium"
              >
                <b.icon className="w-4 h-4 text-[#B0893A]" />
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
