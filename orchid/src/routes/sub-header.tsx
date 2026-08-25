import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Chip } from '@/components/ui/chip'
import { PageTitle } from '@/components/ui/page-title'
import { SubHeader } from '@/components/ui/sub-header'

export const Route = createFileRoute('/sub-header')({
  component: SubHeaderExamplesPage,
})

function SubHeaderExamplesPage() {
  return (
    <main className="bg-background">

      <section className="space-y-16 px-8 py-12">
        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Back
          </p>
          <div className="space-y-4">
            <SubHeader
              left="Back"
              actions={
                <>
                  <Button type="Secondary" style="Border" size="Default">
                    Cancel
                  </Button>
                  <Button type="Primary" size="Default">
                    Save
                  </Button>
                </>
              }
            />
            <PageTitle
              title="Payment details"
              description="Review this transaction before you continue."
              chip={<Chip color="Green">Paid</Chip>}
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Close
          </p>
          <SubHeader
            left="Close"
            actions={
              <Button type="Primary" size="Default">
                Done
              </Button>
            }
          />
        </div>
      </section>
    </main>
  )
}
