'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageCircle, Send } from 'lucide-react';

interface DadosFormulario {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

interface FormularioContatoProps {
  onClose?: () => void;
}

export default function FormularioContato({ onClose }: FormularioContatoProps) {
  const [dados, setDados] = useState<DadosFormulario>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const manipularMudanca = (campo: keyof DadosFormulario, valor: string) => {
    setDados(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const manipularEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    // Simular envio (substituir por API real)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSucesso(true);
    setEnviando(false);
    
    // Resetar formulário após 3 segundos
    setTimeout(() => {
      setSucesso(false);
      setDados({ nome: '', email: '', telefone: '', mensagem: '' });
      if (onClose) {
        onClose();
      }
    }, 3000);
  };

  if (sucesso) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-green-400">
          Mensagem Enviada!
        </h3>
        <p className="text-gray-300">
          Obrigado pelo contato. Retornaremos em breve!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Entre em <span className="text-green-400">Contato</span>
        </h3>
        
        <form onSubmit={manipularEnvio} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={dados.nome}
                  onChange={(e) => manipularMudanca('nome', e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={dados.email}
                  onChange={(e) => manipularMudanca('email', e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Telefone (opcional)
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={dados.telefone}
                onChange={(e) => manipularMudanca('telefone', e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Mensagem
            </label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
              <textarea
                required
                value={dados.mensagem}
                onChange={(e) => manipularMudanca('mensagem', e.target.value)}
                rows={4}
                className="w-full bg-black border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors resize-none"
                placeholder="Conte-nos sobre seu interesse em nossos treinamentos de elite..."
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
          >
            {enviando ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                Enviar Mensagem
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">E-mail</p>
              <p className="font-semibold text-white text-sm break-all">tamiles@impactar.com.br</p>
              <p className="text-xs text-green-400 mt-1">Resposta em até 2h</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">Telefone</p>
              <p className="font-semibold text-white">(85) 99999-9999</p>
              <p className="text-xs text-blue-400 mt-1">Ligações diretas</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
              <p className="font-semibold text-white">(85) 99999-9999</p>
              <p className="text-xs text-green-400 mt-1">Atendimento 24h</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
