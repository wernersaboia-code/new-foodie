import Link from "next/link";
import { ArrowLeft, Store, Globe, UtensilsCrossed } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans selection:bg-emerald-200">

            {/* Botão Voltar */}
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para Home
                </Link>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="bg-emerald-600 p-3 rounded-2xl shadow-lg shadow-emerald-600/20">
                        <UtensilsCrossed className="w-8 h-8 text-white" />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
                    Crie seu cardápio digital
                </h2>
                <p className="mt-2 text-center text-sm text-slate-600">
                    Leva menos de 2 minutos. Comece a vender hoje.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">

                    <form className="space-y-6" action="#">

                        {/* Nome do Restaurante */}
                        <div>
                            <label htmlFor="restaurantName" className="block text-sm font-semibold text-slate-700">
                                Nome do Restaurante
                            </label>
                            <div className="mt-2 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Store className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    name="restaurantName"
                                    id="restaurantName"
                                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-slate-200 rounded-xl py-3 bg-slate-50 outline-none transition-all"
                                    placeholder="Ex: Burger King"
                                    required
                                />
                            </div>
                        </div>

                        {/* O Subdomínio Mágico */}
                        <div>
                            <label htmlFor="subdomain" className="block text-sm font-semibold text-slate-700">
                                O Link do seu Cardápio
                            </label>
                            <div className="mt-2 relative flex items-stretch flex-grow focus-within:z-10 rounded-xl shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Globe className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    name="subdomain"
                                    id="subdomain"
                                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-slate-200 rounded-l-xl py-3 bg-slate-50 outline-none transition-all"
                                    placeholder="burgerking"
                                    required
                                />
                                <div className="flex items-center bg-slate-100 border border-l-0 border-slate-200 rounded-r-xl px-4 text-sm text-slate-500 font-medium">
                                    .foodie.com
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                                Seus clientes usarão este link para acessar seu restaurante.
                            </p>
                        </div>

                        {/* Botão de Submit */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md shadow-emerald-600/20 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all hover:scale-[1.02]"
                            >
                                Criar Meu Restaurante
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}