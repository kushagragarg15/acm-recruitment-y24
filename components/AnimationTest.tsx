'use client'

import { motion } from 'framer-motion'
import { entranceVariants, hoverVariants } from '@/lib/animations'
import { glassmorphism, gradients, shadows, animations, cn } from '@/lib/styling'

export function AnimationTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Animation & Styling Foundation Test
        </h1>
        
        {/* Framer Motion Test */}
        <motion.div
          variants={entranceVariants.fadeInUp}
          initial="hidden"
          animate="visible"
          className={cn(
            glassmorphism.card,
            'p-6 text-white'
          )}
        >
          <h2 className="text-2xl font-semibold mb-4">Framer Motion Test</h2>
          <p>This card should fade in from below with smooth animation.</p>
        </motion.div>

        {/* Glassmorphism Test */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={cn(glassmorphism.card, 'p-4 text-white')}>
            <h3 className="font-semibold mb-2">Glass Card</h3>
            <p className="text-sm opacity-90">Backdrop blur effect</p>
          </div>
          
          <div className={cn(glassmorphism.strong, 'p-4 text-white')}>
            <h3 className="font-semibold mb-2">Strong Glass</h3>
            <p className="text-sm opacity-90">Enhanced blur</p>
          </div>
          
          <div className={cn(glassmorphism.subtle, 'p-4 text-white')}>
            <h3 className="font-semibold mb-2">Subtle Glass</h3>
            <p className="text-sm opacity-90">Light effect</p>
          </div>
        </div>

        {/* Gradient Test */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className={cn(gradients.webdev, 'h-24 rounded-lg flex items-center justify-center text-white font-semibold')}>
            Web Dev
          </div>
          <div className={cn(gradients.aiml, 'h-24 rounded-lg flex items-center justify-center text-white font-semibold')}>
            AI/ML
          </div>
          <div className={cn(gradients.genai, 'h-24 rounded-lg flex items-center justify-center text-white font-semibold')}>
            GenAI
          </div>
          <div className={cn(gradients.design, 'h-24 rounded-lg flex items-center justify-center text-white font-semibold')}>
            Design
          </div>
          <div className={cn(gradients.cp, 'h-24 rounded-lg flex items-center justify-center text-white font-semibold')}>
            CP
          </div>
        </div>

        {/* Animation Test */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={hoverVariants.lift}
            initial="rest"
            whileHover="hover"
            className={cn(
              glassmorphism.card,
              shadows.large,
              'p-6 text-white cursor-pointer'
            )}
          >
            <h3 className="font-semibold mb-2">Hover Lift</h3>
            <p className="text-sm opacity-90">Hover to see lift effect</p>
          </motion.div>

          <motion.div
            variants={hoverVariants.scale}
            initial="rest"
            whileHover="hover"
            className={cn(
              glassmorphism.card,
              shadows.large,
              'p-6 text-white cursor-pointer'
            )}
          >
            <h3 className="font-semibold mb-2">Hover Scale</h3>
            <p className="text-sm opacity-90">Hover to see scale effect</p>
          </motion.div>

          <motion.div
            variants={hoverVariants.tilt}
            initial="rest"
            whileHover="hover"
            className={cn(
              glassmorphism.card,
              shadows.large,
              'p-6 text-white cursor-pointer'
            )}
          >
            <h3 className="font-semibold mb-2">Hover Tilt</h3>
            <p className="text-sm opacity-90">Hover to see tilt effect</p>
          </motion.div>
        </div>

        {/* CSS Animation Test */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className={cn(
            glassmorphism.card,
            animations.continuous.float,
            'p-4 text-white text-center'
          )}>
            <div className="text-2xl mb-2">🎈</div>
            <p className="text-sm">Float Animation</p>
          </div>

          <div className={cn(
            glassmorphism.card,
            animations.continuous.glow,
            'p-4 text-white text-center'
          )}>
            <div className="text-2xl mb-2">✨</div>
            <p className="text-sm">Glow Animation</p>
          </div>

          <div className={cn(
            glassmorphism.card,
            gradients.animated,
            'p-4 text-white text-center'
          )}>
            <div className="text-2xl mb-2">🌈</div>
            <p className="text-sm">Gradient Animation</p>
          </div>

          <div className={cn(
            glassmorphism.card,
            animations.continuous.sparkle,
            'p-4 text-white text-center'
          )}>
            <div className="text-2xl mb-2">⭐</div>
            <p className="text-sm">Sparkle Animation</p>
          </div>
        </div>

        {/* Stagger Animation Test */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              variants={entranceVariants.scaleIn}
              className={cn(
                glassmorphism.card,
                'p-4 text-white text-center'
              )}
            >
              <div className="text-3xl font-bold mb-2">{item}</div>
              <p className="text-sm">Staggered Item</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}