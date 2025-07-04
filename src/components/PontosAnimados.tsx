'use client';

import { useEffect, useState } from 'react';
import { useClienteApenas } from '@/hooks/useClientOnly';

interface PontoAnimado {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

interface PontosAnimadosProps {
  quantidade?: number;
  className?: string;
}

export default function PontosAnimados({ 
  quantidade = 50, 
  className = "absolute inset-0 opacity-20" 
}: PontosAnimadosProps) {
  const montadoNoCliente = useClienteApenas();
  const [pontos, setPontos] = useState<PontoAnimado[]>([]);

  useEffect(() => {
    if (montadoNoCliente) {
      const novosPontos = Array.from({ length: quantidade }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2
      }));
      setPontos(novosPontos);
    }
  }, [montadoNoCliente, quantidade]);

  if (!montadoNoCliente) {
    return null;
  }

  return (
    <div className={className}>
      {pontos.map((ponto) => (
        <div
          key={ponto.id}
          className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
          style={{
            left: `${ponto.left}%`,
            top: `${ponto.top}%`,
            animationDelay: `${ponto.delay}s`,
            animationDuration: `${ponto.duration}s`
          }}
        />
      ))}
    </div>
  );
}
