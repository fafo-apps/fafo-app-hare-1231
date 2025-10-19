export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4 sm:flex sm:items-center sm:justify-between text-sm text-black/70 dark:text-white/70">
        <p>© {new Date().getFullYear()} Your Luxury Brand. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:opacity-80" href="#">Privacy</a>
          <a className="hover:opacity-80" href="#">Terms</a>
          <a className="hover:opacity-80" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
