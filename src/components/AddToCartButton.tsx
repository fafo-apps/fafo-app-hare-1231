"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";

export default function AddToCartButton({ productId }: { productId: string }) {
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    setAdding(true);
    addToCart(productId, 1);
    setAdding(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={onAdd}
      disabled={adding}
      className="mt-6 inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-50 transition"
    >
      {added ? "Added" : adding ? "Adding…" : "Add to Bag"}
    </button>
  );
}
