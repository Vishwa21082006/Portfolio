const certificates = [
  {
    title: 'Amazon ML Hackathon 2025',
    issuer: 'Amazon • 2025',
    description: 'Top 10 Finalist & AIR 776 among 80,000+ participants',
    image: null,
    color: 'from-amber-600 to-amber-800',
  },
  {
    title: 'Emerging Leader Award',
    issuer: 'Anandham Youth Foundation • 2025',
    description: 'Student Selection Process 2025',
    image: '/award.png',
    color: null,
  },
  {
    title: 'Quantothon International 2026',
    issuer: 'International Hackathon • 2026',
    description: 'Finalist in Post-Quantum Cryptography',
    image: null,
    color: 'from-purple-700 to-purple-900',
  },
]

const Certificates = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black text-black mb-10">Certificates</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            {/* Certificate Image/Banner */}
            {cert.image ? (
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className={`h-48 bg-gradient-to-br ${cert.color} flex items-center justify-center p-6`}
              >
                <span className="text-xl font-bold text-white text-center leading-tight">
                  {cert.title}
                </span>
              </div>
            )}

            {/* Certificate Info */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-black mb-1">{cert.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{cert.issuer}</p>
              <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
          View All Certificates
        </button>
      </div>
    </div>
  )
}

export default Certificates
