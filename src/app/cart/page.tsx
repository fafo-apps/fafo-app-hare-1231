"use client";

import { useEffect, useMemo, useState } from "react";
import { clearCart, getCart, removeFromCart, updateQuantity } from "@/lib/cart";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/money";

type CartItem = { productId: string; quantity: number };
type DetailedCartItem = CartItem & { product: Product };

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  const detailed = useMemo<DetailedCartItem[]>(() => {
    const withMaybeProduct = items.map((i) => ({
      ...i,
      product: products.find((p) => p.id === i.productId),
    }));
    const isDetailed = (x: CartItem & { product?: Product }): x is DetailedCartItem => Boolean(x.product);
    return withMaybeProduct.filter(isDetailed);
  }, [items]);

  const subtotal = detailed.reduce((sum, i) => sum + i.quantity * i.product.priceCents, 0);
  const currency = detailed[0]?.product?.currency ?? "USD";

  useEffect(() => {
    const load = () => setItems(getCart());
    load();
    const handler = () => load();
    window.addEventListener("cart-changed", handler as EventListener);
    return () => window.removeEventListener("cart-changed", handler as EventListener);
  }, []);

  const hasItems = detailed.length > 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Your Bag</h1>

      {!hasItems && (
        <p className="text-sm text-black/70 dark:text-white/70">Your bag is empty.</p>
      )}

      {hasItems && (
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {detailed.map((line) => (
              <div key={line.productId} className="flex items-start gap-4">
                <div className="w-28 h-36 rounded-md bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900" />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium">{line.product.name}</div>
                      <div className="text-sm text-black/70 dark:text-white/70">{formatPrice(line.product.priceCents, line.product.currency)}</div>
                    </div>
                    <button onClick={() => removeFromCart(line.productId)} className="text-xs opacity-70 hover:opacity-100">Remove</button>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <button onClick={() => updateQuantity(line.productId, Math.max(0, line.quantity - 1))} className="w-7 h-7 rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">-</button>
                    <span className="min-w-6 text-center text-sm">{line.quantity}</span>
                    <button onClick={() => updateQuantity(line.productId, line.quantity + 1)} className="w-7 h-7 rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-lg border border-black/10 dark:border-white/10 p-5 h-fit">
            <h2 className="text-sm font-medium uppercase tracking-wider text-black/60 dark:text-white/60">Summary</h2>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal, currency)}</span>
            </div>
            <p className="mt-2 text-xs text-black/60 dark:text-white/60">Taxes and shipping calculated at checkout.</p>
            <button onClick={() => alert("Checkout coming soon. We’ll enable secure payments next.")} className="mt-5 w-full inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition">
              Proceed to Checkout
            </button>
            <button onClick={() => clearCart()} className="mt-3 w-full text-xs opacity-70 hover:opacity-100">Clear bag</button>
          </aside>
        </div>
      )}
    </div>
  );
}
