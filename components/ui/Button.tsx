'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asMotion?: boolean;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-zd-electric-cyan to-zd-royal-blue text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
  secondary: 'bg-white dark:bg-slate-800 border-2 border-zd-royal-blue dark:border-zd-electric-cyan text-zd-royal-blue dark:text-zd-electric-cyan hover:bg-zd-royal-blue/5 dark:hover:bg-zd-electric-cyan/10',
  tertiary: 'bg-transparent text-zd-royal-blue dark:text-zd-electric-cyan hover:text-zd-electric-cyan dark:hover:text-zd-bright-cyan underline underline-offset-4',
  ghost: 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      asMotion = true,
      ...props
    },
    ref
  ) => {
    const Component = asMotion ? motion.button : 'button';
    const motionProps = asMotion
      ? {
          whileHover: { scale: 1.02, y: -2 },
          whileTap: { scale: 0.98 },
          transition: { duration: 0.2 },
        }
      : {};

    return (
      <Component
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-semibold tracking-wide',
          'rounded-xl transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-zd-electric-cyan focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'min-h-[48px]', // Touch-friendly minimum height
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...(motionProps as any)}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </Component>
    );
  }
);

Button.displayName = 'Button';
