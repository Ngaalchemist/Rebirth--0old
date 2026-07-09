export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0420] border-t border-white/10 py-10">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="font-serif font-bold text-[#F5D78E] text-sm md:text-base tracking-wide mb-2">
          REBIRTH — 7 NGÀY THOÁT NỖI SỢ BỊ BỎ RƠI
        </p>
        <p className="text-gray-400 text-xs md:text-sm mb-4">Nga Alchemist · Cycle Breaker</p>
        <p className="text-gray-500 text-[11px] md:text-xs">
          © {year} Nga Alchemist. Đây là sản phẩm giáo dục và chữa lành cá nhân, không thay thế cho tư vấn y tế
          hoặc trị liệu tâm lý chuyên sâu.
        </p>
      </div>
    </footer>
  );
}
