'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ArrowRight, Calendar, User, Shield, Users, FileText, Cake, Building2, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AnimatedContent() {
  const features = [
    { icon: Calendar, title: 'Agendamento Inteligente', desc: 'Calendários sincronizados, confirmações e lembretes automáticos' },
    { icon: User, title: 'Gestão Completa de Pacientes', desc: 'Anamnese digital, histórico completo, lembretes de aniversário' },
    { icon: Users, title: 'Equipe Multiusuário', desc: 'Recepção gerencia só agendamentos, terapeutas acessam dados completos' },
    { icon: FileText, title: 'Lançamentos Financeiros', desc: 'Controle de pagamentos e relatórios detalhados por período/paciente' },
    { icon: Shield, title: '100% LGPD & Seguro', desc: 'Dados criptografados, backups automáticos, acesso granular por função' },
    { icon: Cake, title: 'Lembretes de Aniversário', desc: 'Nunca mais esqueça datas importantes dos seus pacientes' },
  ]

  return (
    <>
      {/* Background sutil */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/95 border-b border-gray-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo-psico.jpg" 
                alt="AgendaTerapia" 
                width={52} 
                height={52} 
                className="rounded-2xl shadow-lg ring-2 ring-white/50"
                priority
              />
              <span className="font-black text-2xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">
                AgendaTerapia
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-700 hover:text-slate-900 font-semibold px-4 py-2 transition-all duration-300 rounded-xl hover:bg-slate-50/80 backdrop-blur-sm">Funcionalidades</a>
              <a href="#quem-somos" className="text-slate-700 hover:text-slate-900 font-semibold px-4 py-2 transition-all duration-300 rounded-xl hover:bg-slate-50/80 backdrop-blur-sm">Quem Somos</a>
              <a href="#precos" className="text-slate-700 hover:text-slate-900 font-semibold px-4 py-2 transition-all duration-300 rounded-xl hover:bg-slate-50/80 backdrop-blur-sm">Preços</a>
              {/* BOTÃO NAVBAR */}
              <a 
                href="https://agendaterapia.com.br/agenda/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-400 flex items-center gap-2 backdrop-blur-sm border border-slate-200/50"
              >
                <Calendar className="w-5 h-5" />
                Logar/Criar Conta
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-32 min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-slate-200/30 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-l from-slate-100/50 to-transparent rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:max-w-lg"
          >
            <div className="inline-flex items-center bg-slate-100/80 px-6 py-3 rounded-2xl text-slate-700 font-semibold text-sm shadow-lg border border-slate-200/60 backdrop-blur-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Plataforma 100% brasileira para psicólogos e clínicas
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.88] bg-gradient-to-r from-slate-900 via-gray-900 to-slate-700 bg-clip-text text-transparent mb-8 drop-shadow-xl">
                Gerencie sua <br className="hidden lg:block" />
                <span className="block bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent drop-shadow-xl">
                  clínica em minutos
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-10 max-w-lg font-light">
                Agendamentos, pacientes, equipe e finanças organizados. 
                <strong className="font-semibold text-slate-900"> Interface limpa, sem complicações.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* BOTÃO PRINCIPAL */}
              <a 
                href="https://agendaterapia.com.br/agenda/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-12 py-6 rounded-3xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 w-full sm:w-auto justify-center backdrop-blur-md border border-slate-200/30"
              >
                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Logar/Criar Conta</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>

              <a 
                href="#contato" 
                className="border-2 border-slate-200 hover:border-slate-300 text-slate-800 hover:text-slate-900 bg-white/80 px-12 py-6 rounded-3xl font-bold text-xl hover:shadow-lg transition-all duration-400 flex items-center gap-3 w-full sm:w-auto justify-center backdrop-blur-md"
              >
                <Phone className="w-5 h-5" />
                Solicitar Demo
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2 p-4 bg-white/70 rounded-2xl backdrop-blur-sm shadow-sm border border-slate-100/50">
                <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-md"></div>
                Suporte 24/7
              </div>
              <div className="flex items-center gap-2 p-4 bg-white/70 rounded-2xl backdrop-blur-sm shadow-sm border border-slate-100/50">
                <Building2 className="w-4 h-4" />
                +500 profissionais
              </div>
              <div className="flex items-center gap-2 p-4 bg-white/70 rounded-2xl backdrop-blur-sm shadow-sm border border-slate-100/50">
                <Shield className="w-4 h-4" />
                100% LGPD
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:col-span-1"
          >
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-br from-slate-100/40 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-white/90 backdrop-blur-3xl rounded-3xl p-10 shadow-2xl border border-slate-100/60 hover:shadow-3xl hover:border-slate-200/80 transition-all duration-700">
                <div className="w-full h-80 lg:h-[450px] bg-gradient-to-br from-slate-50 to-white/80 rounded-3xl flex items-center justify-center border-4 border-white/70 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                  <div className="text-center text-slate-500 relative z-10">
                    <Calendar className="w-32 h-32 mx-auto mb-10 opacity-10 drop-shadow-2xl" />
                    <div className="text-6xl font-black text-slate-400 mb-6 drop-shadow-xl">
                      Dashboard
                    </div>
                    <p className="text-2xl font-light text-slate-500 tracking-wide">Interface limpa e intuitiva</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-400/5 to-transparent -rotate-2 scale-150 blur-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32">
            <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-gray-900 to-slate-700 bg-clip-text text-transparent mb-8 drop-shadow-2xl">
              Tecnologia simples <br />para clínicas reais
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Interface limpa, velocidade e segurança. Projetado para o dia a dia da psicologia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-10 lg:p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-100/60 shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:border-slate-200/80 transition-all duration-700 cursor-pointer relative overflow-hidden hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400/3 to-slate-200/5 transform -skew-x-6 -translate-x-1/4 group-hover:translate-x-0 transition-transform duration-1000" />
                <div className="relative z-10">
                  <feature.icon className="w-20 h-20 text-slate-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-8 shadow-2xl bg-slate-100/50 p-4 rounded-2xl group-hover:bg-slate-200/60" />
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-slate-800">{feature.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-32 px-8 bg-gradient-to-t from-slate-900/10 via-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-8 mb-24"
          >
            <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-gray-900 to-slate-700 bg-clip-text text-transparent drop-shadow-2xl">
              Projetado para você
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Desenvolvemos com psicólogos, para psicólogos. Simples, seguro e brasileiro.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 text-slate-800">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 p-10 bg-white/70 rounded-3xl backdrop-blur-xl shadow-xl border border-slate-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                <Calendar className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">Interface Limpa</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Navegação intuitiva, zero curva de aprendizado.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 p-10 bg-white/70 rounded-3xl backdrop-blur-xl shadow-xl border border-slate-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                <Shield className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">Segurança Máxima</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Criptografia ponta a ponta, LGPD completo, acessos controlados.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 p-10 md:col-span-2 lg:col-span-1 bg-white/70 rounded-3xl backdrop-blur-xl shadow-xl border border-slate-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                <Users className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">Suporte Local</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Equipe brasileira que entende psicologia e tecnologia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}