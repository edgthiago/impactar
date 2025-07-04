'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, Award, Clock } from 'lucide-react';

interface Contador {
  icone: React.ReactNode;
  valor: number;
  sufixo: string;
  titulo: string;
  descricao: string;
}

const contadores: Contador[] = [
  {
    icone: <Users className="w-8 h-8" />,
    valor: 10000,
    sufixo: "+",
    titulo: "Alunos Ativos",
    descricao: "Estudantes transformando suas carreiras"
  },
  {
    icone: <BookOpen className="w-8 h-8" />,
    valor: 150,
    sufixo: "+",
    titulo: "Cursos Disponíveis",
    descricao: "Conteúdo sempre atualizado"
  },
  {
    icone: <Award className="w-8 h-8" />,
    valor: 99,
    sufixo: "%",
    titulo: "Taxa de Satisfação",
    descricao: "Alunos satisfeitos com os resultados"
  },
  {
    icone: <Clock className="w-8 h-8" />,
    valor: 5000,
    sufixo: "+",
    titulo: "Horas de Conteúdo",
    descricao: "Material premium de alta qualidade"
  }
];

interface Props {
  valor: number;
  sufixo: string;
  duracao?: number;
}

function ContadorAnimado({ valor, sufixo, duracao = 2000 }: Props) {
  const [contadorAtual, setContadorAtual] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let inicio = 0;
      const incremento = valor / (duracao / 16); // 60 FPS
      
      const timer = setInterval(() => {
        inicio += incremento;
        if (inicio >= valor) {
          setContadorAtual(valor);
          clearInterval(timer);
        } else {
          setContadorAtual(Math.floor(inicio));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, valor, duracao]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-green-400">
      {contadorAtual.toLocaleString('pt-BR')}{sufixo}
    </span>
  );
}

export default function SecaoEstatisticas() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="text-green-400">Trajetória</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Números que comprovam nossa dedicação em transformar carreiras
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contadores.map((contador, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-500 rounded-full text-white group-hover:bg-green-400 transition-colors">
                    {contador.icone}
                  </div>
                </div>
                
                <div className="mb-2">
                  <ContadorAnimado 
                    valor={contador.valor} 
                    sufixo={contador.sufixo}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">
                  {contador.titulo}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {contador.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Faça Parte Desta Comunidade de Sucesso!
            </h3>
            <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já transformaram suas carreiras
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Começar Agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
