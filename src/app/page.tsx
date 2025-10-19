import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
                Quiet Luxury, Tailored For You
              </h1>
              <p className="text-base text-black/70 dark:text-white/70 max-w-lg">
                Build a timeless wardrobe with refined essentials crafted from the finest materials.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition">
                  Shop the Collection
                </Link>
                <a href="#featured" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition">
                  Explore
                </a>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900" />
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-semibold">Featured</h2>
          <Link href="/products" className="text-sm hover:opacity-80">View all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
