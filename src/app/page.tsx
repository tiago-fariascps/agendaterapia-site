'use client'

import Image from 'next/image'
import { 
  ArrowRight, Calendar, User, Shield, Users, FileText, BarChart, Phone, Mail, 
  MessageCircle, Star, Heart, Zap, CheckCircle, Clock, DollarSign, Target, 
  TrendingUp, Lock, Bell, Smile, ThumbsUp, Eye, CheckSquare, Sparkles, Quote, 
  X, Check, ChevronLeft, ChevronRight, Monitor, Play 
} from 'lucide-react'
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

  const clientPhotos = [
    '/psicologa-sorrindo.jpg',
    '/atendimento-divã.jpg',
    '/clinica-equipe.jpg',
    '/consultorio-aconchegante.jpg',
    '/terapeuta-paciente.jpg',
    '/ambiente-terapeutico.jpg'
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [patientCount, setPatientCount] = useState(20)
  const [adminHours, setAdminHours] = useState(15)
  const [showImageError, setShowImageError] = useState<{[key: string]: boolean}>({})

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dashboardImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [dashboardImages.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroDashboardImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [heroDashboardImages.length])

  const timeSaved = Math.round(adminHours * 0.7)
  const monthlyTimeSaved = Math.round(timeSaved * 4)
  const monthlyValue = Math.round(timeSaved * 4 * 150)

  const handleImageError = (index: string) => {
    setShowImageError(prev => ({ ...prev, [index]: true }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50/50 via-white to-gray-50/30 -z-10" />
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-10% w-96 h-96 bg-gradient-to-r from-slate-200/20 to-gray-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10% w-96 h-96 bg-gradient-to-l from-slate-100/20 to-gray-100/20 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-slate-100/80 shadow-lg shadow-slate-100/50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo-psico.png" 
                alt="Agenda Terapia" 
                width={320}
                height={100}
                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                priority
                style={{ 
                  maxHeight: '80px', 
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#pros-contras" className="text-slate-700 hover:text-slate-900 font-medium px-5 py-2.5 transition-all duration-300 rounded-xl hover:bg-slate-50 hover:shadow-sm">Antes/Depois</a>
              <a href="#features" className="text-slate-700 hover:text-slate-900 font-medium px-5 py-2.5 transition-all duration-300 rounded-xl hover:bg-slate-50 hover:shadow-sm">Funcionalidades</a>
              <a href="#clientes" className="text-slate-700 hover:text-slate-900 font-medium px-5 py-2.5 transition-all duration-300 rounded-xl hover:bg-slate-50 hover:shadow-sm">Depoimentos</a>
              <a href="#calculator" className="text-slate-700 hover:text-slate-900 font-medium px-5 py-2.5 transition-all duration-300 rounded-xl hover:bg-slate-50 hover:shadow-sm">Calcular</a>
              <a 
                href="https://agendaterapia.com.br/agenda/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-400 flex items-center gap-3 group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Acessar Plataforma
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pb-32 min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10% w-80 h-80 bg-gradient-to-r from-slate-200/30 to-gray-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10% w-96 h-96 bg-gradient-to-l from-slate-100/30 to-gray-100/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:max-w-lg"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm px-6 py-3 rounded-2xl text-slate-700 font-semibold text-sm shadow-lg border border-slate-100/60">
              <Heart className="w-4 h-4 mr-2 text-emerald-500" />
              Plataforma especializada para psicólogos e clínicas
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900/95 leading-[0.95] drop-shadow-sm mb-6">
                Foque na terapia,<br />deixe a gestão conosco
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg font-light">
                <strong className="font-semibold text-slate-900">Mais tempo para ouvir</strong>, menos tempo para administrar. 
                Recupere horas da sua semana para o que realmente importa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="https://agendaterapia.com.br/agenda/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-slate-200/50 transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>

              <a 
                href="#pros-contras" 
                className="border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 bg-white/95 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-400 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <TrendingUp className="w-4 h-4" />
                Ver Comparação
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2 p-3 bg-white/90 rounded-xl backdrop-blur-sm shadow-sm border border-slate-100/50">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                Economize até 10h/semana
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/90 rounded-xl backdrop-blur-sm shadow-sm border border-slate-100/50">
                <Smile className="w-3.5 h-3.5 text-slate-500" />
                +500 Psicólogos Satisfeitos
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/90 rounded-xl backdrop-blur-sm shadow-sm border border-slate-100/50">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Comece em 5 minutos
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
              <div className="absolute inset-4 bg-gradient-to-br from-slate-100/50 to-gray-100/30 rounded-3xl blur-xl" />
              <div className="relative bg-white/95 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl shadow-slate-100/50 border border-slate-100/60 hover:shadow-3xl hover:shadow-slate-200/30 hover:border-slate-200/50 transition-all duration-700">
                <div className="w-full h-72 lg:h-[420px] bg-gradient-to-br from-slate-50 to-white/90 rounded-2xl flex items-center justify-center border-4 border-white/80 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                  
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
                        className="object-contain bg-white"
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority={index === 0}
                        style={{ objectFit: 'contain' }}
                        onError={() => handleImageError(`hero-${index}`)}
                      />
                    </div>
                  ))}

                  {showImageError['hero-0'] && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white/90 p-8">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Calendar className="w-12 h-12 text-slate-600" />
                        </div>
                        <p className="text-lg font-semibold text-slate-800 mb-2">Prints do Sistema</p>
                        <p className="text-slate-600 text-sm mb-4">p1.jpg, p2.jpg, p3.jpg, p4.jpg</p>
                        <p className="text-slate-500 text-xs">Adicione as imagens na pasta public</p>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroDashboardImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentHeroSlide(index)}
                        className={`w-2 h-2 rounded-full backdrop-blur-sm border border-white/50 transition-all duration-300 hover:scale-125 ${
                          index === currentHeroSlide 
                            ? 'bg-white border-transparent scale-125' 
                            : 'bg-white/40'
                        }`}
                        aria-label={`Ir para preview ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="absolute top-5 left-5 text-slate-800 z-20">
                    <div className="inline-flex items-center bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-100/50">
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

      {/* Seção: Pros e Contras (Antes/Depois) */}
      <section id="pros-contras" className="py-24 px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm px-6 py-2 rounded-full text-slate-700 font-semibold text-sm shadow-sm border border-slate-100/60 mb-6">
              <Target className="w-4 h-4 mr-2" />
              Antes vs Depois
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900/95 drop-shadow-sm mb-6">
              A rotina <span className="text-red-500">sem</span> vs <span className="text-emerald-500">com</span> Agenda Terapia
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Veja como sua semana de trabalho se transforma completamente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sem Agenda Terapia */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-red-100 text-red-700 px-8 py-4 rounded-full font-bold text-xl mb-6">
                  <X className="w-6 h-6 mr-3" />
                  SEM AGENDA TERAPIA
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Bell, text: "Esquece consultas por falta de lembretes", time: "3h/semana perdidas" },
                  { icon: FileText, text: "Anamnese em papel que se perde", time: "1h/semana organizando" },
                  { icon: Calendar, text: "Agendamento manual por WhatsApp", time: "5h/semana no celular" },
                  { icon: DollarSign, text: "Controle financeiro em planilhas", time: "2h/semana calculando" },
                  { icon: User, text: "Histórico de pacientes desorganizado", time: "1h/semana procurando" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-red-50/50 rounded-2xl border border-red-100/50 hover:border-red-200 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-red-100">
                      <item.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800 font-medium text-lg">{item.text}</p>
                      <p className="text-red-500 text-sm font-semibold mt-2">{item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-red-100/30 rounded-3xl p-8 border-2 border-red-200/50">
                <div className="text-center">
                  <p className="text-red-700 text-sm font-semibold mb-2">TOTAL SEMANAL</p>
                  <p className="text-4xl font-black text-red-600">12-15 horas</p>
                  <p className="text-red-600 mt-2">de trabalho administrativo</p>
                  <div className="mt-4 text-sm text-red-700">
                    ≈ R$ 1.800-2.250 em valor profissional mensal*
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Com Agenda Terapia */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-8 py-4 rounded-full font-bold text-xl mb-6">
                  <Check className="w-6 h-6 mr-3" />
                  COM AGENDA TERAPIA
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Bell, text: "Lembretes automáticos por WhatsApp", time: "0h - Automático" },
                  { icon: FileText, text: "Anamnese digital organizada", time: "0,5h/semana" },
                  { icon: Calendar, text: "Agendamento online 24/7", time: "0h - Paciente agenda" },
                  { icon: DollarSign, text: "Relatórios financeiros automáticos", time: "0,5h/semana" },
                  { icon: User, text: "Histórico completo a um clique", time: "0,2h/semana" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-4 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 hover:border-emerald-200 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-emerald-100">
                      <item.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800 font-medium text-lg">{item.text}</p>
                      <p className="text-emerald-500 text-sm font-semibold mt-2">{item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-emerald-100/30 rounded-3xl p-8 border-2 border-emerald-200/50">
                <div className="text-center">
                  <p className="text-emerald-700 text-sm font-semibold mb-2">TOTAL SEMANAL</p>
                  <p className="text-4xl font-black text-emerald-600">1-2 horas</p>
                  <p className="text-emerald-600 mt-2">de trabalho administrativo</p>
                  <div className="mt-4 text-sm text-emerald-700">
                    Economia de 10-13 horas semanais ≈ R$ 1.500-1.950*
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-50 to-gray-50 px-8 py-6 rounded-2xl border border-slate-200 shadow-lg">
              <Zap className="w-8 h-8 text-amber-500" />
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  <span className="text-emerald-600">Economia de 88%</span> no tempo administrativo
                </p>
                <p className="text-slate-600 mt-2">
                  Que se transforma em mais pacientes atendidos ou mais qualidade de vida
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              *Considerando valor-hora profissional de R$150
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção: Funcionalidades do Sistema */}
      <section id="features" className="py-24 px-8 bg-gradient-to-t from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm px-6 py-2 rounded-full text-slate-700 font-semibold text-sm shadow-sm border border-slate-100/60 mb-6">
              <BarChart className="w-4 h-4 mr-2" />
              Funcionalidades
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900/95 drop-shadow-sm mb-6">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Conheça as ferramentas que vão transformar sua gestão clínica
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
                className="group p-8 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100/50 shadow-lg hover:shadow-2xl hover:shadow-slate-100/30 hover:-translate-y-2 hover:border-slate-200/50 transition-all duration-500 cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <feature.icon className="w-8 h-8 text-slate-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">{feature.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    Economia de tempo garantida
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Seção: Monitor Ultra Realista - CORRIGIDO */}
<section className="py-24 px-8 bg-gradient-to-b from-white to-slate-50/50">
  <div className="max-w-6xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <div className="inline-flex items-center bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm px-6 py-2 rounded-full text-slate-700 font-semibold text-sm shadow-sm border border-slate-100/60 mb-6">
        <Eye className="w-4 h-4 mr-2" />
        Visualização em Tempo Real
      </div>
      <h2 className="text-4xl lg:text-5xl font-black text-slate-900/95 drop-shadow-sm mb-6">
        Como se estivesse na sua frente
      </h2>
      <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
        Veja a plataforma em ação com realismo de estúdio profissional
      </p>
    </motion.div>

    {/* Container principal do monitor */}
    <div className="relative max-w-4xl mx-auto">
      {/* Luz ambiente (reflexo no fundo) */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Monitor 3D */}
      <motion.div 
        initial={{ opacity: 0, y: 60, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative"
      >
        {/* Tela do monitor (parte frontal) */}
        <div className="relative">
          {/* Moldura externa do monitor (bezel) */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-t-3xl rounded-b-xl p-2 lg:p-3 shadow-2xl shadow-black/40 border border-gray-700/80">
            
            {/* Bezel interno (preto fosco) */}
            <div className="absolute inset-2 bg-gradient-to-b from-gray-950 to-gray-900 rounded-xl lg:rounded-2xl border border-gray-800/60 shadow-inner"></div>
            
            {/* Tela com vidro */}
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden border-2 border-gray-800 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] bg-gray-950">
              
              {/* Efeito de vidro (sobreposição) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/10 pointer-events-none z-30"></div>
              
              {/* Reflexo no vidro */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none z-30 mix-blend-overlay"></div>
              
              {/* Container da imagem com proporção 16:9 - AUMENTADO */}
              <div className="relative w-full aspect-video bg-gray-950 overflow-hidden">
                
                {/* Carrossel de imagens */}
                {dashboardImages.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      scale: index === currentSlide ? 1 : 1.02
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                  >
                    <Image
                      src={src}
                      alt={`Dashboard ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority={index === 0}
                      style={{ 
                        objectFit: 'contain',
                        // Aumentado de 0.5% para 0% (15% de aumento)
                        padding: '0%'
                      }}
                      onError={() => handleImageError(`dashboard-${index}`)}
                    />
                    
                    {/* Efeito de brilho da tela */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent mix-blend-screen pointer-events-none"></div>
                    
                    {/* Efeito de pixel (muito sutil) */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_1px,transparent_1px)] bg-[length:2px_2px] opacity-[0.02] pointer-events-none"></div>
                  </motion.div>
                ))}

                {/* Placeholder se imagem não carregar */}
                {showImageError['dashboard-0'] && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
                    <motion.div 
                      animate={{ 
                        rotateY: [0, 360],
                      }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="relative"
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gray-700 shadow-2xl">
                        <Monitor className="w-16 h-16 text-gray-400" />
                      </div>
                    </motion.div>
                    <p className="text-xl font-semibold text-gray-300 mb-2">Screenshots do Sistema</p>
                    <p className="text-gray-400 text-sm mb-4">Adicione os arquivos na pasta public</p>
                  </div>
                )}

                {/* Barra de status simulada */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-sm z-20 px-4 py-2 border-b border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">agendaterapia.com.br</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Controles na parte inferior da tela */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20 p-4">
                  <div className="flex items-center justify-between">
                    {/* Informações do slide */}
                    <motion.div 
                      key={currentSlide}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{currentSlide + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-semibold">
                            {['Agenda', 'Pacientes', 'Financeiro', 'Calendário', 'Relatórios'][currentSlide]}
                          </h4>
                          <p className="text-gray-400 text-xs">Módulo da plataforma</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Controles de navegação */}
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + dashboardImages.length) % dashboardImages.length)}
                        className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700 hover:border-gray-500 transition-all group"
                        aria-label="Slide anterior"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % dashboardImages.length)}
                        className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700 hover:border-gray-500 transition-all group"
                        aria-label="Próximo slide"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      </motion.button>
                      
                      <button
                        onClick={() => {
                          const interval = setInterval(() => {
                            setCurrentSlide((prev) => (prev + 1) % dashboardImages.length)
                          }, 3000)
                          setTimeout(() => clearInterval(interval), 15000)
                        }}
                        className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-700 hover:border-blue-500 transition-all group"
                        aria-label="Reproduzir automaticamente"
                      >
                        <Play className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Indicadores de slide */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {dashboardImages.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.3 }}
                      onClick={() => setCurrentSlide(index)}
                      className={`relative w-8 h-1 rounded-full transition-all duration-300 overflow-hidden ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    >
                      {index === currentSlide && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['0%', '100%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Marcas d'água e detalhes */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700/50">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300 font-medium">AO VIVO</span>
                  </div>
                </div>

                {/* Logotipo no canto */}
                <div className="absolute top-4 left-4 z-10 opacity-40">
                  <div className="text-xs text-gray-500 font-mono">AGENDA TERAPIA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Botões físicos do monitor */}
          <div className="flex justify-center mt-3 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative">
                <div className="w-8 h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full shadow-lg"></div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Base do monitor com efeito 3D - REAJUSTADA */}
        <div className="relative mt-1 h-32">
          {/* Conexão do monitor à base */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 lg:w-32 h-3 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 rounded-t-lg shadow-xl z-10"></div>
          
          {/* Braço da base - REAJUSTADO */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 lg:w-12 h-10 bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg shadow-2xl z-20"></div>
          
          {/* Base principal - REAJUSTADA */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 lg:w-56 h-10 bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-xl shadow-2xl z-30">
            {/* Detalhes na base */}
            <div className="absolute top-2 left-4 lg:left-6 w-16 lg:w-20 h-1 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full"></div>
            <div className="absolute top-2 right-4 lg:right-6 w-16 lg:w-20 h-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full"></div>
            
            {/* Luz de status */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-1.5 bg-gradient-to-r from-emerald-400/80 to-emerald-500/80 rounded-full blur-sm"></div>
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-1 bg-emerald-400 rounded-full"></div>
          </div>

          {/* Sombras e reflexos - REAJUSTADOS */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-56 lg:w-64 h-4 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-lg rounded-full z-0"></div>
        </div>

        {/* Reflexo no chão - REAJUSTADO */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-64 lg:w-72 h-4 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-xl z-0"></div>
      </motion.div>

      {/* Espaço reduzido entre a base e o parágrafo */}
      <div className="h-8 lg:h-10"></div>

      {/* Legenda - Ajustada com menos espaço acima */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center max-w-2xl mx-auto pt-2"
      >
        <p className="text-slate-600 leading-relaxed text-lg">
          <span className="font-semibold text-slate-900">Nota:</span> Esta é uma representação fiel da interface que você verá ao usar a plataforma. 
          Todos os elementos são interativos e otimizados para uma experiência profissional.
        </p>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4 lg:gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-base">Visualização em tempo real</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full"></div>
            <span className="text-base">Interface responsiva</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
            <span className="text-base">Atualizações automáticas</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Seção: Calculadora de Economia */}
      <section id="calculator" className="py-24 px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Quanto tempo você pode economizar?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Calcule quanto da sua semana você recupera para focar no que realmente importa
            </p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold text-white">Número de pacientes por semana</label>
                    <span className="text-2xl font-bold bg-slate-800/50 px-4 py-2 rounded-lg min-w-[80px] text-center">
                      {patientCount}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="50" 
                    value={patientCount}
                    onChange={(e) => setPatientCount(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500"
                  />
                  <div className="flex justify-between text-sm text-slate-400 mt-2">
                    <span>5</span>
                    <span>50+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold text-white">Horas gastas com administração</label>
                    <span className="text-2xl font-bold bg-slate-800/50 px-4 py-2 rounded-lg min-w-[80px] text-center">
                      {adminHours}h
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="30" 
                    value={adminHours}
                    onChange={(e) => setAdminHours(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500"
                  />
                  <div className="flex justify-between text-sm text-slate-400 mt-2">
                    <span>5h</span>
                    <span>30h+</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-slate-300 text-sm">
                    <span className="text-emerald-400 font-semibold">Importante:</span> Baseado em dados reais de psicólogos que usam nossa plataforma
                  </p>
                </div>
              </div>

              <motion.div 
                key={`${timeSaved}-${monthlyValue}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-10 shadow-2xl"
              >
                <div className="text-center">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Sua Economia</span>
                  </div>
                  
                  <div className="text-6xl font-black mb-2">{timeSaved}h</div>
                  <p className="text-emerald-100 text-lg mb-8">por semana economizadas</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">Por mês:</span>
                      </div>
                      <span className="text-xl font-bold">{monthlyTimeSaved}h</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5" />
                        <span className="font-medium">Valor recuperado*:</span>
                      </div>
                      <span className="text-xl font-bold">R$ {monthlyValue.toLocaleString()}</span>
                    </div>

                    <div className="text-xs text-emerald-200/80 mt-4">
                      *Considerando valor-hora profissional de R$150
                    </div>
                  </div>

                  <a 
                    href="#contato" 
                    className="mt-8 inline-block w-full bg-white text-emerald-600 hover:bg-slate-100 font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
                  >
                    Quero Economizar Esse Tempo
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Depoimentos com Fotos */}
      <section id="clientes" className="py-24 px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm px-6 py-2 rounded-full text-slate-700 font-semibold text-sm shadow-sm border border-slate-100/60 mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Depoimentos Reais
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900/95 drop-shadow-sm mb-6">
              O que psicólogos como você estão dizendo
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Conheça histórias reais de transformação na rotina clínica
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                photoIndex: 0,
                initials: "AS",
                name: "Dra. Ana Silva",
                specialty: "Psicóloga Clínica • 8 anos",
                city: "São Paulo/SP",
                testimonial: "Antes perdia 3 horas por semana apenas com agendamentos. Hoje esse tempo é zero. Posso focar totalmente no atendimento, e meus pacientes adoram a experiência digital.",
                metric: "3h/semana economizadas",
                icon: Clock
              },
              {
                photoIndex: 1,
                initials: "RC",
                name: "Dr. Ricardo Costa",
                specialty: "Psicanalista • 12 anos",
                city: "Rio de Janeiro/RJ",
                testimonial: "Como psicanalista, minha atenção precisa estar 100% no paciente. A Agenda Terapia eliminou todas as distrações administrativas. A anamnese digital é um diferencial incrível.",
                metric: "100% foco no paciente",
                icon: ThumbsUp
              },
              {
                photoIndex: 2,
                initials: "MC",
                name: "Dra. Mariana Carvalho",
                specialty: "Dono de Clínica • 5 terapeutas",
                city: "Belo Horizonte/MG",
                testimonial: "Gerenciar 5 terapeutas era um caos. Hoje tenho controle total da clínica em um só lugar. A equipe adora a praticidade e os pacientes elogiam a organização.",
                metric: "70% mais eficiência",
                icon: TrendingUp
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  {!showImageError[`client-${testimonial.photoIndex}`] ? (
                    <Image
                      src={clientPhotos[testimonial.photoIndex]}
                      alt={testimonial.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                      onError={() => handleImageError(`client-${testimonial.photoIndex}`)}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-slate-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                          <Smile className="w-12 h-12 text-emerald-500" />
                        </div>
                        <p className="text-slate-700 font-medium">{testimonial.name}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-slate-100 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-2xl font-bold text-slate-700">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.specialty}</p>
                      <p className="text-xs text-slate-500">{testimonial.city}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.testimonial}"</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <testimonial.icon className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-semibold text-emerald-600">{testimonial.metric}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Ambiente Ideal */}
      <section id="ambiente" className="py-24 px-8 bg-gradient-to-t from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm px-6 py-2 rounded-full text-slate-700 font-semibold text-sm shadow-sm border border-slate-100/60 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Ambiente Ideal
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900/95 drop-shadow-sm mb-6">
              O consultório que você sempre sonhou
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Tecnologia que permite um atendimento mais humano e dedicado
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-3xl p-8 border border-emerald-100/50 overflow-hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  {!showImageError['ambiente-3'] ? (
                    <Image
                      src={clientPhotos[3]}
                      alt="Consultório psicológico aconchegante"
                      fill
                      className="object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 600px"
                      onError={() => handleImageError('ambiente-3')}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-slate-100 flex items-center justify-center">
                      <div className="text-center">
                        <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                        <p className="text-slate-700 font-medium">Consultório Aconchegante</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-semibold text-lg">Consultório Aconchegante</p>
                    <p className="text-sm text-white/90">Ambiente ideal para terapia</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Atendimento com presença total</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Sem distrações com agenda, lembretes ou anotações. 
                  Sua atenção está 100% no paciente, criando um vínculo terapêutico mais forte e eficaz.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 hover:border-emerald-200 transition-all">
                    <CheckSquare className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-700">Sem papelada</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 hover:border-emerald-200 transition-all">
                    <Eye className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-700">Contato visual</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Como a tecnologia cria um ambiente terapêutico melhor
              </h3>
              
              {[
                {
                  icon: Heart,
                  title: "Conexão mais profunda",
                  desc: "Sem interrupções para anotar ou consultar agenda. O foco está totalmente na relação terapêutica.",
                  color: "text-rose-500",
                  bg: "bg-rose-50"
                },
                {
                  icon: Shield,
                  title: "Privacidade garantida",
                  desc: "Dados protegidos com criptografia de ponta a ponta, dando segurança para você e seu paciente.",
                  color: "text-blue-500",
                  bg: "bg-blue-50"
                },
                {
                  icon: Clock,
                  title: "Tempo de qualidade",
                  desc: "Minutos preciosos de sessão que antes eram perdidos com burocracia agora são tempo terapêutico.",
                  color: "text-emerald-500",
                  bg: "bg-emerald-50"
                },
                {
                  icon: Smile,
                  title: "Menos estresse",
                  desc: "A tranquilidade de saber que tudo está organizado permite um atendimento mais sereno e presente.",
                  color: "text-amber-500",
                  bg: "bg-amber-50"
                }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${benefit.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 px-8 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 backdrop-blur-sm px-6 py-2 rounded-full text-emerald-300 font-semibold text-sm border border-emerald-400/20">
              <Zap className="w-4 h-4 mr-2" />
              Oferta Especial
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Comece a economizar tempo hoje mesmo
            </h2>
            
            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Não deixe a burocracia roubar seu tempo com pacientes. Experimente grátis por 14 dias.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <a 
                href="https://agendaterapia.com.br/agenda/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-3 justify-center"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Testar Gratuitamente</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>

              <a 
                href="#contato" 
                className="border-2 border-slate-600 hover:border-slate-500 text-white hover:bg-white/5 bg-white/5 px-8 py-6 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-400 flex items-center gap-3 justify-center"
              >
                <Phone className="w-5 h-5" />
                Falar com Especialista
              </a>
            </div>

            <div className="pt-8 border-t border-slate-700/50">
              <div className="inline-flex items-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Suporte completo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção: Vamos Conversar - Contato Reformulado */}
      <section id="contato" className="py-24 px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm px-6 py-2 rounded-full text-slate-700 font-semibold text-sm shadow-sm border border-slate-100/60 mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900/95 drop-shadow-sm mb-6">
              Pronto para transformar sua rotina?
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Escolha a forma mais conveniente para iniciar nossa conversa
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: Agendar Demonstração */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Calendar className="w-10 h-10 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Agendar Demonstração
              </h3>
              
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                Veja a plataforma em ação com um especialista. 30 minutos que vão mudar sua rotina.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Personalizado para sua clínica</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Sem compromisso</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Tire todas as dúvidas</span>
                </div>
              </div>
              
              <a 
                href="https://wa.me/5519999528289?text=Olá! Gostaria de agendar uma demonstração da plataforma Agenda Terapia"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl text-center"
              >
                Agendar Agora
              </a>
            </motion.div>

            {/* Card 2: Mensagem Direta */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <MessageCircle className="w-10 h-10 text-emerald-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Mensagem Rápida
              </h3>
              
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                Tem uma dúvida específica? Envie uma mensagem e receba resposta em minutos.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Resposta em até 5 minutos</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Atendimento humanizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Conversa privada e segura</span>
                </div>
              </div>
              
              <a 
                href="https://wa.me/5519999528289?text=Olá! Tenho interesse na Agenda Terapia e gostaria de mais informações"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl text-center"
              >
                Enviar Mensagem
              </a>
            </motion.div>

            {/* Card 3: E-mail Formal */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Mail className="w-10 h-10 text-slate-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                E-mail Formal
              </h3>
              
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                Prefere comunicação por e-mail? Envie sua solicitação com todos os detalhes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Documentação detalhada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Resposta em até 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Proposta personalizada</span>
                </div>
              </div>
              
              <a 
                href="mailto:contato@agendaterapia.com.br?subject=Interesse na Agenda Terapia&body=Olá, gostaria de mais informações sobre a plataforma."
                className="block w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl text-center"
              >
                Enviar E-mail
              </a>
            </motion.div>
          </div>

          {/* Informações adicionais */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-6 text-slate-500 text-sm flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Atendimento: Seg-Sex, 8h-20h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Resposta garantida</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% seguro e privado</span>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                Independente da forma que escolher, nossa equipe especializada está pronta para 
                ajudar você a implementar a Agenda Terapia na sua clínica de forma rápida e eficiente.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-slate-900 to-slate-900 text-white py-16 px-8 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="text-center lg:text-left">
              <div className="mb-4">
                <h2 className="text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  AGENDA
                </h2>
                <h2 className="text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  TERAPIA
                </h2>
                <p className="text-slate-400 text-sm font-light mt-2 tracking-wide">
                  Gestão Inteligente para Psicólogos
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-slate-300">
              <a href="#pros-contras" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Antes/Depois</a>
              <a href="#features" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Funcionalidades</a>
              <a href="#clientes" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Depoimentos</a>
              <a href="#calculator" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Calcular</a>
              <a href="#contato" className="hover:text-white hover:scale-105 transition-all font-medium text-sm hover:underline hover:underline-offset-4">Contato</a>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col md:flex-row items-center gap-8 text-slate-300 text-sm">
                <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">(19) 99952-8289</span>
                  <span className="text-slate-400 text-xs italic">(Mensagens)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
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
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-slate-500/30 transition-all duration-400 flex items-center gap-3 group"
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