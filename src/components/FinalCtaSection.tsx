import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

export function FinalCtaSection() {
  const scrollToReg = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-28 bg-[#140728] relative overflow-hidden">
      {/* Ambient glow mờ ảo sang trọng */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto space-y-8"
        >
          {/* Tiêu đề chính: Font Serif quý phái, kích cỡ vừa vặn và thoáng đãng */}
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#F5D78E] tracking-wide uppercase leading-tight">
            BẠN ĐÃ CHỊU ĐỰNG ĐỦ RỒI
          </h2>

          {/* Khối văn bản tâm sự: Hạ size xuống text-base/text-lg, dùng font-light tạo nét thanh lịch */}
          <div className="space-y-4 text-gray-300 font-light text-base md:text-lg leading-relaxed tracking-wide">
            <p>
              Nếu bạn cảm thấy đã đến lúc ngừng yêu trong thiếu thốn, 
              ngừng chờ một tín hiệu để thấy mình đủ,
            </p>
            <p className="text-gray-200 font-normal">
              và bắt đầu xây lại cảm giác an toàn từ bên trong…
            </p>
            {/* Câu chốt: Chuyển sang font chữ nghiêng Serif mềm mại, tạo chiều sâu cảm xúc */}
            <p className="text-[#F5D78E] font-serif italic text-lg md:text-xl pt-2 block">
              Hành trình này đang ở đây để đồng hành cùng bạn.
            </p>
          </div>

          {/* CTA & TrustBar */}
          <div className="space-y-6 pt-2">
            <CtaButton
              onClick={scrollToReg}
              /* Nút bấm thuôn dài cao cấp: hạ size chữ nút xuống text-sm/text-base, tăng tracking-widest */
              className="text-sm md:text-base px-10 py-4 tracking-widest font-semibold shadow-[0_10px_40px_rgba(201,168,76,0.15)] bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A] uppercase transition-all duration-300"
              data-testid="button-cta-final"
            >
              TÔI SẴN SÀNG BẮT ĐẦU HÀNH TRÌNH 7 NGÀY
            </CtaButton>
            
            {/* Thanh cam kết nhỏ gọn tinh tế phía dưới */}
            <div className="opacity-80 scale-90 md:scale-95 origin-center">
              <TrustBar dark />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
