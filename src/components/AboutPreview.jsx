import { ArrowRight } from 'lucide-react'

const AboutPreview = ({ onMoreClick }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black text-black mb-10">About Me</h2>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 shadow-sm max-w-3xl mx-auto text-center">
        <img
          src="/profile.jpg"
          alt="Vishwa V"
          className="w-28 h-28 rounded-full object-cover mx-auto mb-6 shadow-md"
        />
        <p className="text-gray-700 text-lg mb-2">
          I'm <strong>Vishwa V</strong>, a Java Backend Developer &amp; Security Enthusiast from Chennai.
          I build robust, scalable, and secure enterprise applications using cutting-edge backend technologies.
        </p>
        <p className="text-gray-500 mb-8">
          I love backend architecture, post-quantum cryptography, and crafting meaningful projects.
        </p>
        <button
          onClick={onMoreClick}
          className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
        >
          More About Me <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default AboutPreview
