# Quick Reference Card - ZennithDevelopments Design System

## 🎨 Colors (Copy & Paste)

```css
/* Primary */
#0a1628  /* Midnight Navy */
#1e3a8a  /* Deep Navy */
#2563eb  /* Royal Blue */
#06b6d4  /* Electric Cyan */
#22d3ee  /* Bright Cyan */

/* Accent */
#8b5cf6  /* Purple */
#f59e0b  /* Amber */

/* Neutral */
#f8fafc  /* Slate 50 */
#f1f5f9  /* Slate 100 */
#e2e8f0  /* Slate 200 */
#475569  /* Slate 600 */
#334155  /* Slate 700 */
#1e293b  /* Slate 800 */
#0f172a  /* Slate 900 */
```

## 📝 Typography

```css
/* Font Family */
font-family: 'Inter', system-ui, sans-serif;

/* Sizes */
72px / 4.5rem   /* H1 Desktop */
48px / 3rem     /* H2 Desktop */
36px / 2.25rem  /* H3 Desktop */
20px / 1.25rem  /* Lead */
16px / 1rem     /* Body */
14px / 0.875rem /* Small */

/* Weights */
400  /* Regular */
500  /* Medium */
600  /* Semibold */
700  /* Bold */
```

## 📏 Spacing

```css
/* Base Unit: 8px */
0.5rem  /* 8px */
1rem    /* 16px */
1.5rem  /* 24px */
2rem    /* 32px */
3rem    /* 48px */
4rem    /* 64px */
6rem    /* 96px */
8rem    /* 128px */
```

## 🎭 Components

### Primary Button
```tsx
className="
  px-10 py-4 
  bg-gradient-to-r from-zd-electric-cyan to-zd-royal-blue 
  text-white font-bold 
  rounded-xl 
  shadow-glow 
  hover:scale-105 
  transition-all
"
```

### Secondary Button
```tsx
className="
  px-8 py-3.5 
  border-2 border-zd-royal-blue 
  text-zd-royal-blue font-semibold 
  rounded-xl 
  hover:bg-zd-royal-blue hover:text-white 
  transition-all
"
```

### Card
```tsx
className="
  bg-white 
  rounded-2xl 
  p-8 
  border border-slate-200 
  shadow-md 
  hover:shadow-xl hover:-translate-y-1 
  transition-all
"
```

### Heading
```tsx
className="
  text-4xl sm:text-5xl 
  font-bold 
  text-slate-900 dark:text-white 
  mb-4
"
```

### Body Text
```tsx
className="
  text-base 
  text-slate-600 dark:text-slate-300 
  leading-relaxed 
  mb-4
"
```

## 🌈 Gradients

```css
/* Primary Gradient */
bg-gradient-to-r from-zd-electric-cyan to-zd-royal-blue

/* Hero Gradient */
bg-gradient-to-b from-slate-50 via-blue-50/30 to-white

/* Text Gradient */
bg-gradient-to-r from-zd-electric-cyan via-zd-royal-blue to-zd-deep-navy 
bg-clip-text text-transparent
```

## ✨ Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hover Effects */
hover:scale-105 hover:-translate-y-1 transition-all duration-300
```

## 📱 Breakpoints

```css
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */
```

## 🎯 Common Patterns

### Section Container
```tsx
<section className="py-24 bg-white dark:bg-slate-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Section Header
```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
    Section Title
  </h2>
  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
    Description text
  </p>
</div>
```

### Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>
```

### Framer Motion Fade In
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## ♿ Accessibility

```tsx
/* Focus States */
focus:outline-none focus-visible:ring-2 focus-visible:ring-zd-electric-cyan

/* Touch Targets */
min-h-[48px] min-w-[48px]

/* ARIA Labels */
aria-label="Descriptive label"

/* Alt Text */
alt="Descriptive image text"
```

## 🚀 Quick Start Template

```tsx
export function Section() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Section Title
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Description text
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 
                         hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* Item content */}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="primary" size="lg">
            Take Action
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
```

---

## 📞 Quick Links

- **Full Design System:** `DESIGN_SYSTEM.md`
- **Implementation Guide:** `REDESIGN_GUIDE.md`
- **Wireframes:** `WIREFRAMES.md`
- **Executive Summary:** `REDESIGN_SUMMARY.md`

---

*Keep this card handy for quick reference while building!*
