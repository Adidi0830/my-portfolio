export default function Certificate() {
  const certificates = [
    {
      name: "HARDWARE FUNDAMENTALS",
      platform: "UpMySkill ACP",
      date: "02 Mei 2025",
      preview: "/ACP1.png", // Ganti dengan path gambar sertifikat lo
      link: "#"
    },
    {
      name: "DATA SCIENCE FUNDAMENTALS",
      platform: "Dicoding Indonesia",
      date: "01 Oktober 2025",
      preview: "/DCDDDS.png", // Ganti dengan path gambar sertifikat lo
      link: "#"
    },
    {
      name: "SQL FUNDAMENTALS",
      platform: "Dicoding Indonesia",
      date: "09 Oktober 2025",
      preview: "/DSQL.png", // Ganti dengan path gambar sertifikat lo
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">🏆 Sertifikat Saya</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {certificates.map((c, i) => (
            <div 
              key={i} 
              className="border rounded-2xl shadow overflow-hidden hover:shadow-lg transition hover:-translate-y-1"
            >
              {/* Preview Gambar Sertifikat */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={c.preview} 
                  alt={c.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100"><span class="text-6xl">📜</span></div>';
                  }}
                />
              </div>
              
              {/* Info Sertifikat */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{c.name}</h3>
                <p className="text-gray-600 mb-1">{c.platform}</p>
                <p className="text-gray-500 text-sm mb-4">Issued: {c.date}</p>
                <a 
                  href={c.link} 
                  className="text-yellow-500 hover:text-black font-semibold"
                >
                  Lihat Sertifikat →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}