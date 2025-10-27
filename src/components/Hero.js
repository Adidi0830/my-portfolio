export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">Halo, Saya Muhammad Adi Al Saadan 👋</h1>
      <center><img src="/profile.jpg" alt="Muhammad Adi Al Saadan" className="w-48 h-48 rounded-full object-cover shadow-lg"></img></center>
      <p className="text-lg text-gray-600">Siswa • Entry Level Programmer • Pembelajar Seumur Hidup</p>
      <a href="#projects" className="mt-6 inline-block bg-black text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
        Lihat Proyek Saya
      </a>
    </section>
  );
}