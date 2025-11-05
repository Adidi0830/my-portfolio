export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      year: "2024 - Present",
      role: "Vice Chairman",
      organization: "PIK-R Srikandi",
      achievements: [
        "Memimpin program kesehatan reproduksi remaja untuk 500+ siswa",
        "Mengelola tim 15+ anggota dalam pelaksanaan kegiatan peer education",
        "Mengkoordinasikan kolaborasi dengan Puskesmas dan Dinas Kesehatan"
      ],
      skills: ["Leadership", "Program Management", "Stakeholder Coordination"]
    },
    {
      year: "2024 - Present",
      role: "Talent Development Team Member",
      organization: "OSIS Dipta Baskara - Talent & Interest Division",
      achievements: [
        "Berkontribusi dalam merancang program pengembangan bakat siswa (seni, olahraga, akademik)",
        "Mendukung pelaksanaan 10+ event ekstrakurikuler dan kompetisi siswa",
        "Membantu tracking partisipasi dan feedback siswa dalam kegiatan bakat-minat"
      ],
      skills: ["Event Support", "Youth Engagement", "Data Collection"]
    },
    {
      year: "2023 - 2024",
      role: "Head of Public Relations Division",
      organization: "OSIS Sparta",
      achievements: [
        "Memimpin divisi HUMAS dengan 8 anggota dalam strategi komunikasi sekolah",
        "Mengelola media sosial sekolah dengan engagement rate naik 60%",
        "Mengkoordinasikan publikasi 15+ event sekolah dan eksternal relations"
      ],
      skills: ["Strategic Communication", "Team Leadership", "Digital Marketing"]
    },
    {
      year: "2022 - 2023",
      role: "Religious Activities Team Member",
      organization: "OSIS Sparta - Religious Affairs Division",
      achievements: [
        "Mendukung pelaksanaan kegiatan keagamaan rutin untuk 300+ siswa",
        "Membantu pengelolaan jadwal dan logistik kegiatan Ramadan, PHBI, dan kajian rutin",
        "Berkolaborasi dengan tim dalam koordinasi program tahunan keagamaan"
      ],
      skills: ["Event Support", "Community Engagement", "Team Collaboration"]
    }
  ];

  const projectData = [
    { 
      name: "LANDING PAGE WITH HTML", 
      desc: "Membuat landing page untuk tampilan web sekolah menggunakan html", 
      link: "#",
      tech: ["HTML", "CSS"]
    },
    { 
      name: "PHP FORM", 
      desc: "Aplikasi form dengan tampilan sederhana menggunakan php dan css sederhana", 
      link: "#",
      tech: ["PHP", "CSS"]
    },
    { 
      name: "COMING SOON", 
      desc: "Sistem manajemen kurikulum sekolah", 
      link: "#",
      tech: ["TBA"]
    },
  ];

  return (
    <section id="experience" className="py-20" style={{ backgroundColor: '#F8FBF9' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#124170' }}>
            Experience & Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan organisasi dan karya yang telah saya kerjakan
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg p-1" style={{ backgroundColor: '#DDF4E7' }}>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'shadow-md'
                  : 'hover:bg-white/50'
              }`}
              style={{
                backgroundColor: activeTab === 'experience' ? '#67C090' : 'transparent',
                color: activeTab === 'experience' ? 'white' : '#26667F'
              }}
            >
              Organizational Experience
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'shadow-md'
                  : 'hover:bg-white/50'
              }`}
              style={{
                backgroundColor: activeTab === 'projects' ? '#67C090' : 'transparent',
                color: activeTab === 'projects' ? 'white' : '#26667F'
              }}
            >
              Projects
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-500">
          {activeTab === 'experience' ? (
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{ borderLeft: '4px solid #67C090' }}
                >
                  <div className="p-6 md:p-8">
                    {/* Timeline Dot & Year */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#67C090' }}></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <span className="text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2 md:mb-0" style={{ backgroundColor: '#DDF4E7', color: '#26667F' }}>
                            {exp.year}
                          </span>
                        </div>
                        
                        {/* Role & Organization */}
                        <h3 className="text-2xl font-bold mb-1" style={{ color: '#124170' }}>
                          {exp.role}
                        </h3>
                        <p className="font-medium mb-4" style={{ color: '#26667F' }}>
                          {exp.organization}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="mt-1.5 flex-shrink-0">
                                <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8" style={{ color: '#67C090' }}>
                                  <circle cx="4" cy="4" r="3" />
                                </svg>
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-sm px-3 py-1 rounded-full font-medium"
                              style={{ backgroundColor: '#F8FBF9', color: '#26667F', border: '1px solid #DDF4E7' }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {projectData.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-opacity-80 transition-all" style={{ color: '#124170' }}>
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.desc}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md font-medium"
                          style={{ backgroundColor: '#DDF4E7', color: '#26667F' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                      style={{ color: '#67C090' }}
                    >
                      Lihat Detail
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}