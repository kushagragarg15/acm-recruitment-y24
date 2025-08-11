import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Enhanced cn utility with additional styling helpers
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Glassmorphism utility classes
export const glassmorphism = {
  card: 'backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-xl',
  button: 'backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 transition-all duration-300 rounded-lg',
  overlay: 'backdrop-blur-lg bg-black/20 border border-white/10',
  subtle: 'backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg',
  strong: 'backdrop-blur-xl bg-white/15 border border-white/30 shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] rounded-xl',
}

// Advanced gradient utilities
export const gradients = {
  primary: 'bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500',
  secondary: 'bg-gradient-to-br from-amber-500 via-red-500 to-orange-500',
  accent: 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500',
  hero: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
  webdev: 'bg-gradient-to-br from-blue-500 to-purple-500',
  aiml: 'bg-gradient-to-br from-amber-500 to-red-500',
  genai: 'bg-gradient-to-br from-purple-500 to-pink-500',
  design: 'bg-gradient-to-br from-emerald-500 to-cyan-500',
  cp: 'bg-gradient-to-br from-red-500 to-orange-500',
  animated: 'bg-gradient-to-r bg-[length:200%_200%] animate-gradient',
}

// Enhanced shadow utilities
export const shadows = {
  soft: 'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]',
  medium: 'shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]',
  large: 'shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_4px_25px_-5px_rgba(0,0,0,0.07)]',
  glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]',
  glowHover: 'shadow-[0_0_30px_rgba(59,130,246,0.6)]',
  colored: {
    blue: 'shadow-[0_8px_30px_rgba(59,130,246,0.3)]',
    purple: 'shadow-[0_8px_30px_rgba(139,92,246,0.3)]',
    pink: 'shadow-[0_8px_30px_rgba(236,72,153,0.3)]',
    emerald: 'shadow-[0_8px_30px_rgba(16,185,129,0.3)]',
    amber: 'shadow-[0_8px_30px_rgba(245,158,11,0.3)]',
    red: 'shadow-[0_8px_30px_rgba(239,68,68,0.3)]',
  },
}

// Animation utility classes
export const animations = {
  entrance: {
    fadeInUp: 'animate-slide-in-up',
    slideInLeft: 'animate-slide-in-left',
    slideInRight: 'animate-slide-in-right',
    scaleIn: 'animate-scale-in',
    rotateIn: 'animate-rotate-in',
  },
  hover: {
    lift: 'hover-lift',
    scale: 'hover-scale',
    tilt: 'hover-tilt',
  },
  continuous: {
    float: 'animate-float',
    glow: 'animate-glow',
    gradient: 'animate-gradient',
    sparkle: 'animate-sparkle',
  },
  stagger: {
    1: 'animate-stagger-1',
    2: 'animate-stagger-2',
    3: 'animate-stagger-3',
    4: 'animate-stagger-4',
    5: 'animate-stagger-5',
  },
}

// Performance optimization utilities
export const performance = {
  gpuAccelerated: 'gpu-accelerated',
  willChangeTransform: 'will-change-transform',
  willChangeOpacity: 'will-change-opacity',
}

// Domain-specific styling configurations
export const domainStyles = {
  webdev: {
    gradient: gradients.webdev,
    shadow: shadows.colored.blue,
    glass: cn(glassmorphism.card, 'border-blue-500/20'),
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]',
  },
  aiml: {
    gradient: gradients.aiml,
    shadow: shadows.colored.amber,
    glass: cn(glassmorphism.card, 'border-amber-500/20'),
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.4)]',
  },
  genai: {
    gradient: gradients.genai,
    shadow: shadows.colored.purple,
    glass: cn(glassmorphism.card, 'border-purple-500/20'),
    glow: 'shadow-[0_0_30px_rgba(139,92,246,0.4)]',
  },
  design: {
    gradient: gradients.design,
    shadow: shadows.colored.emerald,
    glass: cn(glassmorphism.card, 'border-emerald-500/20'),
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.4)]',
  },
  cp: {
    gradient: gradients.cp,
    shadow: shadows.colored.red,
    glass: cn(glassmorphism.card, 'border-red-500/20'),
    glow: 'shadow-[0_0_30px_rgba(239,68,68,0.4)]',
  },
}

// Utility function to create responsive classes
export const responsive = {
  text: {
    xs: 'text-xs sm:text-sm',
    sm: 'text-sm sm:text-base',
    base: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
    '2xl': 'text-2xl sm:text-3xl',
    '3xl': 'text-3xl sm:text-4xl',
    '4xl': 'text-4xl sm:text-5xl',
  },
  spacing: {
    xs: 'p-2 sm:p-3',
    sm: 'p-3 sm:p-4',
    base: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-12',
  },
  margin: {
    xs: 'm-2 sm:m-3',
    sm: 'm-3 sm:m-4',
    base: 'm-4 sm:m-6',
    lg: 'm-6 sm:m-8',
    xl: 'm-8 sm:m-12',
  },
}

// Utility function to create theme-aware styles
export const createThemeStyles = (theme: keyof typeof domainStyles) => {
  const themeConfig = domainStyles[theme]
  return {
    card: cn(
      'rounded-xl p-6 transition-all duration-300',
      themeConfig.glass,
      themeConfig.shadow,
      animations.hover.lift
    ),
    button: cn(
      'px-6 py-3 rounded-lg font-medium transition-all duration-300',
      themeConfig.gradient,
      'text-white shadow-lg hover:shadow-xl',
      animations.hover.scale
    ),
    badge: cn(
      'px-3 py-1 rounded-full text-sm font-medium',
      themeConfig.glass,
      'border border-current/20'
    ),
    glow: themeConfig.glow,
  }
}

// Utility function for creating animated backgrounds
export const createAnimatedBackground = (type: 'gradient' | 'particles' | 'geometric') => {
  const baseClasses = 'absolute inset-0 -z-10'
  
  switch (type) {
    case 'gradient':
      return cn(
        baseClasses,
        gradients.hero,
        gradients.animated,
        'opacity-20'
      )
    case 'particles':
      return cn(
        baseClasses,
        'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]',
        animations.continuous.float
      )
    case 'geometric':
      return cn(
        baseClasses,
        'bg-[conic-gradient(from_0deg,transparent,rgba(139,92,246,0.1),transparent)]',
        animations.continuous.gradient
      )
    default:
      return baseClasses
  }
}

// Export all utilities as a single object for easy importing
export const styleUtils = {
  glassmorphism,
  gradients,
  shadows,
  animations,
  performance,
  domainStyles,
  responsive,
  createThemeStyles,
  createAnimatedBackground,
}