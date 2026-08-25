import { createFileRoute } from '@tanstack/react-router'
import { DocHeader } from '@/components/examples/doc-header'
import { ProgressBar } from '@/components/ui/progress-bar'

export const Route = createFileRoute('/progress-bar')({
  component: ProgressBarExamplesPage,
})

function ProgressBarExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">
      <DocHeader crumb="Progress Bar" />

      <section className="flex flex-col gap-12 px-8 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Default
          </p>
          <ProgressBar size="Default" value={70} max={100} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Small
          </p>
          <ProgressBar size="Small" value={70} max={100} />
        </div>
      </section>
    </main>
  )
}
