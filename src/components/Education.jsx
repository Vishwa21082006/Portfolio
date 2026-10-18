import { GraduationCap } from 'lucide-react'

const educations = [
  {
    institution: 'Rajalakshmi Institute of Technology, Chennai',
    degree: 'B.Tech in Computer Science and Business Systems (CSBS)',
    year: '2023 – 2027 (Final Year)',
    score: 'CGPA: 8.15',
    scoreColor: 'text-purple-600',
    extra: null,
  },
  {
    institution: 'Good Luck Matriculation Higher Secondary School, Srikandapuram',
    degree: 'Higher Secondary Education (Science Stream)',
    year: '2021 – 2023',
    score: '549 / 600',
    scoreColor: 'text-emerald-600',
    extra: '10th & 11th: 543 / 600',
  },
]

const Education = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black text-black mb-8 flex items-center gap-3">
        <GraduationCap size={36} /> Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap size={24} className="text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-black text-sm leading-tight">
                  {edu.institution}
                </h3>
                {edu.score && (
                  <span
                    className={`text-xs font-bold ${edu.scoreColor} flex-shrink-0 whitespace-nowrap`}
                  >
                    {edu.score}
                  </span>
                )}
              </div>
              <p className="text-gray-500 text-sm mt-1">{edu.degree}</p>
              <p className="text-gray-400 text-xs mt-1">{edu.year}</p>
              {edu.extra && (
                <p className="text-gray-400 text-xs mt-1">{edu.extra}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
