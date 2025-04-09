import React, { useState } from 'react';
import {
  Brain,
  Users,
  Clock,
  Bell,
  Shield,
  Mic,
  Cpu,
  Cloud,
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
} from 'lucide-react';

function App() {
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setEmailInput('');
    setMessageInput('');
  };

  return (
    <div className="min-h-screen animate-gradient">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1587554801471-37976a256db0?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="text-center text-white z-10 px-4 animate-float">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Next-Gen Attendance System<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Powered by AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Automated. Accurate. Secure.
          </p>
          <a 
            href="#about"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a href="#about" className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden section-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-pulse-soft">About the Project</h2>
          <div className="prose lg:prose-xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover-card">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Smart Face Recognition Attendance System leverages cutting-edge technology to revolutionize traditional attendance tracking. Built on the powerful combination of Raspberry Pi, Python, and OpenCV, this system delivers real-time face recognition with unprecedented accuracy and reliability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              The system can simultaneously detect and recognize up to 5 individuals, tracking both entry and exit times automatically. Enhanced security features include buzzer alerts for unauthorized personnel and advanced liveness detection to prevent spoofing attempts. All data is seamlessly synchronized to the cloud, enabling secure access from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden wave-pattern">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-pulse-soft">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Brain size={32} />, title: 'Real-time Recognition', desc: 'Instant face detection and recognition' },
              { icon: <Users size={32} />, title: 'Multi-person Detection', desc: 'Track up to 5 people simultaneously' },
              { icon: <Clock size={32} />, title: 'IN/OUT Tracking', desc: 'Automated attendance logging' },
              { icon: <Bell size={32} />, title: 'Alert System', desc: 'Instant notifications for security' },
              { icon: <Shield size={32} />, title: 'Liveness Detection', desc: 'Prevent spoofing attempts' },
              { icon: <Mic size={32} />, title: 'Voice Feedback', desc: 'Audio confirmation system' },
              { icon: <Cpu size={32} />, title: 'Edge AI Processing', desc: 'Local processing for speed' },
              { icon: <Cloud size={32} />, title: 'Cloud Integration', desc: 'Secure data synchronization' },
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover-card">
                <div className="text-blue-600 mb-4 bg-blue-50 p-4 rounded-lg inline-block">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden section-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-pulse-soft">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'OpenCV', icon: '👁️' },
              { name: 'Raspberry Pi', icon: '🥧' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'Firebase', icon: '🔥' }
            ].map((tech, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center hover-card">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <p className="text-xl font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden wave-pattern">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-pulse-soft">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'B.Jaswanth', role: 'Project Lead', image: 'https://media-hosting.imagekit.io/6142615a9ee44c6f/WhatsApp%20Image%202025-04-09%20at%2000.01.22_e53377e0.jpg?Expires=1838745113&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QpIEQXvvE6WNrtwMHU9XM52OJNCQudEDxKHpWL3nkTh3Lh3HhQ5iOPqPi51OMudvLYyzn8nSoxxuBZo3Kc6lgGQqNI2vwoyeK3mfP~oq5rhxT3EuazoojZlycq-pCHLv9ay6Fg4K1yqosTZpiDkGj2V3iofJOImfGkpEN~ZP2vCjHq66iSYRDAkDuTtlRS2gAzsa2GhYu8q5XhRf0L0Cl4cVLpZotdD2Q4z4eQunc7~8xpihJ61obj5mfX71Hn400xapaxGT49I5oUnFI41~6aXOhOi4sE289ET0we52pJCBhl70iVdQ2gZgr50RdjA~Hf8eCQfIlw2gVrGUR1ktWg__' },
              { name: 'N.Ganesh', role: 'Full Stack Developer', image: 'https://media-hosting.imagekit.io/1d45e716f75b4f5e/WhatsApp%20Image%202025-04-09%20at%2000.04.12_39627c07.jpg?Expires=1838745278&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f9KGEeBOkONU8SET9HiJWL8Bcx4K-F68YkTiGyiw7eY9yg7JqszVcsaIBlCxzTPydgDbGEENNdyLP03shdTKApHM1s7LIyvxPAgKFao9pYAmLaAUDtKf-1oVOV6D3p7qHGbFTFBbI77qEhwcIVah03bJ3TEX0T~6VKTvGfhZINH025P22BdtmhtsVWHr-9tpYKGHpVEGkVLzbQmPy9Vzldue9Db2~Ok9drxxmsjTb-K4pEciiiSJBxRFNUoEA64mCJDIfvag-kkr3yMnLq9X1lNwfzP62XyTmsqvy1bFH3LEzKT3DyzV0O~Z-VG-EOgWMjjsi9AmhpY3nLEYLFZOzQ__' },
              { name: 'A.Charan', role: 'Researcher', image: 'https://media-hosting.imagekit.io/2bb38ff4e61542ec/WhatsApp%20Image%202025-04-08%20at%2023.14.51_431e108d.jpg?Expires=1838744974&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=R4hQ0RTncdDM-hDw5Qb9R~a9~lwObnCiZSI4YQhyg6246Zzx6RnfCh8KdNVUnumuKwPodrZUN8ksnboRuCVZOooqyQT69VJmDUKvRbG0y2F3EthNck6bBq0p12d6W3NOZRzLLPpdL738~fMzE1JDJ6n~ZJ4PGw9a4za9BXT~Y3noC~N4ti2V0jMifJhsK1SNsd9z2wFj9cLoHs6fZK4rsJONrNFuLqq3~Dw1e2nkqT0BapNCznGwsJiJzkjvDFavDQc0GDaywlKGd0eTRibdovl5fdzhxk1dOkdC0kfjGlQQgg9nvPxJXvXw-rCJ99ksv~nBlcHumNpzabnfkZeV1A__' },
              { name: 'A.Sandeep', role: 'IoT Specialist', image: 'https://media-hosting.imagekit.io/2dd2a68007d14da5/WhatsApp%20Image%202025-04-09%20at%2000.06.05_c6885ef4.jpg?Expires=1838745392&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Tz1pFRAwucbTq3GAikokU3r73w6tc8ZoByTYBC0QLsH2KYOLx9pYbg1DtiUQXcrwTc0gYyUHm0L~Yb3sizP8UsBxaWAD2vK6pJNlv1PFIG6zfzL-5OJ2oE7TG7WdeL-yvqDwg6OBsRDomUmOdXP3CFm91h15WuX3FLeJWylPAKzwIyt62L1iencmk6pSEJt~TYes9dN025pWxsoxr-cO7A6q-VoW4Q~iqD80Re-RbJ6nS6Ab~1aHehymjtngSPcIAakR1CKyHV3g~lTGkS1T4Zx3USMOuRN~XPn7PNImw4vtuXnhDgCSauL4UOR9-1dbRGGjc623S7ymosC-yYtQ-Q__' },
            ].map((member, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover-card group">
                <div 
                  className="w-32 h-32 rounded-full mx-auto mb-6 bg-cover bg-center ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Github className="cursor-pointer hover:text-gray-700 transition-colors" size={24} />
                  <Linkedin className="cursor-pointer hover:text-blue-600 transition-colors" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden section-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-pulse-soft">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { metric: '90.5%', label: 'Recognition Accuracy', icon: '🎯' },
              { metric: '5', label: 'Concurrent Recognition', icon: '👥' },
              { metric: '95%', label: 'Energy Efficiency', icon: '⚡' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg text-center hover-card">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <p className="text-5xl font-bold gradient-text mb-4">{stat.metric}</p>
                <p className="text-xl text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden wave-pattern">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-pulse-soft">Contact Us</h2>
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Smart Face Recognition Attendance System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;