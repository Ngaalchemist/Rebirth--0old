import { motion } from "framer-motion";
import { ChevronRight, Heart, Shield, Sparkles } from "lucide-react";
import { TrustBar } from "./CtaButton";

const steps = [
  {
    label: "TRẠM 1: NGÀY 1-2",
    title: "Giải Mã Vòng Lặp & Xây Nền An Toàn",
    desc: "Giải mã kịch bản bỏ rơi đang lặp lại và phá băng lo âu hệ thần kinh. Thiết lập trạng thái an toàn vững chãi bên trong cơ thể để sẵn sàng cho hành trình chữa lành.",
    Icon: Sparkles,
  },
  {
    label: "TRẠM 2: NGÀY 3-4",
    title: "Chữa Lành Đứa Trẻ – Giải Phóng Tổn Thương",
    desc: 'Hóa giải sự tự trách và giải tỏa cảm xúc dồn nén qua thân thể. Đưa "đứa trẻ bên trong" về vùng an toàn bằng sự thấu cảm của người lớn thông thái.',
    Icon: Heart,
  },
  {
    label: "TRẠM 3: NGÀY 5-6",
    title: "Định Hình Ranh Giới – Tái Lập Quyền Năng",
    desc: 'Xóa bỏ những niềm tin tiêu cực giới hạn và thiết lập "ranh giới thép" để bảo vệ bản thân. Dịch chuyển vị thế từ nạn nhân sang người làm chủ cuộc đời.',
    Icon: Shield,
  },
  {
    label: "TRẠM 4: NGÀY 7",
    title: "Nhảy Lượng Tử - Tái Sinh Bản Sắc Mới",
    desc: 'Rũ bỏ lớp mặt nạ cũ kỹ, tái sinh một bản sắc mới đầy nội lực và chính thức trở thành "bến đỗ" trọn vẹn, bình an nhất cho chính mình.',
    Icon: Sparkles,
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="w-full bg-white/[0.04] backdrop-blur-sm border border-[#C9A84C]/40 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-5 md:p-6 text-center">
      <span className="inline-block bg-[#C9A84C]/15 border border-[#C9A84C]/50 text-[#F5D78E] font-bold text-[11px] md:text-xs tracking-wider px-3 py-1 rounded-full mb-3">
        {step.label}
      </span>
      <h3 className="font-serif font-extrabold text-[#F5D78E] text-lg md:text-xl mb-2 leading-snug">{step.title}</h3>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{step.desc}</p>
    </div>
  );
}

function StationIcon({ Icon }: { Icon: typeof Heart }) {
  return (
    <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1c0c38] border-2 border-[#C9A84C] ring-4 ring-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_25px_rgba(201,168,76,0.45)]">
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#F5D78E]" strokeWidth={1.75} />
    </div>
  );
}

export function SolutionSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="solution" className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-900/25 blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#F5D78E] leading-tight">
            Lộ Trình 4 Giai Đoạn Chuyển Hóa
          </h2>
        </motion.div>

        {/* ── DESKTOP horizontal timeline (alternating above / below) ── */}
        <div className="hidden md:grid grid-cols-4 relative mb-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#C9A84C]/25 via-[#C9A84C] to-[#C9A84C]/25" />

          {steps.map((step, i) => {
            const above = i % 2 === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: above ? -25 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex flex-col items-center h-[420px] px-3"
              >
                <div className="flex-1 flex items-end pb-5 w-full">
                  {above && <StepCard step={step} />}
                </div>

                <StationIcon Icon={step.Icon} />

                <div className="flex-1 flex items-start pt-5 w-full">
                  {!above && <StepCard step={step} />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── MOBILE vertical stack ── */}
        <div className="md:hidden space-y-5 mb-6 relative pl-7">
          <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#C9A84C]/25 via-[#C9A84C] to-[#C9A84C]/25" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-[29px] top-4 w-8 h-8 rounded-full bg-[#1c0c38] border-2 border-[#C9A84C] ring-2 ring-[#C9A84C]/25 flex items-center justify-center shadow-[0_0_15px_rgba(201,168,76,0.4)]">
                <step.Icon className="w-3.5 h-3.5 text-[#F5D78E]" strokeWidth={1.75} />
              </div>
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-solution"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.6)] mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI MUỐN BẮT ĐẦU HÀNH TRÌNH NÀY</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
