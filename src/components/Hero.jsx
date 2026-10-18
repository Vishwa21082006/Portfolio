const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <p className="text-gray-600 text-lg italic">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-black text-black leading-tight">
          Vishwa V
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-black">
          Student | Java Backend Developer
        </h2>
        <p className="text-gray-600 text-lg max-w-lg">
          A passionate <strong>Java Backend Developer</strong> &amp; <strong>Security Enthusiast</strong>{' '}
          who loves building robust, scalable, and enterprise-grade applications.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Photo */}
      <div className="flex-shrink-0">
        <img
          src="/profile.jpg"
          alt="Vishwa V"
          className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default Hero
