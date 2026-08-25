import { createFileRoute, Link } from '@tanstack/react-router'
import { DocHeader } from '@/components/examples/doc-header'

export const Route = createFileRoute('/examples/')({
  component: ExamplesIndexPage,
})

const COMPONENTS = [
  {
    to: '/examples/button' as const,
    name: 'Button',
    description: 'Type, Style, Size, Default/Disabled, icon-only, and additional action.',
  },
  {
    to: '/examples/dropdown' as const,
    name: 'Dropdown',
    description: 'Item states and grouped or ungrouped menus.',
  },
  {
    to: '/examples/snackbar' as const,
    name: 'Snack Bar',
    description: 'Small/Default as floating toasts; Big with close and actions.',
  },
]

function ExamplesIndexPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">
      <DocHeader crumb="Examples" />

      <section className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-8">
        {COMPONENTS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:bg-muted"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
            </div>
            <span className="text-sm text-primary">Open</span>
          </Link>
        ))}
      </section>
    </main>
  )
}
