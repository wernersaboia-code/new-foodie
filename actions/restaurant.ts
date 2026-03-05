// Arquivo: actions/restaurant.ts
"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type FormState = {
    error?: string;
    success?: boolean;
};

export async function registerRestaurant(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const name = formData.get("name") as string;
    let subdomain = formData.get("subdomain") as string;

    if (!name || !subdomain) {
        return { error: "Nome e Subdomínio são obrigatórios." };
    }

    subdomain = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, "");

    try {
        const existingRestaurant = await prisma.restaurant.findUnique({
            where: { subdomain },
        });

        if (existingRestaurant) {
            return { error: "Este subdomínio já está em uso. Escolha outro." };
        }

        const restaurant = await prisma.restaurant.create({
            data: {
                name,
                subdomain,
            },
        });

        // 👇 Correção do Next.js 15: await no cookies()
        const cookieStore = await cookies();
        cookieStore.set("restaurantId", restaurant.id);

    } catch (error) {
        console.error("Erro ao registrar restaurante:", error);
        return { error: "Ocorreu um erro interno ao criar sua conta. Tente novamente." };
    }

    redirect("/dashboard");
}