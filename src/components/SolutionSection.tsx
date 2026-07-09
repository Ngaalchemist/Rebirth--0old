import { motion } from "framer-motion";

const stages = [
  {
    range: "Ngày 1–2",
    title: "Hiểu vì sao mình cứ lặp lại",
    desc: "Nhận diện đúng mô thức cũ đang điều khiển cách bạn yêu — để hiểu rõ vì sao mình cứ rơi vào tình huống này.",
  },
  {
    range: "Ngày 3–4",
    title: "Ngừng tự trách, chữa lành cảm xúc cũ",
    desc: "Giải tỏa những cảm xúc dồn nén, hóa giải sự tự trách bản thân — để thấy nhẹ lòng hơn.",
  },
  {
    range: "Ngày 5–6",
    title: "Học đặt ranh giới, ngừng chiều lòng người khác",
    desc: 'Xây "ranh giới thép" để bảo vệ bản thân — biết nói "không" mà không thấy tội lỗi.',
  },
  {
    range: "Ngày 7",
    title: "Bắt đầu lại với phiên bản tự tin hơn",
    desc: "Sẵn sàng bước vào mối quan hệ mới mà không mang theo nỗi sợ cũ.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            LỘ TRÌNH 7 NGÀY — RÕ RÀNG, DỄ HÌNH DUNG
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Mỗi ngày gồm: 1 video bài học (15–20 phút) + bài tập viết + audio thực hành đi kèm.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[27px] w-0.5 bg-gradient-to-b from-[#C9A84C]/60 via-[#C9A84C]/30 to-transparent" />

          <div className="space-y-6">
            {stages.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6 items-start"
              >
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[#140728] border-2 border-[#C9A84C] flex items-center justify-center">
                  <span className="text-[#F5D78E] font-serif font-bold text-sm">{i + 1}</span>
                </div>
                <div className="flex-1 bg-violet-50/50 border border-violet-100 rounded-2xl p-6 md:p-7">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#B0893A] mb-2">
                    {s.range}
                  </p>
                  <h3 className="font-serif font-bold text-gray-900 text-lg md:text-xl mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
