import { ExternalLink, Github, Code2 } from 'lucide-react'

const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black text-black mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            <p className="font-semibold text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* LeetCode Stats Banner */}
      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Code2 size={24} className="text-amber-600" />
          </div>
          <div>
            <h3 className="font-bold text-black">LeetCode Profile</h3>
            <p className="text-gray-500 text-sm">150+ problems solved in Java &amp; SQL · 50-Day &amp; 100-Day 2026 streak badges</p>
          </div>
        </div>
        <a
          href="https://leetcode.com/u/Vishwa21082006/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors inline-flex items-center gap-2 flex-shrink-0"
        >
          <ExternalLink size={15} /> View LeetCode Profile
        </a>
      </div>

      {/* GitHub Button */}
      <div className="text-center">
        <a
          href="https://github.com/Vishwa21082006"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
        >
          <Github size={16} /> See Full Skillset on GitHub
        </a>
      </div>
    </div>
  )
}

export default Skills
