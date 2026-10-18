import { Trophy, Award, Star } from 'lucide-react'

const achievements = [
  {
    title: 'Amazon ML Hackathon 2025',
    subtitle: 'Amazon • 2025',
    description: '🏆 Top 10 Finalist & AIR 776 among 80,000+ participants nationwide.',
    image: null,
    color: 'from-amber-500 to-amber-700',
    badge: 'Top 10',
    icon: <Trophy size={28} className="text-white" />,
  },
  {
    title: 'Emerging Leader Award',
    subtitle: 'Anandham Youth Foundation • Sep 2025',
    description: '🥇 Recognized for outstanding leadership in the Student Selection Process 2025.',
    image: '/award.png',
    color: null,
    badge: 'Award',
    icon: <Award size={28} className="text-white" />,
  },
  {
    title: 'Amazon ML Hackathon 2026',
    subtitle: 'Amazon • 2026',
    description: '🎯 Secured Rank 2,500 among 90,000 competing teams globally.',
    image: null,
    color: 'from-orange-500 to-orange-700',
    badge: 'Rank 2500',
    icon: <Star size={28} className="text-white" />,
  },
  {
    title: 'Quantothon International 2026',
    subtitle: 'International Hackathon • 2026',
    description: '🔬 Finalist in Post-Quantum Cryptography category at the International Quantothon.',
    image: null,
    color: 'from-purple-600 to-purple-900',
    badge: 'Finalist',
    icon: <Trophy size={28} className="text-white" />,
  },
  {
    title: 'LeetCode Streak Badges',
    subtitle: 'LeetCode • 2026',
    description: '⚡ 150+ problems solved in Java & SQL with 50-Day and 100-Day 2026 streak badges.',
    image: null,
    color: 'from-yellow-500 to-yellow-700',
    badge: '100-Day',
    icon: <Star size={28} className="text-white" />,
  },
]

const Achievements = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black text-black mb-10">Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
          >
            {/* Image or colored banner */}
            {item.image ? (
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
            ) : (
              <div className={`h-36 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                {item.icon}
                <span className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
            )}

            {/* Content */}
            <div className="p-5 flex-1">
              <h3 className="text-base font-bold text-black mb-1">{item.title}</h3>
              <p className="text-gray-400 text-xs mb-3">{item.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
