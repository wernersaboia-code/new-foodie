// Arquivo: app/s/[subdomain]/StorefrontMenu.tsx
"use client";

import { useState } from "react";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";

// 👇 O SEGREDO ESTÁ AQUI: Avisamos que description pode ser "string | null"
type Product = {
    id: string;
    name: string;
    description: string | null;
    price: number;
    imageUrl?: string | null;
};

type Category = {
    id: string;
    name: string;
    products: Product[];
};

type CartItem = {
    product: Product;
    quantity: number;
};

export function StorefrontMenu({ categories }: { categories: Category[] }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.product.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => {
            return prev
                .map((item) =>
                    item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0);
        });
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    return (
        <>
            <div className="space-y-8">
                {categories.map((category) => {
                    if (category.products.length === 0) return null;

                    return (
                        <div key={category.id}>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {category.products.map((product) => {
                                    const cartItem = cart.find((item) => item.product.id === product.id);
                                    const quantity = cartItem?.quantity || 0;

                                    return (
                                        <div
                                            key={product.id}
                                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between gap-4 hover:border-emerald-500 transition-colors"
                                        >
                                            <div className="flex justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                                                    {/* Tratamos o null aqui também */}
                                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                        {product.description || ""}
                                                    </p>
                                                    <p className="text-emerald-600 font-semibold mt-2">
                                                        R$ {product.price.toFixed(2).replace(".", ",")}
                                                    </p>
                                                </div>
                                                <div className="w-24 h-24 bg-gray-50 border border-gray-100 rounded-lg shrink-0 flex items-center justify-center">
                                                    <span className="text-xs text-gray-400">Sem foto</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-end mt-2">
                                                {quantity === 0 ? (
                                                    <button
                                                        onClick={() => addToCart(product)}
                                                        className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-emerald-100 transition-colors"
                                                    >
                                                        Adicionar
                                                    </button>
                                                ) : (
                                                    <div className="flex items-center gap-3 bg-emerald-50 rounded-lg p-1">
                                                        <button
                                                            onClick={() => removeFromCart(product.id)}
                                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-emerald-600 shadow-sm"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="font-medium w-4 text-center">{quantity}</span>
                                                        <button
                                                            onClick={() => addToCart(product)}
                                                            className="w-8 h-8 flex items-center justify-center bg-emerald-600 rounded-md text-white shadow-sm"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {totalItems > 0 && !isCartOpen && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40 animate-in slide-in-from-bottom-10">
                    <div className="max-w-3xl mx-auto">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="w-full bg-emerald-600 text-white p-4 rounded-xl font-bold flex items-center justify-between hover:bg-emerald-700 transition-colors shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-emerald-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                                    {totalItems}
                                </div>
                                <span>Ver Carrinho</span>
                            </div>
                            <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                        </button>
                    </div>
                </div>
            )}

            {isCartOpen && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in">
                    <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right">

                        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5 text-emerald-600" />
                                Seu Pedido
                            </h2>
                            <button onClick={() => setIsCartOpen(false)} className="p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                    <ShoppingCart className="w-12 h-12 mb-2 opacity-50" />
                                    <p>Seu carrinho está vazio.</p>
                                </div>
                            ) : (
                                <ul className="space-y-4">
                                    {cart.map((item) => (
                                        <li key={item.product.id} className="flex justify-between items-center py-2 border-b border-gray-50">
                                            <div>
                                                <p className="font-medium text-gray-900">{item.product.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    R$ {item.product.price.toFixed(2).replace(".", ",")}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                                <button onClick={() => removeFromCart(item.product.id)} className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-red-500">
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                                                <button onClick={() => addToCart(item.product)} className="w-7 h-7 flex items-center justify-center bg-emerald-600 rounded shadow-sm text-white">
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <div className="flex justify-between items-center mb-4 text-lg font-bold">
                                    <span>Total</span>
                                    <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                                </div>
                                <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg">
                                    Finalizar Pedido
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}