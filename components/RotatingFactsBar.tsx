"use client"

import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

const acmFacts = [
  "🏆 ACM is the world's largest educational and scientific computing society",
  "🌍 ACM has over 100,000 members in more than 190 countries worldwide",
  "💡 ACM publishes 50+ journals and magazines covering all areas of computing",
  "🎓 ACM Turing Award is considered the 'Nobel Prize of Computing'",
  "🚀 ACM ICPC is the world's most prestigious programming contest",
  "📚 ACM Digital Library contains over 500,000 articles and publications",
  "🔬 ACM supports cutting-edge research in AI, cybersecurity, and quantum computing",
  "🌟 ACM members include pioneers like Tim Berners-Lee and Vint Cerf",
  "💻 ACM has been advancing computing as a science since 1947",
  "🎯 ACM Student Chapters exist in over 500 universities globally",
  "⚡ ACM LNMIIT organizes hackathons, workshops, and tech talks regularly",
  "🏅 ACM members get exclusive access to research papers and industry insights",
  "🤝 ACM connects students with industry professionals and mentors",
  "🎨 ACM promotes interdisciplinary collaboration in technology and design",
  "🔥 Join ACM LNMIIT and be part of the next generation of tech leaders!"
]

export function RotatingFactsBar() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentFactIndex((prev) => (prev + 1) % acmFacts.length)
        setIsVisible(true)
      }, 300) // Half of the transition duration
    }, 6000) // Change fact every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-[#FFB703] to-[#FB8500] py-3 sm:py-4 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#023047] flex-shrink-0 animate-sparkle" />
          <div className="text-center min-h-[1.5rem] sm:min-h-[2rem] flex items-center justify-center">
            <p 
              className={`text-sm sm:text-base md:text-lg font-medium text-[#023047] transition-all duration-500 ease-in-out ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
              }`}
            >
              {acmFacts[currentFactIndex]}
            </p>
          </div>
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#023047] flex-shrink-0 animate-sparkle" />
        </div>
      </div>
    </div>
  )
}