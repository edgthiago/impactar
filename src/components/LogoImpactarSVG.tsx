'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const LogoImpactarSVG = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 md:h-32 w-24 md:w-32',
  };

  const logoSize = sizeMap[size];

  return (
    <div className={`${logoSize} ${className}`}>
      <svg 
        viewBox="0 0 300 300" 
        className="w-full h-full rounded-xl shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definições de gradientes e filtros */}
        <defs>
          {/* Gradiente principal - fundo */}
          <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="70%" stopColor="#000000" />
            <stop offset="100%" stopColor="#111111" />
          </radialGradient>
          
          {/* Gradiente da árvore */}
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          
          {/* Gradiente do tronco */}
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#92400e" />
            <stop offset="50%" stopColor="#a16207" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          
          {/* Gradiente da borda */}
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
            <stop offset="25%" stopColor="#16a34a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#15803d" stopOpacity="1" />
            <stop offset="75%" stopColor="#22c55e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
          </linearGradient>
          
          {/* Gradiente para texto */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          
          {/* Filtro de brilho */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Filtro de sombra */}
          <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="4" floodColor="#22c55e" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Fundo principal com gradiente */}
        <rect width="300" height="300" rx="24" ry="24" fill="url(#backgroundGradient)" stroke="url(#borderGradient)" strokeWidth="4"/>
        
        {/* Padrão hexagonal sutil no fundo */}
        <g opacity="0.1">
          <polygon points="50,40 70,30 90,40 90,60 70,70 50,60" fill="#22c55e"/>
          <polygon points="210,40 230,30 250,40 250,60 230,70 210,60" fill="#22c55e"/>
          <polygon points="50,240 70,230 90,240 90,260 70,270 50,260" fill="#22c55e"/>
          <polygon points="210,240 230,230 250,240 250,260 230,270 210,260" fill="#22c55e"/>
        </g>
        
        {/* Título IMPACTAR no topo */}
        <text 
          x="150" 
          y="50" 
          textAnchor="middle" 
          fill="url(#textGradient)"
          fontSize="24" 
          fontWeight="900" 
          letterSpacing="4"
          filter="url(#glow)"
          fontFamily="Arial, sans-serif"
        >
          IMPACTAR
        </text>
        
        {/* Linha decorativa sob o título */}
        <line x1="80" y1="65" x2="220" y2="65" stroke="url(#borderGradient)" strokeWidth="2" opacity="0.8"/>
        
        {/* Círculo decorativo central */}
        <circle cx="150" cy="150" r="95" fill="none" stroke="url(#borderGradient)" strokeWidth="1" opacity="0.3"/>
        <circle cx="150" cy="150" r="85" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.5"/>
        
        {/* Árvore principal - Tronco elaborado */}
        <rect x="140" y="180" width="20" height="50" rx="3" fill="url(#trunkGradient)" filter="url(#dropshadow)"/>
        <rect x="135" y="190" width="30" height="8" rx="2" fill="#92400e" opacity="0.8"/>
        <rect x="138" y="200" width="24" height="6" rx="1" fill="#78350f" opacity="0.9"/>
        
        {/* Sistema radicular */}
        <path d="M140 230 Q120 240 110 250" stroke="#92400e" strokeWidth="3" fill="none" opacity="0.7"/>
        <path d="M160 230 Q180 240 190 250" stroke="#92400e" strokeWidth="3" fill="none" opacity="0.7"/>
        <path d="M150 235 Q130 245 125 255" stroke="#78350f" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M150 235 Q170 245 175 255" stroke="#78350f" strokeWidth="2" fill="none" opacity="0.6"/>
        
        {/* Copa da árvore - Design em camadas */}
        <circle cx="150" cy="140" r="45" fill="url(#treeGradient)" opacity="0.9" filter="url(#glow)"/>
        <circle cx="130" cy="125" r="25" fill="#22c55e" opacity="0.8"/>
        <circle cx="170" cy="125" r="25" fill="#22c55e" opacity="0.8"/>
        <circle cx="150" cy="110" r="20" fill="#34d399" opacity="0.9"/>
        <circle cx="135" cy="150" r="18" fill="#16a34a" opacity="0.85"/>
        <circle cx="165" cy="150" r="18" fill="#16a34a" opacity="0.85"/>
        
        {/* Galhos decorativos */}
        <path d="M105 140 Q130 125 150 130" stroke="#15803d" strokeWidth="4" fill="none" opacity="0.8"/>
        <path d="M195 140 Q170 125 150 130" stroke="#15803d" strokeWidth="4" fill="none" opacity="0.8"/>
        <path d="M125 165 Q140 155 150 160" stroke="#16a34a" strokeWidth="3" fill="none" opacity="0.7"/>
        <path d="M175 165 Q160 155 150 160" stroke="#16a34a" strokeWidth="3" fill="none" opacity="0.7"/>
        
        {/* Folhas detalhadas espalhadas */}
        <ellipse cx="110" cy="135" rx="8" ry="4" fill="#22c55e" transform="rotate(45 110 135)" opacity="0.9"/>
        <ellipse cx="190" cy="135" rx="8" ry="4" fill="#22c55e" transform="rotate(-45 190 135)" opacity="0.9"/>
        <ellipse cx="125" cy="105" rx="6" ry="3" fill="#34d399" transform="rotate(30 125 105)" opacity="0.8"/>
        <ellipse cx="175" cy="105" rx="6" ry="3" fill="#34d399" transform="rotate(-30 175 105)" opacity="0.8"/>
        <ellipse cx="150" cy="95" rx="5" ry="2" fill="#10b981" transform="rotate(0 150 95)" opacity="0.9"/>
        
        {/* Partículas/energia ao redor da árvore */}
        <circle cx="120" cy="120" r="2" fill="#22c55e" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="180" cy="115" r="1.5" fill="#34d399" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="165" cy="175" r="2" fill="#16a34a" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="135" cy="175" r="1" fill="#22c55e" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite"/>
        </circle>
        
        {/* Subtítulo TREINAMENTOS */}
        <text 
          x="150" 
          y="275" 
          textAnchor="middle" 
          fill="#9ca3af"
          fontSize="16" 
          fontWeight="600" 
          letterSpacing="2"
          fontFamily="Arial, sans-serif"
        >
          TREINAMENTOS
        </text>
        
        {/* Elementos decorativos nos cantos */}
        <circle cx="30" cy="30" r="3" fill="#22c55e" opacity="0.6"/>
        <circle cx="270" cy="30" r="3" fill="#22c55e" opacity="0.6"/>
        <circle cx="30" cy="270" r="3" fill="#22c55e" opacity="0.6"/>
        <circle cx="270" cy="270" r="3" fill="#22c55e" opacity="0.6"/>
        
        {/* Borda externa com efeito de brilho */}
        <rect 
          width="296" 
          height="296" 
          x="2" 
          y="2" 
          rx="22" 
          ry="22" 
          fill="none" 
          stroke="url(#borderGradient)" 
          strokeWidth="2" 
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
};

export default LogoImpactarSVG;
