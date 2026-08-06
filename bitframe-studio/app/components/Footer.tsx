export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-600 text-xs border-t border-zinc-900 py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Bitframe Design Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-zinc-400 cursor-pointer">Twitter</span>
          <span className="hover:text-zinc-400 cursor-pointer">Dribbble</span>
          <span className="hover:text-zinc-400 cursor-pointer">LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}
