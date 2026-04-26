"use client"
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [mainSlide, setMainSlide] = useState(0);
  const [sideSlide, setSideSlide] = useState(0);
  const [showContacts, setShowContacts] = useState(false);

  const mainImages = [
    "https://images.unsplash.com/photo-1486006396193-471068589dca?q=80&w=1200",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200"
  ];

  const sideImages = [
    "https://images.unsplash.com/photo-1632823471565-1ec2c63dbd0c?q=80&w=800", // Ảnh thợ sửa xe
    "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800", // Ảnh thay dầu
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800"  // Ảnh kiểm tra máy
  ];

  useEffect(() => {
    const mainTimer = setInterval(() => setMainSlide(p => (p + 1) % mainImages.length), 5000);
    const sideTimer = setInterval(() => setSideSlide(p => (p + 1) % sideImages.length), 3500);
    return () => { clearInterval(mainTimer); clearInterval(sideTimer); };
  }, []);

  const [formData, setFormData] = useState({ ten_khach_hang: '', so_dien_thoai: '', loai_xe: '', van_de: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Đang gửi...');
    const { error } = await supabase.from('lich_hen').insert([formData]);
    if (error) setStatus('Lỗi kết nối!');
    else {
      setStatus('Gửi thành công!');
      setFormData({ ten_khach_hang: '', so_dien_thoai: '', loai_xe: '', van_de: '' });
    }
  };

  return (
    <main className="bg-gray-100 overflow-x-hidden">

      {/* SLIDESHOW CHÍNH (BANNER TO) */}
      <section className="relative h-[300px] md:h-[550px] overflow-hidden">
        {mainImages.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === mainSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={img} className="w-full h-full object-cover" alt="Banner" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-6xl font-black text-center px-4">
                CHĂM SÓC XE THEO <br /> <span className="text-yellow-400 uppercase">Tiêu chuẩn Castrol</span>
              </h1>
            </div>
          </div>
        ))}
      </section>

      {/* PHẦN GIỮA: SLIDE NHỎ KẾ BÊN FORM ĐĂNG KÝ */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* SLIDESHOW BÊN TRÁI (Chiếm 2/3 trên Desktop) */}
          <div className="lg:col-span-2 relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            {sideImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === sideSlide ? 'opacity-100' : 'opacity-0'}`}
                alt="Hoạt động Garage"
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#008148] p-6">
              <h3 className="text-white text-xl font-bold">Hình ảnh thực tế tại Garage</h3>
              <p className="text-yellow-300 text-sm">Chuyên nghiệp - Minh bạch - Tận tâm</p>
            </div>
          </div>

          {/* FORM ĐĂNG KÝ BÊN PHẢI (Chiếm 1/3 trên Desktop) */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl border-t-8 border-[#008148] flex flex-col justify-center">
            <h3 className="text-2xl font-black text-[#008148] mb-4 text-center italic">ĐẶT LỊCH NGAY</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Họ và tên" required value={formData.ten_khach_hang} onChange={e => setFormData({ ...formData, ten_khach_hang: e.target.value })} className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#008148] outline-none text-black" />
              <input type="tel" placeholder="Số điện thoại" required value={formData.so_dien_thoai} onChange={e => setFormData({ ...formData, so_dien_thoai: e.target.value })} className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#008148] outline-none text-black" />
              <input type="text" placeholder="Dòng xe (VD: Toyota, Mazda...)" required value={formData.loai_xe} onChange={e => setFormData({ ...formData, loai_xe: e.target.value })} className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#008148] outline-none text-black" />
              <textarea placeholder="Nội dung cần sửa chữa" required rows={3} value={formData.van_de} onChange={e => setFormData({ ...formData, van_de: e.target.value })} className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#008148] outline-none text-black"></textarea>
              <button className="w-full bg-[#ed1c24] hover:bg-[#c1131a] text-white font-black py-4 rounded-lg shadow-lg transform transition active:scale-95">GỬI YÊU CẦU ĐẶT LỊCH</button>
            </form>
            {status && <p className="mt-3 text-center font-bold text-[#008148] animate-pulse">{status}</p>}
          </div>

        </div>
      </section>

      {/* NÚT LIÊN HỆ NỔI GÓC PHẢI */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
        {showContacts && (
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
            <a href="#" className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">FB</a>
            <a href="#" className="bg-blue-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">Zalo</a>
            <a href="#" className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">YT</a>
          </div>
        )}
        <button
          onClick={() => setShowContacts(!showContacts)}
          className="bg-[#ed1c24] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl animate-bounce hover:scale-110 transition"
        >
          {showContacts ? '×' : '📞'}
        </button>
      </div>

    </main>
  )
}