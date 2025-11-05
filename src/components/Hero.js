export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8FBF9 0%, #DDF4E7 50%, #F8FBF9 100%)' }}>
      {/* Floating Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ 
            background: '#67C090',
            top: '-10%',
            left: '-5%',
            animationDuration: '4s'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ 
            background: '#26667F',
            bottom: '-10%',
            right: '-5%',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl animate-pulse"
          style={{ 
            background: '#124170',
            top: '40%',
            right: '10%',
            animationDuration: '5s',
            animationDelay: '2s'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Gradient Border */}
          <div className="mb-8 inline-block animate-fadeIn">
            <div 
              className="p-1 rounded-full inline-block"
              style={{ 
                background: 'linear-gradient(135deg, #67C090 0%, #26667F 100%)',
                boxShadow: '0 10px 40px rgba(103, 192, 144, 0.3)'
              }}
            >
              <img 
                src="/Profile.jpg" 
                alt="Muhammad Adi Al Saadan" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover bg-white"
              />
            </div>
          </div>

          {/* Greeting Badge */}
          <div className="mb-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{ 
                backgroundColor: '#DDF4E7',
                color: '#26667F'
              }}
            >
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn"
            style={{ 
              color: '#124170',
              animationDelay: '0.4s'
            }}
          >
            Muhammad Adi Al Saadan
          </h1>

          {/* Tagline */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            <span 
              className="px-4 py-2 rounded-lg font-semibold text-sm md:text-base"
              style={{ 
                backgroundColor: 'white',
                color: '#26667F',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}
            >
              Data Enthusiast
            </span>
            <span style={{ color: '#67C090' }}>•</span>
            <span 
              className="px-4 py-2 rounded-lg font-semibold text-sm md:text-base"
              style={{ 
                backgroundColor: 'white',
                color: '#26667F',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}
            >
              Organizational Leader
            </span>
            <span style={{ color: '#67C090' }}>•</span>
            <span 
              className="px-4 py-2 rounded-lg font-semibold text-sm md:text-base"
              style={{ 
                backgroundColor: 'white',
                color: '#26667F',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}
            >
              Lifelong Learner
            </span>
          </div>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn"
            style={{ animationDelay: '0.8s' }}
          >
            Passionate about turning data into insights and leading impactful initiatives. 
            Currently exploring the intersection of analytics and organizational development.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fadeIn"
            style={{ animationDelay: '1s' }}
          >
            <a
              href="#experience"
              className="group px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              style={{ 
                backgroundColor: '#67C090',
                color: 'white'
              }}
            >
              View My Journey
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: 'white',
                color: '#26667F',
                border: '2px solid #67C090'
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          style={{ color: '#67C090' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}