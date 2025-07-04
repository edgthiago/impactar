'use client';

import { useState, lazy, Suspense } from 'react';
import { ChevronDown, Star, Users, Award, BookOpen, Phone, Mail, MapPin, Check } from 'lucide-react';
import LogoImpactar from '@/components/LogoImpactar';
import PontosAnimados from '@/components/PontosAnimados';
import { treinamentos } from '@/data/treinamentos';
import { depoimentos } from '@/data/depoimentos';

// Lazy loading dos componentes pesados para melhor performance
const FormularioContato = lazy(() => import('@/components/FormularioContato'));
const SecaoFAQ = lazy(() => import('@/components/SecaoFAQ'));
const SecaoEstatisticas = lazy(() => import('@/components/SecaoEstatisticas'));

// Loading component reutilizável
const LoadingSpinner = ({ size = 'h-12 w-12' }: { size?: string }) => (
  <div className="flex justify-center items-center py-20">
    <div className={`animate-spin rounded-full ${size} border-b-2 border-green-500`}></div>
  </div>
);

export default function Home() {
  const [mostrarContato, setMostrarContato] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black"></div>
        
        {/* Animated background dots */}
        <PontosAnimados quantidade={50} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo da empresa */}
          <div className="mb-8">
            <LogoImpactar className="w-24 h-24 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-green-400">IMPACTAR TREINAMENTOS</h1>
          </div>

          {/* Headline principal */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              TRANSFORME SUA
            </span>
            <br />
            <span className="text-white">CARREIRA EM</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              90 DIAS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Metodologias exclusivas que <span className="text-green-400 font-bold">geraram mais de R$ 180 milhões</span> 
            em resultados para nossos alunos. Seja o próximo caso de sucesso!
          </p>

          {/* Social proof badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            <div className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full">
              <span className="text-green-400">✓ +15.000 Alunos Transformados</span>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full">
              <span className="text-blue-400">✓ 97% Taxa de Satisfação</span>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full">
              <span className="text-yellow-400">✓ Resultados em 90 Dias</span>
            </div>
          </div>

          {/* CTA principal */}
          <div className="space-y-6">
            <button 
              onClick={() => setMostrarContato(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-full font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
            >
              🚀 QUERO MINHA TRANSFORMAÇÃO AGORA
            </button>
            
            <p className="text-sm text-gray-400">
              ⚡ Vagas limitadas • 🎯 Resultados garantidos • 💼 Suporte vitalício
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400" />
        </div>
      </header>

      {/* Estatísticas - Com Lazy Loading */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <Suspense fallback={<LoadingSpinner />}>
          <SecaoEstatisticas />
        </Suspense>
      </section>

      {/* Seção de Treinamentos */}
      <section id="treinamentos" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-red-500/20 border border-red-500/40 rounded-full mb-6">
              <span className="text-red-400 font-bold">🔥 OFERTA LIMITADA - ÚLTIMAS HORAS</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                TREINAMENTOS
              </span>
              <br />
              <span className="text-white">DE ELITE</span>
            </h2>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Metodologias exclusivas que <span className="text-green-400 font-bold">geraram mais de R$ 180 milhões</span> 
              em resultados para nossos alunos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treinamentos.map((treinamento) => (
              <div
                key={treinamento.id}
                className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full ${
                  treinamento.destacado 
                    ? 'border-2 border-green-500 shadow-lg shadow-green-500/25' 
                    : 'border border-gray-700 hover:border-green-500/50'
                }`}
              >
                {/* Badge "MAIS PROCURADO" no topo */}
                {treinamento.destacado && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                      MAIS PROCURADO
                    </div>
                  </div>
                )}
                
                {/* Badge de urgência no canto superior direito */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {treinamento.urgencia}
                  </div>
                </div>
                
                {/* Cabeçalho do card */}
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                    {treinamento.categoria}
                  </span>
                  <span className="text-gray-400 text-xs">{treinamento.duracao}</span>
                </div>
                
                {/* Título e subtítulo */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                    {treinamento.titulo}
                  </h3>
                  <h4 className="text-sm font-medium text-green-400 mb-3">{treinamento.subtitulo}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{treinamento.descricao}</p>
                </div>
                
                {/* Para quem é */}
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400">Para: {treinamento.nivel}</span>
                </div>
                
                {/* Resultado comprovado */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-semibold text-green-400">Resultado Comprovado:</span>
                  </div>
                  <p className="text-xs text-green-200">{treinamento.resultados}</p>
                </div>

                {/* Lista de benefícios */}
                <div className="space-y-2 mb-4 flex-grow">
                  {treinamento.beneficios.map((beneficio, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-300 leading-relaxed">{beneficio}</span>
                    </div>
                  ))}
                </div>

                {/* Garantia */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-xs font-semibold text-blue-300">{treinamento.garantia}</span>
                  </div>
                </div>

                {/* Seção de preço */}
                <div className="mt-auto">
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-black text-green-400">{treinamento.preco}</span>
                      <span className="text-xs text-gray-400">em até 12x</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 line-through">{treinamento.precoOriginal}</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        {Math.round(((parseInt(treinamento.precoOriginal.replace('R$ ', '').replace('.', '')) - parseInt(treinamento.preco.replace('R$ ', '').replace('.', ''))) / parseInt(treinamento.precoOriginal.replace('R$ ', '').replace('.', ''))) * 100)}% OFF
                      </span>
                    </div>
                  </div>

                  {/* Botão */}
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 mb-3">
                    🚀 GARANTIR MINHA VAGA
                  </button>
                  
                  {/* Texto de acesso */}
                  <div className="text-center">
                    <p className="text-xs text-gray-400">⚡ Acesso imediato após confirmação</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                RESULTADOS
              </span>
              <br />
              <span className="text-white">REAIS</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Histórias de transformação que vão te <span className="text-green-400 font-bold">inspirar e motivar</span> 
              a dar o próximo passo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((depoimento) => (
              <div
                key={depoimento.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
              >
                {/* Badge de resultado no topo */}
                <div className="bg-green-500/20 border border-green-500/40 rounded-full px-3 py-1 mb-4 inline-block self-start">
                  <span className="text-green-400 font-bold text-xs">🎯 {depoimento.resultado}</span>
                </div>
                
                {/* Estrelas de avaliação */}
                <div className="flex items-center mb-4">
                  {[...Array(depoimento.avaliacao)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Depoimento */}
                <p className="text-gray-300 mb-6 italic text-sm leading-relaxed flex-grow">
                  &ldquo;{depoimento.texto}&rdquo;
                </p>
                
                {/* Dados de transformação - ANTES/DEPOIS */}
                <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-red-400 text-xs font-semibold mb-1">ANTES</div>
                      <div className="text-gray-400 text-xs">
                        {depoimento.salarioAntes || depoimento.faturamentoAntes || depoimento.cargoAntes}
                      </div>
                    </div>
                    <div>
                      <div className="text-green-400 text-xs font-semibold mb-1">DEPOIS</div>
                      <div className="text-green-400 text-xs font-bold">
                        {depoimento.salarioDepois || depoimento.faturamentoDepois || depoimento.cargoDepois}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3 pt-3 border-t border-gray-700">
                    <span className="text-blue-400 text-xs font-semibold">⚡ Em apenas {depoimento.tempo}</span>
                  </div>
                </div>
                
                {/* Perfil do depoente */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-sm">
                      {depoimento.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm truncate">{depoimento.nome}</div>
                    <div className="text-gray-400 text-xs truncate">{depoimento.cargo}</div>
                    <div className="text-green-400 text-xs font-semibold truncate">{depoimento.treinamento}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção FAQ - Com Lazy Loading */}
      <section className="py-20">
        <Suspense fallback={<LoadingSpinner />}>
          <SecaoFAQ />
        </Suspense>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-800 via-green-900 to-black relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              SUA TRANSFORMAÇÃO
            </span>
            <br />
            <span className="text-white">COMEÇA AGORA!</span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Não deixe mais um dia passar. Sua nova carreira te espera.
          </p>

          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">15.000+</div>
                <div className="text-gray-300">Alunos Transformados</div>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">97%</div>
                <div className="text-gray-300">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">R$ 180M</div>
                <div className="text-gray-300">Em Resultados Gerados</div>
              </div>
            </div>

            <button 
              onClick={() => setMostrarContato(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 rounded-full font-black text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 mb-4"
            >
              🚀 SIM, QUERO ME TRANSFORMAR AGORA!
            </button>
            
            <p className="text-gray-400 text-sm">
              ⚡ Últimas vagas disponíveis • 🎯 Garantia de 90 dias • 💼 Suporte vitalício
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-4 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <LogoImpactar className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-black text-green-400">IMPACTAR</h3>
                  <p className="text-gray-400 text-sm">TREINAMENTOS</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Transformando carreiras e construindo futuros de sucesso através de metodologias 
                exclusivas e mentoria especializada.
              </p>
              <div className="flex gap-4">
                <div className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full">
                  <span className="text-green-400 text-sm font-semibold">✓ +15.000 Alunos</span>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full">
                  <span className="text-blue-400 text-sm font-semibold">✓ 97% Satisfação</span>
                </div>
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#treinamentos" className="text-gray-400 hover:text-green-400 transition-colors">Nossos Treinamentos</a></li>
                <li><a href="#resultados" className="text-gray-400 hover:text-green-400 transition-colors">Resultados Reais</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-green-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-green-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">contato@impactar.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">São Paulo, SP</span>
                </div>
              </div>
              
              <button 
                onClick={() => setMostrarContato(true)}
                className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                📞 Falar com Especialista
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Impactar Treinamentos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Contato - Com Lazy Loading */}
      {mostrarContato && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setMostrarContato(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>
            <Suspense fallback={<LoadingSpinner size="h-8 w-8" />}>
              <FormularioContato onClose={() => setMostrarContato(false)} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}
