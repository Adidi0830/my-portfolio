class Certificate {
    constructor() {
        this.certificates = [
            {
                title: "Web Development Fundamentals",
                platform: "Coursera",
                date: "Jan 2025",
                icon: "🏆",
                gradient: "from-yellow-400 to-orange-500",
                buttonColor: "bg-yellow-500 hover:bg-yellow-600",
                link: "#"
            },
            {
                title: "JavaScript Programming",
                platform: "Dicoding Indonesia",
                date: "Dec 2024",
                icon: "📜",
                gradient: "from-blue-400 to-indigo-500",
                buttonColor: "bg-blue-500 hover:bg-blue-600",
                link: "#"
            },
            {
                title: "Responsive Web Design",
                platform: "FreeCodeCamp",
                date: "Nov 2024",
                icon: "🎓",
                gradient: "from-pink-400 to-red-500",
                buttonColor: "bg-pink-500 hover:bg-pink-600",
                link: "#"
            }
        ];
    }

    createCertificateCard(cert) {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300';

        card.innerHTML = `
            <div class="h-40 bg-gradient-to-br ${cert.gradient} flex items-center justify-center">
                <span class="text-white text-5xl">${cert.icon}</span>
            </div>
            <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">${cert.title}</h3>
                <p class="text-gray-600 text-sm mb-1">${cert.platform}</p>
                <p class="text-gray-500 text-sm mb-4">Issued: ${cert.date}</p>
                <a href="${cert.link}" class="block w-full ${cert.buttonColor} text-white text-center py-2 rounded-lg transition">View Certificate</a>
            </div>
        `;

        return card;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container dengan id "${containerId}" tidak ditemukan!`);
            return;
        }

        container.innerHTML = '';
        
        this.certificates.forEach(cert => {
            const card = this.createCertificateCard(cert);
            container.appendChild(card);
        });
    }

    getCertificates() {
        return this.certificates;
    }

    addCertificate(certData) {
        this.certificates.push(certData);
    }
}

export default Certificate;