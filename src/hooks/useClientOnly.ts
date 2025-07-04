'use client';

import { useState, useEffect } from 'react';

/**
 * Hook para evitar problemas de hydration em componentes client-side
 * @returns boolean indicando se o componente foi montado no cliente
 */
export function useClienteApenas() {
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
  }, []);

  return montado;
}

/**
 * Hook para gerar valores aleatórios apenas no cliente
 * @param gerador função que gera o valor aleatório
 * @param valorPadrao valor padrão para usar durante SSR
 * @returns valor gerado ou valor padrão
 */
export function useValorAleatorio<T>(gerador: () => T, valorPadrao: T): T {
  const [valor, setValor] = useState<T>(valorPadrao);
  const montado = useClienteApenas();

  useEffect(() => {
    if (montado) {
      setValor(gerador());
    }
  }, [montado, gerador]);

  return valor;
}
