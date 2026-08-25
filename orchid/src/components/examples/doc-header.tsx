import { Link } from '@tanstack/react-router'

export function DocHeader({ crumb }: { crumb: string }) {
  return (
    <header className="flex items-center justify-between bg-black px-6 py-4 text-white">
      <div className="flex items-baseline gap-2">
        <Link to="/" className="text-sm text-white/60 hover:text-white">
          Orchid UI
        </Link>
        <span className="text-sm text-white/40">→</span>
        <h1 className="text-sm font-semibold">{crumb}</h1>
      </div>
      <p className="text-sm font-medium">HitPay</p>
    </header>
  )
}
