import { ArrowLeft } from 'lucide-react'

const journeyItems = [
  {
    year: '2009 – 2021',
    title: 'Schooling – Good Luck Matriculation Higher Secondary School, Srikandapuram',
    description:
      'Completed my foundational education at Good Luck Matriculation Higher Secondary School. Scored 543/600 in 10th & 11th and 549/600 in 12th — building a strong base in Science, Mathematics, and Computer Science.',
  },
  {
    year: '2023 – Present',
    title: 'B.Tech Student (Final Year) – CSBS',
    description:
      'Studying Computer Science and Business Systems at Rajalakshmi Institute of Technology, Chennai. Focusing on Backend Development, Database Systems, and Security projects. CGPA: 8.15',
  },
  {
    year: '2025',
    title: 'Java Developer Intern – Precision Infomatics',
    description:
      'Built enterprise RESTful APIs with Spring Boot, designed multi-tenant PostgreSQL schemas, and implemented Liquibase database migrations for production systems.',
  },
  {
    year: '2025',
    title: 'Quantum Computing Intern – RIT',
    description:
      'Developed a Post-Quantum Cryptography browser implementing Kyber (ML-KEM) and Dilithium algorithms for quantum-safe communications and digital signatures.',
  },
  {
    year: '2025 – 2026',
    title: 'Hackathon Achievements',
    description:
      'Top 10 in Amazon ML Hackathon 2025 (AIR 776 among 80,000+ participants). Secured Rank 2,500 among 90,000 teams in 2026 edition. Quantothon 2026 International Finalist.',
  },
]

const currentlyLearning = [
  'Microservices Architecture',
  'Distributed Systems',
  'Quantum-Safe Cryptography',
  'Cloud Computing (AWS)',
  'Docker & Kubernetes',
  'System Design',
]

const interests = [
  'Backend Architecture & System Design',
  'Post-Quantum Cryptography & Security',
  'Open Source Contributions',
  'Competitive Programming & LeetCode',
  'Building Enterprise-Grade APIs',
]

const funFacts = [
  'I love architecting scalable backend systems.',
  'I secure applications against quantum threats.',
  'I build full-stack projects for fun.',
]

const AboutDetail = ({ onBack }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Home
      </button>

      <h2 className="text-5xl font-black text-black mb-10">About Me</h2>

      {/* Bio Section */}
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Vishwa V"
            className="w-72 h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-4 text-gray-700 text-lg">
          <p>
            I'm <strong>Vishwa V</strong>, a Java Backend Developer &amp; Security Enthusiast based
            in Chennai. I enjoy building robust, scalable, and secure enterprise applications that
            solve real-world problems.
          </p>
          <p>
            My core focus is blending <strong>Spring Boot &amp; Enterprise Java</strong> and{' '}
            <strong>Post-Quantum Cryptography</strong> to create applications that are both
            high-performance and quantum-safe.
          </p>
          <p>
            I constantly explore new technologies and enjoy working on projects that challenge me to
            learn and innovate.
          </p>
        </div>
      </div>

      {/* Journey So Far */}
      <h3 className="text-4xl font-black text-black mb-8 italic">Journey So Far</h3>
      <div className="space-y-6 mb-16">
        {journeyItems.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm"
          >
            <p className="text-blue-600 font-semibold mb-1">{item.year}</p>
            <h4 className="text-xl font-bold text-black mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Currently Learning */}
      <h3 className="text-4xl font-black text-black mb-6 italic">Currently Learning</h3>
      <div className="flex flex-wrap gap-3 mb-16">
        {currentlyLearning.map((item, index) => (
          <span
            key={index}
            className="px-5 py-2.5 bg-gray-200/80 text-gray-800 rounded-lg font-medium text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Interests */}
      <h3 className="text-4xl font-black text-black mb-6 italic">Interests</h3>
      <ul className="space-y-3 mb-16 text-lg text-gray-700">
        {interests.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* Fun Facts */}
      <h3 className="text-4xl font-black text-black mb-8 italic">Fun Facts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm"
          >
            <p className="text-gray-700">{fact}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutDetail
