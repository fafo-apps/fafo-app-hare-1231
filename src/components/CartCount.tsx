"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export default function CartCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const c = getCart();
      setCount(c.reduce((sum, i) => sum + i.quantity, 0));
    };
    update();
    const handler = () => update();
    window.addEventListener("cart-changed", handler as EventListener);
    return () => window.removeEventListener("cart-changed", handler as EventListener);
  }, []);

  if (count <= 0) return <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] rounded-full bg-black/5 dark:bg-white/10">0</span>;
  return (
    <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 text-[10px] rounded-full bg-black text-white dark:bg-white dark:text-black">
      {count}
    </span>
  );
}
