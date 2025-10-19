import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/money";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="aspect-[4/5] w-full rounded-md bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 flex items-end p-4 overflow-hidden">
        <span className="text-xs uppercase tracking-widest bg-white/70 dark:bg-black/30 backdrop-blur px-2 py-1 rounded">
          {product.badge ?? "New"}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm font-medium">{product.name}</div>
        <div className="text-sm text-black/70 dark:text-white/70">{formatPrice(product.priceCents, product.currency)}</div>
      </div>
    </Link>
  );
}
