'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ItemFAQ {
  pergunta: string;
  resposta: string;
}

const faqItens: ItemFAQ[] = [
  {
    pergunta: "Os cursos possuem certificado?",
    resposta: "Sim! Todos os nossos cursos oferecem certificado de conclusão reconhecido pelo mercado. Você pode baixar seu certificado assim que completar 100% do conteúdo do curso."
  },
  {
    pergunta: "Por quanto tempo tenho acesso ao conteúdo?",
    resposta: "Você tem acesso vitalício a todos os cursos que adquirir. Isso inclui todas as atualizações e novos módulos que forem adicionados ao curso."
  },
  {
    pergunta: "Posso assistir pelo celular ou tablet?",
    resposta: "Sim! Nossa plataforma é totalmente responsiva e você pode acessar os cursos de qualquer dispositivo: computador, tablet ou smartphone, tanto online quanto offline."
  },
  {
    pergunta: "Existe algum pré-requisito para os cursos?",
    resposta: "A maioria dos nossos cursos são para iniciantes e não exigem conhecimento prévio. Para cursos mais avançados, sempre indicamos os pré-requisitos na descrição."
  },
  {
    pergunta: "Como funciona o suporte aos alunos?",
    resposta: "Oferecemos suporte completo através de chat, email e comunidade exclusiva no Discord. Nossa equipe está disponível de segunda a sexta, das 9h às 18h."
  },
  {
    pergunta: "Posso parcelar o pagamento?",
    resposta: "Sim! Aceitamos parcelamento em até 12x no cartão de crédito sem juros. Também aceitamos PIX à vista com desconto adicional de 10%."
  },
  {
    pergunta: "Há garantia de satisfação?",
    resposta: "Oferecemos 30 dias de garantia incondicional. Se não ficar satisfeito com o curso, devolvemos 100% do valor pago, sem fazer perguntas."
  },
  {
    pergunta: "Os cursos são ao vivo ou gravados?",
    resposta: "Nossos cursos são em formato de videoaulas gravadas, permitindo que você estude no seu próprio ritmo. Também realizamos lives mensais para tirar dúvidas."
  }
];

export default function SecaoFAQ() {
  const [itemAberto, setItemAberto] = useState<number | null>(null);

  const alternarItem = (index: number) => {
    setItemAberto(itemAberto === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-green-400">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tire suas dúvidas sobre nossos cursos e plataforma
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItens.map((item, index) => (
            <motion.div
              key={index}
              className="bg-black border border-gray-800 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
                onClick={() => alternarItem(index)}
              >
                <span className="font-semibold text-lg">{item.pergunta}</span>
                <motion.div
                  animate={{ rotate: itemAberto === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-green-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {itemAberto === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                      {item.resposta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Não encontrou a resposta que procura?
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Falar com Suporte
          </button>
        </motion.div>
      </div>
    </section>
  );
}
