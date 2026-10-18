import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = ({ onHomeClick, showAboutDetail }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact']

  const handleClick = (item) => {
    setMobileOpen(false)
    if (item === 'Home') {
      onHomeClick()
    } else if (!showAboutDetail) {
      const el = document.getElementById(item.toLowerCase())
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      onHomeClick()
      setTimeout(() => {
        const el = document.getElementById(item.toLowerCase())
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#b8d4e8]/80 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-black cursor-pointer tracking-tight select-none"
          onClick={onHomeClick}
        >
          VV
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="block w-full text-left text-gray-700 hover:text-black hover:bg-white/30 font-medium py-2.5 px-3 rounded-lg transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
