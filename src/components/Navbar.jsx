import { useState } from 'react';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';

export default function Navbar({ theme, onThemeToggle, solid }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'border-b border-black/10 bg-white/86 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-ink/82' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/#home" className="flex items-center gap-3 font-display text-lg font-semibold text-zinc-950 dark:text-white" aria-label="Saqlain Ashraf Khan home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white text-sm shadow-sm dark:border-white/10 dark:bg-white/10">SK</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={`/${item.href}`} className="rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 lg:hidden" aria-label="Toggle navigation menu" aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
          <button onClick={onThemeToggle} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15" aria-label="Toggle dark and light mode">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={profile.resume} className="inline-flex h-10 items-center gap-2 rounded-full bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-ink dark:hover:bg-zinc-200">
            <Download size={16} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </nav>
      {open && (
        <div className="mx-auto max-w-6xl px-5 pb-4 lg:hidden">
          <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-lg dark:border-white/10 dark:bg-zinc-950">
            {navItems.map((item) => (
              <a key={item.href} href={`/${item.href}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
