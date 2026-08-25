import { createFileRoute } from '@tanstack/react-router'
import { ClickableOption, ClickableOptionGroup } from '@/components/ui/clickable-option'

export const Route = createFileRoute('/clickable-option')({
  component: ClickableOptionExamplesPage,
})

function ClickableOptionExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">

      <section className="flex flex-col gap-16 px-8 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Default
          </p>
          <ClickableOptionGroup defaultValue="a">
            <ClickableOption value="a" title="Option" description="Description" />
            <ClickableOption value="b" title="Option" description="Description" />
            <ClickableOption value="c" title="Option" description="Description" />
          </ClickableOptionGroup>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Disabled
          </p>
          <ClickableOptionGroup defaultValue="a" disabled>
            <ClickableOption value="a" title="Option" description="Description" />
            <ClickableOption value="b" title="Option" description="Description" />
          </ClickableOptionGroup>
        </div>
      </section>
    </main>
  )
}
