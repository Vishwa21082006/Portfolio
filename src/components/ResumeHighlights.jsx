import { Download, FileText } from 'lucide-react'

const highlights = [
  {
    title: 'Academic Performance',
    items: [
      'CGPA: 8.15',
      'Strong in CS Fundamentals',
      'Best: Data Structures, System Design, Database Systems',
    ],
  },
  {
    title: 'Technical Strengths',
    items: [
      'Spring Boot & Enterprise Java',
      'Post-Quantum Cryptography',
      'API & Database Architecture',
    ],
  },
  {
    title: 'Experience & Hackathons',
    items: [
      'Precision Infomatics (Java Dev Intern)',
      'RIT (Quantum Computing Intern)',
      'Top 10 Amazon ML Hackathon 2025',
    ],
  },
]

const ResumeHighlights = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Resume Download */}
      <h2 className="text-4xl font-black text-black mb-6 flex items-center gap-3">
        <FileText size={36} /> Resume
      </h2>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
        <div>
          <h3 className="text-xl font-bold text-black mb-2">Download My Resume</h3>
          <p className="text-gray-500 max-w-md">
            Get my updated resume to explore my education, skills, projects, experience, and
            achievements in detail.
          </p>
        </div>
        <a
          href="/Vishwa_V_Resume.pdf"
          download
          className="px-6 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 flex-shrink-0"
        >
          <Download size={20} /> Download Resume
        </a>
      </div>

      {/* Highlights */}
      <h2 className="text-4xl font-black text-black mb-8">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-black mb-4">{highlight.title}</h3>
            <ul className="space-y-2">
              {highlight.items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-600 text-sm flex items-start gap-2"
                >
                  <span className="text-gray-400 mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeHighlights
