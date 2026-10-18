import { Mail, Github, Linkedin } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact']

const Footer = () => {
  return (
    <footer className="mt-16 bg-gradient-to-b from-transparent to-gray-100/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Name & Tagline */}
          <div>
            <h3 className="text-xl font-bold text-black mb-3">Vishwa V</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              A passionate Java Backend Developer &amp; Security Enthusiast building robust,
              scalable, and enterprise-grade applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-black mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-black mb-3">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:vishwavivekanathan2108@gmail.com"
                className="flex items-center gap-3 text-gray-500 hover:text-black text-sm transition-colors"
              >
                <Mail size={16} /> vishwavivekanathan2108@gmail.com
              </a>
              <a
                href="https://github.com/Vishwa21082006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-black text-sm transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa-v-b06782291"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-black text-sm transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200/50 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Made With ❤️ Vishwa V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
