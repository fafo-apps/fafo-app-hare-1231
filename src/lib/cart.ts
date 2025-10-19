export type CartItem = { productId: string; quantity: number };

const KEY = "luxury_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as CartItem[];
    return [];
  } catch {
    return [];
  }
}

export function setCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart-changed"));
}

export function addToCart(productId: string, quantity = 1) {
  const items = getCart();
  const idx = items.findIndex((i) => i.productId === productId);
  if (idx === -1) items.push({ productId, quantity });
  else items[idx].quantity += quantity;
  setCart(items);
}

export function updateQuantity(productId: string, quantity: number) {
  let items = getCart();
  items = items
    .map((i) => (i.productId === productId ? { ...i, quantity } : i))
    .filter((i) => i.quantity > 0);
  setCart(items);
}

export function removeFromCart(productId: string) {
  const items = getCart().filter((i) => i.productId !== productId);
  setCart(items);
}

export function clearCart() {
  setCart([]);
}
