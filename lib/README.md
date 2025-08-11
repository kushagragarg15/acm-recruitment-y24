# Animation and Styling Foundation

This directory contains the advanced animation and styling foundation for the ACM LNMIIT recruitment website. The foundation includes Framer Motion configurations, glassmorphism utilities, advanced gradients, and performance-optimized animations.

## Files Overview

### `animations.ts`
Contains Framer Motion configurations and animation presets:
- **Entrance Animations**: fadeInUp, slideInLeft, slideInRight, scaleIn, rotateIn
- **Hover Animations**: lift, scale, tilt, glow
- **Scroll Animations**: Intersection Observer-based animations
- **Stagger Configurations**: For sequential animations
- **Domain Themes**: Color schemes for different domains

### `styling.ts`
Contains utility classes and styling configurations:
- **Glassmorphism Effects**: Card, button, overlay, subtle, strong variants
- **Advanced Gradients**: Domain-specific and general gradients
- **Enhanced Shadows**: Soft, medium, large, glow, and colored shadows
- **Animation Classes**: CSS-based animation utilities
- **Performance Utilities**: GPU acceleration and will-change properties

## Usage Examples

### Basic Framer Motion Animation
```tsx
import { motion } from 'framer-motion'
import { entranceVariants } from '@/lib/animations'

<motion.div
  variants={entranceVariants.fadeInUp}
  initial="hidden"
  animate="visible"
>
  Content here
</motion.div>
```

### Glassmorphism Card
```tsx
import { glassmorphism, cn } from '@/lib/styling'

<div className={cn(glassmorphism.card, 'p-6')}>
  Glass card content
</div>
```

### Domain-Specific Styling
```tsx
import { createThemeStyles } from '@/lib/styling'

const webDevStyles = createThemeStyles('webdev')

<div className={webDevStyles.card}>
  Web Development content
</div>
```

### Scroll-Triggered Animation
```tsx
import { motion } from 'framer-motion'
import { createScrollAnimation } from '@/lib/animations'

<motion.div {...createScrollAnimation('fadeInUp')}>
  Content that animates on scroll
</motion.div>
```

## CSS Custom Properties

The foundation adds several CSS custom properties to the global stylesheet:

### Gradients
- `--gradient-primary`: Blue to purple to cyan
- `--gradient-webdev`: Blue to purple
- `--gradient-aiml`: Amber to red
- `--gradient-genai`: Purple to pink
- `--gradient-design`: Emerald to cyan
- `--gradient-cp`: Red to orange

### Glassmorphism
- `--glass-bg`: Background with transparency
- `--glass-border`: Border with transparency
- `--glass-shadow`: Glassmorphism shadow
- `--glass-backdrop`: Backdrop blur value

### Animation Timing
- `--ease-smooth`: Smooth cubic-bezier
- `--ease-bouncy`: Bouncy cubic-bezier
- `--ease-snappy`: Snappy cubic-bezier
- `--duration-fast`: 150ms
- `--duration-normal`: 300ms
- `--duration-slow`: 500ms
- `--duration-slower`: 750ms

## Animation Classes

### Entrance Animations
- `.animate-slide-in-up`: Slide in from bottom
- `.animate-slide-in-left`: Slide in from left
- `.animate-slide-in-right`: Slide in from right
- `.animate-scale-in`: Scale in with bounce
- `.animate-rotate-in`: Rotate in with bounce

### Continuous Animations
- `.animate-float`: Floating motion
- `.animate-glow`: Glowing effect
- `.animate-gradient`: Animated gradient background
- `.animate-sparkle`: Sparkle effect

### Hover Effects
- `.hover-lift`: Lift on hover
- `.hover-scale`: Scale on hover
- `.hover-tilt`: Tilt on hover

### Stagger Delays
- `.animate-stagger-1` through `.animate-stagger-5`: Staggered animation delays

## Performance Considerations

### Hardware Acceleration
All animations use CSS transforms and opacity for optimal performance:
- `transform: translateZ(0)` for GPU acceleration
- `will-change` properties for optimization
- `backface-visibility: hidden` for smoother animations

### Reduced Motion Support
The foundation respects the `prefers-reduced-motion` media query:
- Animations are disabled for users who prefer reduced motion
- Transitions are reduced to minimal durations
- Continuous animations are completely disabled

### Lazy Loading
Heavy animations can be lazy-loaded using the performance utilities:
- Use `performance.gpuAccelerated` class for GPU acceleration
- Apply `performance.willChangeTransform` for transform animations
- Use `performance.willChangeOpacity` for opacity animations

## Domain Color Themes

Each domain has its own color theme and visual identity:

### Web Development
- Colors: Blue, Purple, Cyan
- Gradient: Blue to Purple
- Glow: Blue glow effect

### AI/ML
- Colors: Amber, Red, Orange
- Gradient: Amber to Red
- Glow: Amber glow effect

### GenAI
- Colors: Purple, Pink, Light Pink
- Gradient: Purple to Pink
- Glow: Purple glow effect

### Design
- Colors: Emerald, Cyan, Teal
- Gradient: Emerald to Cyan
- Glow: Emerald glow effect

### Competitive Programming
- Colors: Red, Orange, Light Orange
- Gradient: Red to Orange
- Glow: Red glow effect

## Testing

A test component (`components/AnimationTest.tsx`) is available to verify all animations and styling utilities are working correctly. This component demonstrates:
- Framer Motion animations
- Glassmorphism effects
- Domain gradients
- Hover interactions
- Staggered animations
- CSS animations

To test the foundation, import and use the `AnimationTest` component in your application.