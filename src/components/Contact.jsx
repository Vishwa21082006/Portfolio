import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black text-black mb-10">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-black mb-4">Contact Information</h3>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-black text-sm">Email</p>
              <p className="text-gray-500 text-sm">vishwavivekanathan2108@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone size={20} className="text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-black text-sm">Phone</p>
              <a href="tel:+919790344520" className="text-gray-500 text-sm hover:text-black transition-colors">+91 9790344520</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-black text-sm">Location</p>
              <p className="text-gray-500 text-sm">Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-black mb-6">Send Me a Message</h3>
          <form name="contact" method="POST" data-netlify="true" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-black/20 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-black/20 text-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-black/20 text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
