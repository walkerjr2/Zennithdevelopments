'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = '', width = 200, height = 60 }: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="/images/zenitth-logo.png"
        alt="ZennithDevelopments"
        width={width}
        height={height}
        priority
        className="w-auto h-auto"
      />
    </Link>
  );
}
