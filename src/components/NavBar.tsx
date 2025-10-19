import Link from "next/link";
import CartCount from "@/components/CartCount";

export default function NavBar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl tracking-wide font-semibold">
          Your Luxury Brand
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/products" className="hover:opacity-80 transition">Shop</Link>
          <Link href="/cart" className="hover:opacity-80 transition flex items-center gap-2">
            <span>Bag</span>
            <CartCount />
          </Link>
        </nav>
      </div>
    </header>
  );
}
