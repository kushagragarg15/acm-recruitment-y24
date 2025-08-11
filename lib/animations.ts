import { Variants, Transition } from 'framer-motion'

// Animation timing configurations
export const animationConfig = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.75,
  },
  ease: {
    smooth: [0.4, 0, 0.2, 1] as const,
    bouncy: [0.68, -0.55, 0.265, 1.55] as const,
    snappy: [0.25, 0.46, 0.45, 0.94] as const,
  },
}

// Common transition presets
export const transitions: Record<string, Transition> = {
  smooth: {
    duration: animationConfig.duration.normal,
    ease: animationConfig.ease.smooth,
  },
  bouncy: {
    duration: animationConfig.duration.slow,
    ease: animationConfig.ease.bouncy,
  },
  snappy: {
    duration: animationConfig.duration.fast,
    ease: animationConfig.ease.snappy,
  },
}

// Entrance animation variants
export const entranceVariants: Record<string, Variants> = {
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.smooth,
    },
  },
  slideInLeft: {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.smooth,
    },
  },
  slideInRight: {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.smooth,
    },
  },
  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: transitions.bouncy,
    },
  },
  rotateIn: {
    hidden: {
      opacity: 0,
      rotate: -10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: transitions.bouncy,
    },
  },
}

// Hover animation variants
export const hoverVariants: Record<string, Variants> = {
  lift: {
    rest: {
      y: 0,
    },
    hover: {
      y: -4,
      transition: transitions.snappy,
    },
  },
  scale: {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: transitions.snappy,
    },
  },
  tilt: {
    rest: {
      rotate: 0,
      scale: 1,
    },
    hover: {
      rotate: 2,
      scale: 1.02,
      transition: transitions.snappy,
    },
  },
  glow: {
    rest: {
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    },
    hover: {
      boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
      transition: transitions.smooth,
    },
  },
}

// Stagger animation configurations
export const staggerConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.smooth,
    },
  },
}

// Scroll-triggered animation variants
export const scrollVariants: Record<string, Variants> = {
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: animationConfig.ease.smooth,
      },
    },
  },
  slideInFromLeft: {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: animationConfig.ease.smooth,
      },
    },
  },
  slideInFromRight: {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: animationConfig.ease.smooth,
      },
    },
  },
}

// Domain-specific color themes for animations
export const domainThemes = {
  webdev: {
    colors: ['#3B82F6', '#8B5CF6', '#06B6D4'],
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
  aiml: {
    colors: ['#F59E0B', '#EF4444', '#F97316'],
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    glow: 'rgba(245, 158, 11, 0.4)',
  },
  genai: {
    colors: ['#8B5CF6', '#EC4899', '#F472B6'],
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    glow: 'rgba(139, 92, 246, 0.4)',
  },
  design: {
    colors: ['#10B981', '#06B6D4', '#0891B2'],
    gradient: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
    glow: 'rgba(16, 185, 129, 0.4)',
  },
  cp: {
    colors: ['#EF4444', '#F97316', '#FB923C'],
    gradient: 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)',
    glow: 'rgba(239, 68, 68, 0.4)',
  },
} as const

// Utility function to create staggered animations
export const createStaggeredAnimation = (
  children: number,
  staggerDelay: number = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
})

// Utility function to create scroll-triggered animations with Intersection Observer
export const createScrollAnimation = (
  variant: keyof typeof scrollVariants = 'fadeInUp'
) => ({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-100px' },
  variants: scrollVariants[variant],
})

// Performance-optimized animation settings
export const performanceSettings = {
  // Use transform and opacity for better performance
  layoutId: undefined,
  // Enable hardware acceleration
  style: {
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden' as const,
    perspective: 1000,
  },
  // Reduce motion for accessibility
  reducedMotion: {
    transition: { duration: 0.01 },
    animate: { transition: { duration: 0.01 } },
  },
}