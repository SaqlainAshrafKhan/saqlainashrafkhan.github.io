import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import heroImage from '../assets/product-system-hero.png';

export default function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[520px]"
      aria-hidden="true"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-mint/10 blur-3xl dark:bg-mint/15" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/80 p-4 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-white/8">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-zinc-950 text-white shadow-line dark:border-white/10">
          <img
            src={heroImage}
            alt=""
            className="aspect-[4/3] h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/55 px-4 py-3 backdrop-blur-xl">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-coral" />
              <span className="h-3 w-3 rounded-full bg-signal" />
              <span className="h-3 w-3 rounded-full bg-mint" />
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">product.system</span>
          </div>
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/15 bg-white/90 p-4 text-ink shadow-lg backdrop-blur-xl">
            <div>
              <p className="text-sm font-semibold">AI-assisted delivery</p>
              <p className="text-xs text-zinc-500">Planning, build, review, docs</p>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-signal">
              <Sparkles size={18} />
            </span>
          </div>
        </div>
        <div className="absolute right-8 top-20 hidden rounded-2xl border border-black/10 bg-white p-3 shadow-lg dark:border-white/10 dark:bg-zinc-900 sm:block">
          <ArrowUpRight className="text-coral" size={22} />
        </div>
      </div>
    </motion.div>
  );
}
