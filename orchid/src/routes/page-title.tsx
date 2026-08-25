import { createFileRoute } from '@tanstack/react-router'
import { Chip } from '@/components/ui/chip'
import { PageTitle } from '@/components/ui/page-title'

export const Route = createFileRoute('/page-title')({
  component: PageTitleExamplesPage,
})

function PageTitleExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">

      <section className="flex flex-col gap-16 px-8 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Default
          </p>
          <PageTitle title="Payments" description="Track incoming and outgoing payments." />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Chip and copy
          </p>
          <PageTitle
            title="INV-2048"
            description="https://pay.hitpayapp.com/inv-2048"
            chip={<Chip color="Green">Paid</Chip>}
            copyValue="https://pay.hitpayapp.com/inv-2048"
          />
        </div>
      </section>
    </main>
  )
}
