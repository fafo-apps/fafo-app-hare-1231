import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/money";
import AddToCartButton from "@/components/AddToCartButton";
import { notFound } from "next/navigation";

type Params = { slug: string };

export default async function ProductDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-2">
      <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900" />
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="mt-2 text-lg text-black/80 dark:text-white/80">{formatPrice(product.priceCents, product.currency)}</div>
        <p className="mt-6 text-sm leading-6 text-black/70 dark:text-white/70 max-w-prose">{product.description}</p>
        <AddToCartButton productId={product.id} />
        <div className="mt-10">
          <h2 className="text-sm font-medium tracking-wider uppercase text-black/60 dark:text-white/60">Details</h2>
          <ul className="mt-3 text-sm list-disc list-inside text-black/70 dark:text-white/70">
            <li>Premium materials and timeless construction</li>
            <li>Made for longevity and daily wear</li>
            <li>Dry clean preferred</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
