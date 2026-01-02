'use client'

import Image from 'next/image'
import { ArrowRight, Calendar, User, Shield, Users, FileText, BarChart, Building2, Phone, Mail, MessageCircle, ChevronLeft, ChevronRight, Star, Heart, Zap, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const features = [
    { icon: Calendar, title: 'Agendamento Inteligente', desc: 'Calendários sincronizados, confirmações e lembretes automáticos' },
    { icon: User, title: 'Gestão Completa de Pacientes', desc: 'Anamnese digital, histórico completo, lembretes personalizados' },
    { icon: Users, title: 'Equipe Multiusuário', desc: 'Recepção gerencia agendamentos, terapeutas acessam dados completos' },
    { icon: FileText, title: 'Lançamentos Financeiros', desc: 'Controle de pagamentos e relatórios detalhados por período' },
    { icon: Shield, title: '100% LGPD & Seguro', desc: 'Dados criptografados, backups automáticos, acesso granular' },
    { icon: BarChart, title: 'Relatório Completo', desc: 'Filtro por período para decisões estratégicas e análise de performance' },
  ]

  const dashboardImages = [
    '/dashboard-agenda.jpg',
    '/dashboard-pacientes.jpg', 
    '/dashboard-financas.jpg',
    '/dashboard-calendario.jpg',
    '/dashboard-relatorio.jpg'
  ]

  const heroDashboardImages = [
    '/p1.jpg',
    '/p2.jpg', 
    '/p3.jpg',
    '/p4.jpg'
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)

  // Auto-rotate slides every 4 seconds for monitor
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dashboardImages.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [dashboardImages.length])

  // Auto-rotate slides every 3 seconds for hero dashboard
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroDashboardImages.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [heroDashboardImages.length])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background melhorado com gradientes mais vibrantes */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 -z-10" />
      
      {/* Pontos decorativos */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-10% w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10% w-96 h-96 bg-gradient-to-l from-sky-200/10 to-indigo-200/10 rounded-full blur-3xl" />
      </div>

      {/* Navbar - Header com logo muito maior */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b border-gray-100/80 shadow-lg shadow-slate-100/30">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* LOGO MUITO GRANDE */}
              <Image 
                src="/logo-psico.png" 
                alt="Agenda Terapia" 
                width={320}  // Aumentado significativamente
                height={100}  // Aumentado
                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"  // Aumentado de h-14 para h-16
                priority
                style={{ 
                  maxHeight: '80px', 
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-700 hover:text-blue-600 font-medium px-5 py-2.5 transition-all duration-300 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">Funcionalidades</a>
              <a href="#quem-somos" className="text-slate-700 hover:text-blue-600 font-medium px-5 py-2.5 transition-all duration-300 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">Quem Somos</a>
              <a href="#contato" className="text-slate-700 hover:text-blue-600 font-medium px-5 py-2.5 transition-all duration-300 rounded-xl hover:bg-blue-50/50 hover:shadow-sm">Contato</a>
              <a 
                href="https://agendaterapia.com.br/agenda/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-200 transition-all duration-400 flex items-center gap-3 group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Acessar Plataforma
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mais vibrante */}
      <section className="pt-32 pb-24 lg:pb-32 min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background gradients mais vibrantes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10% w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10% w-96 h-96 bg-gradient-to-l from-sky-200/25 to-indigo-200/25 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:max-w-lg"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm px-6 py-3 rounded-2xl text-blue-700 font-semibold text-sm shadow-lg border border-blue-100/60">
              <Heart className="w-4 h-4 mr-2 text-pink-500" />
              Plataforma especializada para psicólogos e clínicas
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-black leading-[0.95] bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 bg-clip-text text-transparent mb-6">
                Tudo que você precisa em um só lugar
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg font-light">
                Gestão completa da sua clínica com interface intuitiva, 
                segurança garantida e foco no que realmente importa: 
                <strong className="font-semibold text-blue-700"> seus pacientes.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="https://agendaterapia.com.br/agenda/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-200/50 transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>

              <a 
                href="#contato" 
                className="border-2 border-blue-100 hover:border-blue-200 text-blue-700 hover:text-blue-800 bg-white/90 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-400 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" />
                Solicitar Demonstração
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl backdrop-blur-sm shadow-sm border border-blue-100/50">
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-md"></div>
                Suporte Humanizado
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl backdrop-blur-sm shadow-sm border border-blue-100/50">
                <Shield className="w-3.5 h-3.5 text-blue-500" />
                100% LGPD
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl backdrop-blur-sm shadow-sm border border-blue-100/50">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                +500 Clínicas
              </div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:col-span-1"
          >
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-3xl blur-xl" />
              <div className="relative bg-white/90 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl shadow-blue-100/30 border border-blue-100/60 hover:shadow-3xl hover:shadow-blue-200/30 hover:border-blue-200/50 transition-all duration-700">
                <div className="w-full h-72 lg:h-[420px] bg-gradient-to-br from-slate-50 to-white/80 rounded-2xl flex items-center justify-center border-4 border-white/70 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                  
                  {/* Carrossel de imagens */}
                  {heroDashboardImages.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Dashboard preview ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority={index === 0}
                      />
                    </div>
                  ))}

                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Indicadores do carrossel */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroDashboardImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentHeroSlide(index)}
                        className={`w-2 h-2 rounded-full backdrop-blur-sm border border-white/40 transition-all duration-300 hover:scale-125 ${
                          index === currentHeroSlide 
                            ? 'bg-white border-transparent scale-125' 
                            : 'bg-white/30'
                        }`}
                        aria-label={`Ir para preview ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Badge */}
                  <div className="absolute top-5 left-5 text-slate-800 z-20">
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-100/50">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse"></span>
                      Visualização Ao Vivo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Mais colorida */}
      <section id="features" className="py-24 px-8 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm px-6 py-2 rounded-full text-blue-700 font-semibold text-sm shadow-sm border border-blue-100/60 mb-6">
              <BarChart className="w-4 h-4 mr-2" />
              Funcionalidades Completas
            </div>
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 bg-clip-text text-transparent mb-6">
              Simplifique sua gestão clínica
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Todas as ferramentas que você precisa para uma gestão eficiente e segura da sua clínica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl bg-white/90 backdrop-blur-xl border border-blue-100/50 shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 hover:border-blue-200/50 transition-all duration-500 cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitor Section - Mais moderno */}
      <section className="py-24 px-8 bg-gradient-to-t from-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 bg-clip-text text-transparent mb-6">
              Interface Profissional
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Conheça a plataforma que organiza centenas de clínicas com eficiência
            </p>
          </motion.div>

          {/* Monitor */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative">
              {/* Tela do monitor */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/95 rounded-2xl lg:rounded-3xl p-3 lg:p-5 shadow-2xl shadow-blue-900/10 border-2 lg:border-4 border-slate-600/70">
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden border border-slate-500/40 shadow-inner">
                  
                  <div className="relative w-full h-[360px] lg:h-[480px] bg-slate-900">
                    
                    {/* Imagens do carrossel */}
                    {dashboardImages.map((src, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Dashboard ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 800px"
                          priority={index === 0}
                        />
                      </div>
                    ))}

                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-900/30 via-blue-800/15 to-transparent pointer-events-none" />
                    
                    {/* Controles */}
                    <div className="absolute bottom-4 left-6 right-6 text-white z-20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg lg:text-xl font-bold mb-1">Dashboard Completo</h3>
                          <p className="text-sm font-light leading-relaxed text-white/90">
                            Navegue pelos módulos principais
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-bold">{currentSlide + 1}</span>
                          <span className="text-white/50">/</span>
                          <span className="text-white/70">{dashboardImages.length}</span>
                        </div>
                      </div>
                    </div>

                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {dashboardImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full backdrop-blur-sm border border-white/40 transition-all duration-300 hover:scale-125 ${
                            index === currentSlide 
                              ? 'bg-blue-400 border-transparent scale-125' 
                              : 'bg-white/30'
                          }`}
                          aria-label={`Ir para slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Base do monitor */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 lg:w-20 h-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-md" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 lg:w-40 h-2 bg-gradient-to-b from-slate-700 to-slate-800 rounded-md" />
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-40 lg:w-56 h-1.5 bg-black/15 blur-lg rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos - Mais vibrante */}
      <section id="quem-somos" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-8 mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm px-6 py-2 rounded-full text-blue-700 font-semibold text-sm shadow-sm border border-blue-100/60">
              <Users className="w-4 h-4 mr-2" />
              Sobre Nós
            </div>
            <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 bg-clip-text text-transparent">
              Feito para profissionais
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Desenvolvemos com psicólogos, para psicólogos. Simplicidade, segurança e eficiência.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-slate-800 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 p-8 bg-white rounded-2xl shadow-lg border border-blue-100/30 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 group hover:border-blue-200/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-500">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Foco no Essencial</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Interface limpa e intuitiva, sem complicações desnecessárias.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 p-8 bg-white rounded-2xl shadow-lg border border-blue-100/30 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 group hover:border-blue-200/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Segurança Garantida</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Criptografia avançada, LGPD completo e backups automáticos.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 p-8 bg-white rounded-2xl shadow-lg border border-blue-100/30 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 group hover:border-blue-200/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Suporte Especializado</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Equipe que entende as necessidades específicas da psicologia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato - Mais atrativo */}
      <section id="contato" className="py-24 px-8 bg-gradient-to-t from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-8 mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm px-6 py-2 rounded-full text-blue-700 font-semibold text-sm shadow-sm border border-blue-100/60">
              <Mail className="w-4 h-4 mr-2" />
              Entre em Contato
            </div>
            <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 bg-clip-text text-transparent">
              Vamos conversar?
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Tire suas dúvidas ou solicite uma demonstração personalizada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 text-slate-800 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 p-8 bg-white rounded-2xl shadow-lg border border-blue-100/30 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">WhatsApp</h3>
              <p className="text-2xl font-bold text-blue-700 leading-relaxed mb-4">
                (19) 99952-8289
              </p>
              <p className="text-sm text-blue-600 italic font-medium">
                Atendimento rápido por mensagem
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 p-8 bg-white rounded-2xl shadow-lg border border-blue-100/30 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">E-mail</h3>
              <p className="text-lg text-blue-700 leading-relaxed font-semibold">
                <a href="mailto:contato@agendaterapia.com.br" className="hover:text-blue-600 transition-colors">
                  contato@agendaterapia.com.br
                </a>
              </p>
              <p className="text-sm text-blue-600 italic font-medium">
                Resposta em até 24h
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer com LOGO MUITO GRANDE e mais visível */}
      <footer className="bg-gradient-to-t from-slate-900 via-blue-900/90 to-indigo-900/90 text-white py-16 px-8 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="flex items-center gap-2">
              {/* LOGO ENORME no footer - bem visível */}
              <Image 
                src="/logo-psico.png" 
                alt="Agenda Terapia" 
                width={400}  // Aumentado MUITO
                height={120} // Aumentado MUITO
                className="h-20 w-auto object-contain brightness-125 hover:brightness-150 transition-all duration-300"  // Aumentado e mais brilhante
                style={{ 
                  maxHeight: '100px', 
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(1.2)'
                }}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-slate-300">
              <a href="#features" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Funcionalidades</a>
              <a href="#quem-somos" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Quem Somos</a>
              <a href="#" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Segurança</a>
              <a href="#" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Política de Privacidade</a>
              <a href="#contato" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Contato</a>
            </div>
          </div>

          <div className="pt-12 border-t border-blue-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col md:flex-row items-center gap-8 text-slate-300 text-sm">
                <div className="flex items-center gap-2 bg-blue-800/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">(19) 99952-8289</span>
                  <span className="text-blue-300 text-xs italic">(Mensagens)</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-800/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contato@agendaterapia.com.br" className="hover:text-white transition-colors font-medium">
                    contato@agendaterapia.com.br
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-slate-400 text-sm font-light text-center">
                  © {new Date().getFullYear()} Agenda Terapia. Todos os direitos reservados.
                </p>
                <a 
                  href="https://agendaterapia.com.br/agenda/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-400 flex items-center gap-3 group"
                >
                  <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Acessar Plataforma
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}