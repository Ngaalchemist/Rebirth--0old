import { motion } from "framer-motion";
import { Heart, Repeat, ShieldAlert } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Bạn chọn ai để yêu",
    desc: "Bạn dễ bị thu hút bởi người khiến bạn phải cố gắng mới có được — vì điều đó quen thuộc với bạn.",
  },
  {
    icon: Repeat,
    title: "Bạn cư xử thế nào trong mối quan hệ",
    desc: "Bạn nhịn, bạn hạ thấp tiêu chuẩn, bạn sợ mất nên càng cố giữ — dù điều đó khiến bạn kiệt sức.",
  },
  {
    icon: ShieldAlert,
    title: "Bạn phản ứng ra sao khi bị tổn thương",
    desc: "Bạn tự trách mình trước, thay vì bảo vệ mình — vì đó là phản xạ đã hình thành từ rất lâu.",
  },
];

export function MechanismSection() {
  return (
    <section className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-800/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-[#F5D78E] leading-tight">
            TẠI SAO NÓ CỨ LẶP LẠI?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4"
        >
          Bạn không "kém may mắn". Và người ta không phải "tự nhiên tàn nhẫn".
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-y-2 border-[#C9A84C]/40 py-7 px-4 max-w-2xl mx-auto mb-12"
        >
          <p className="font-serif text-lg md:text-xl text-[#F5D78E] leading-relaxed text-center">
            Sự thật đơn giản là: từ nhỏ đến giờ, có một phần trong bạn đã học rằng —{" "}
            <span className="italic">muốn được yêu, phải cố gắng, phải nhịn, phải xứng đáng mới được ở lại.</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white font-medium text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Niềm tin đó không xuất hiện ngẫu nhiên. Nó âm thầm điều khiển 3 điều:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white/5 border border-[#C9A84C]/25 rounded-2xl p-7 hover:border-[#C9A84C]/60 hover:bg-white/[0.07] hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 flex items-center justify-center mb-5">
                <r.icon className="w-6 h-6 text-[#F5D78E]" />
              </div>
              <h3 className="font-serif font-bold text-[#F5D78E] text-lg md:text-xl mb-3">{r.title}</h3>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-[#C9A84C]/25 rounded-2xl p-8 max-w-2xl mx-auto text-center"
        >
          <p className="font-serif font-bold text-white text-xl md:text-2xl leading-snug">
            Tin tốt: đây là một mô thức <span className="text-[#F5D78E]">học được</span> — nên nó cũng{" "}
            <span className="text-[#F5D78E]">học lại được</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
