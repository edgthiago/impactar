'use client';

import LogoImpactarSVG from './LogoImpactarSVG';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const LogoImpactar = ({ size = 'md', className = '' }: LogoProps) => {
  return <LogoImpactarSVG size={size} className={className} />;
};

export default LogoImpactar;
