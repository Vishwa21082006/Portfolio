import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'FakeBuster AI',
    description:
      'AI-powered deepfake forensics platform with FastAPI backend, React frontend, Redis rate limiting, ClamAV malware scanning, and JWT/RBAC authorization.',
    tags: ['FastAPI', 'React', 'Redis', 'Python', 'JWT'],
    color: 'from-red-600 to-red-900',
    initial: 'FB',
    github: 'https://github.com/Vishwa21082006/Fakebusterai',
    stars: 1,
  },
  {
    title: 'DSA Algorithms',
    description:
      'Comprehensive collection of Data Structures and Algorithms implemented in Python. Covers sorting, searching, trees, graphs, dynamic programming, and more.',
    tags: ['Python', 'DSA', 'Algorithms', 'Data Structures'],
    color: 'from-emerald-600 to-emerald-900',
    initial: 'DSA',
    github: 'https://github.com/Vishwa21082006/DSA-algorithms',
    stars: 1,
  },
  {
    title: 'C0-PQLink',
    description:
      'Post-Quantum secure communication system implementing ML-KEM-512 key encapsulation and Ascon-AEAD128 encryption for IoT devices using C/C++ and MicroPython.',
    tags: ['C++', 'MicroPython', 'ML-KEM-512', 'IoT Security'],
    color: 'from-purple-700 to-purple-900',
    initial: 'PQ',
    github: 'https://github.com/Vishwa21082006/C0-PQLink-Complete-2026-07-30',
    stars: 0,
  },
  {
    title: 'Campus Registry Backend',
    description:
      'Multi-database campus registry backend built with Spring Boot. Features configuration-driven feature toggles (V1/V2) and synchronized student data management.',
    tags: ['Spring Boot', 'MySQL', 'REST API', 'Java'],
    color: 'from-blue-600 to-blue-900',
    initial: 'CR',
    github: 'https://github.com/Vishwa21082006/CampusRegistry-Backend',
    stars: 1,
  },
  {
    title: 'Multi-DB Spring Boot',
    description:
      'Spring Boot application demonstrating multi-database configuration with separate datasources, JPA contexts, and transaction management across multiple schemas.',
    tags: ['Spring Boot', 'JPA', 'PostgreSQL', 'MySQL'],
    color: 'from-orange-600 to-orange-900',
    initial: 'MDB',
    github: 'https://github.com/Vishwa21082006/multi_db_springboot',
    stars: 0,
  },
  {
    title: 'ML Hackathon 2025',
    description:
      'Amazon ML Hackathon 2025 solution — Top 10 Finalist & AIR 776 among 80,000+ participants. Machine learning model built with Python and Jupyter Notebooks.',
    tags: ['Python', 'Machine Learning', 'Jupyter', 'ML Pipeline'],
    color: 'from-amber-600 to-amber-900',
    initial: 'ML',
    github: 'https://github.com/Vishwa21082006/mlhackathon',
    stars: 1,
  },
  {
    title: 'Liquibase DB Migrations',
    description:
      'Spring Boot project demonstrating enterprise-grade database version control with Liquibase changelogs, rollback strategies, and PostgreSQL schema migrations.',
    tags: ['Java', 'Liquibase', 'Spring Boot', 'PostgreSQL'],
    color: 'from-teal-600 to-teal-900',
    initial: 'LQ',
    github: 'https://github.com/Vishwa21082006/liquibase_02',
    stars: 1,
  },
  {
    title: 'Live2D AI Assistant',
    description:
      'Hyori — a Live2D desktop AI companion built with Python and HTML featuring voice interaction, emotion-driven avatar animations, audio streaming, and memory.',
    tags: ['Python', 'HTML', 'Live2D', 'AI', 'Voice'],
    color: 'from-pink-600 to-pink-900',
    initial: 'AI',
    github: 'https://github.com/Vishwa21082006/live2d-Live-Assistant',
    stars: 0,
  },
]

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black text-black mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
          >
            {/* Banner */}
            <div className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
              <span className="text-5xl font-black text-white/20 select-none">{project.initial}</span>
              <span className="absolute top-3 right-3 text-white/70 text-xs font-medium flex items-center gap-1">
                ★ {project.stars}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold text-black mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Github size={15} /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://github.com/Vishwa21082006"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
        >
          <ExternalLink size={16} /> View All Repos on GitHub
        </a>
      </div>
    </div>
  )
}

export default Projects
