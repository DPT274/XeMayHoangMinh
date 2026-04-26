import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hoàng Minh Garage - Chăm sóc xe chuyên nghiệp',
  description: 'Dịch vụ sửa chữa ô tô uy tín',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>

        {/* --- HEADER CHUNG (CÓ LOGO CASTROL) --- */}
        <header className="bg-[#008148] shadow-lg sticky top-0 z-50 text-white border-b-4 border-[#ed1c24]">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            {/* LOGO CASTROL */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.svg"
                alt="Castrol Logo"
                className="h-12 w-auto bg-white p-1 rounded"
              />
              <div className="leading-tight">
                <span className="text-xl font-black block">HOÀNG MINH</span>
                <span className="text-xs tracking-widest uppercase text-yellow-400 font-bold">Garage Professional</span>
              </div>
            </div>

            {/* MENU - Tự động ẩn trên mobile, hiện trên desktop */}
            <nav className="hidden md:flex space-x-6 font-bold uppercase text-sm">
              <a href="/" className="hover:text-yellow-400 transition">Trang chủ</a>
              <a href="#" className="hover:text-yellow-400 transition">Dịch vụ</a>
              <a href="#" className="hover:text-yellow-400 transition">Giới thiệu</a>
              <a href="#" className="hover:text-yellow-400 transition">Tuyển dụng</a>
              <a href="#" className="bg-[#ed1c24] px-4 py-2 rounded shadow-md hover:bg-red-700 transition">Đăng nhập</a>
            </nav>

            {/* Nút Menu cho Mobile (hiện trên màn hình nhỏ) */}
            <div className="md:hidden text-2xl">☰</div>
          </div>
        </header>

        {/* NỘI DUNG TRANG WEB SẼ NHẢY VÀO ĐÂY */}
        {children}

        {/* --- FOOTER CHUNG --- */}
        <footer className="bg-[#008148] text-white pt-12 border-t-4 border-[#ed1c24]">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 pb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 border-l-4 border-yellow-400 pl-3">THÔNG TIN LIÊN HỆ</h3>
              <p className="mb-2">📍 <strong>Địa chỉ:</strong> 1278 TL 10, Quận Bình Tân, Tp. Hồ Chí Minh </p>
              <p className="mb-2">📞 <strong>Hotline:</strong> 0786346716 (Anh Minh)</p>
              <p className="mb-2">⏰ <strong>Giờ làm việc:</strong> 08:00 - 18:00 (T2 - CN)</p>
            </div>
            <div className="h-64 rounded-lg overflow-hidden border-2 border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7185957156817!2d106.59080547363476!3d10.756157459570089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c520f4c483b%3A0xa8642edcbdeeb4f6!2zUUg0VitGODksIDEyNzggVEwxMCwgQW8gxJDDtGksIFTDom4gVOG6oW8sIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1777206913493!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div> {/* <--- CHÍNH LÀ THẺ DIV ĐÓNG BỊ THIẾU Ở ĐÂY */}

          <div className="bg-black/20 py-4 text-center text-sm">
            © 2026 HOÀNG MINH GARAGE - Developer
          </div>
        </footer>

      </body>
    </html>
  )
}