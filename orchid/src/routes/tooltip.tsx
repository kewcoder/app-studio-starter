import { createFileRoute } from '@tanstack/react-router'
import { DocHeader } from '@/components/examples/doc-header'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const Route = createFileRoute('/tooltip')({
  component: TooltipExamplesPage,
})

function Tip({
  side,
  label,
}: {
  side: 'top' | 'bottom' | 'left' | 'right'
  label: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        nativeButton
        className="inline-flex w-fit"
        render={
          <Button type="Secondary" size="Small">
            {label}
          </Button>
        }
      />
      <TooltipContent side={side}>Tooltip</TooltipContent>
    </Tooltip>
  )
}

function TooltipExamplesPage() {
  return (
    <TooltipProvider>
      <main className="min-h-dvh overflow-auto bg-background">
        <DocHeader crumb="Tooltip" />

        <section className="flex flex-col gap-16 px-8 py-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Placement
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Tip side="top" label="Top" />
              <Tip side="bottom" label="Bottom" />
              <Tip side="left" label="Left" />
              <Tip side="right" label="Right" />
            </div>
          </div>
        </section>
      </main>
    </TooltipProvider>
  )
}
