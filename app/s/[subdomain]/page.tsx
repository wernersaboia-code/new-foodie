// Arquivo: app/s/[subdomain]/page.tsx
import prisma from "@/lib/prisma";
import type { Metadata } from 'next';
import { notFound } from "next/navigation";
import { Store } from "lucide-react";
import { StorefrontMenu } from "./StorefrontMenu"; // Chama o arquivo gigante do carrinho!

export async function generateMetadata({
                                         params
                                       }: {
  params: Promise<{ subdomain: string }>;
}): Promise<Metadata> {
  const { subdomain } = await params;

  const restaurant = await prisma.restaurant.findUnique({
    where: { subdomain },
    select: { name: true }
  });

  if (!restaurant) return { title: 'Restaurante não encontrado' };

  return {
    title: `${restaurant.name} | Cardápio Digital`,
    description: `Faça seu pedido online no ${restaurant.name}.`
  };
}

// 👇 ESTE É O "DEFAULT EXPORT" QUE O NEXT.JS ESTAVA SENTINDO FALTA!
export default async function SubdomainPage({
                                              params
                                            }: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;

  const restaurant = await prisma.restaurant.findUnique({
    where: { subdomain },
    include: {
      categories: {
        include: {
          products: {
            where: { isAvailable: true },
            orderBy: { name: "asc" }
          },
        },
        orderBy: { name: "asc" }
      },
    },
  });

  if (!restaurant) {
    notFound();
  }

  return (
      <div className="min-h-screen bg-gray-50 pb-28">
        <div className="bg-emerald-600 h-32 md:h-48 w-full relative"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-12 relative z-10">

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-8 flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm shrink-0">
              <Store className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{restaurant.name}</h1>
              <p className="text-emerald-600 text-sm font-medium mt-1">• Aberto para pedidos</p>
            </div>
          </div>

          {/* Aqui a página "injeta" o visual do carrinho que criamos */}
          <StorefrontMenu categories={restaurant.categories} />

        </div>
      </div>
  );
}