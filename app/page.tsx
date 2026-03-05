import Link from "next/link";
import { ArrowRight, UtensilsCrossed, Store, Smartphone, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">

        {/* 🟢 NAVBAR (Cabeçalho) */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-xl">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-800">
              Foodie<span className="text-emerald-600">.</span>
            </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                Entrar
              </Link>
              <Link href="/register" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all hover:scale-105">
                Criar Conta
              </Link>
            </div>
          </div>
        </nav>

        {/* 🚀 HERO SECTION (A Dobra Principal) */}
        <main className="pt-32 pb-16 px-6 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

            {/* Lado Esquerdo: Textos */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 font-medium text-sm mb-6 border border-emerald-200/50">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                A revolução do Delivery Próprio
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                O seu restaurante <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">
                com a sua cara.
              </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Crie seu cardápio digital em menos de 2 minutos. Receba pedidos direto no seu Painel, sem pagar taxas abusivas por venda. O link é seu, o cliente é seu.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/register" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl shadow-emerald-600/20 transition-all hover:scale-105">
                  Começar Grátis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="#como-funciona" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium transition-all">
                  Ver Demonstração
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Sem fidelidade</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Setup em 2 min</div>
              </div>
            </div>

            {/* Lado Direito: Ilustração / Mockup Flutuante */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none flex justify-center mt-12 lg:mt-0">
              {/* Círculo de Fundo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-400/20 rounded-full blur-3xl"></div>

              {/* O "Mockup" do Cardápio (Feito em CSS para ser leve) */}
              <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-50 rounded-[1.5rem] overflow-hidden w-[280px] sm:w-[320px] border border-slate-100">
                  {/* Header do Mockup */}
                  <div className="bg-emerald-600 px-6 py-8 text-white relative">
                    <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full border-4 border-slate-50 flex items-center justify-center shadow-sm">
                      🍔
                    </div>
                    <h3 className="font-bold text-lg mb-1">Burger King</h3>
                    <p className="text-emerald-100 text-xs">Aberto até 23h</p>
                  </div>
                  {/* Corpo do Mockup */}
                  <div className="p-6 pt-10 flex flex-col gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                          <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-2xl">
                            {i === 1 ? '🍔' : i === 2 ? '🍟' : '🥤'}
                          </div>
                          <div className="flex-1">
                            <div className="h-4 bg-slate-200 rounded-full w-3/4 mb-2"></div>
                            <div className="h-3 bg-slate-100 rounded-full w-1/2 mb-3"></div>
                            <div className="h-4 bg-emerald-100 rounded-full w-1/4"></div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
  );
}