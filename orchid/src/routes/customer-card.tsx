import { createFileRoute } from '@tanstack/react-router'
import { DocHeader } from '@/components/examples/doc-header'
import { CustomerCard, type CustomerCardData } from '@/components/ui/customer-card'

export const Route = createFileRoute('/customer-card')({
  component: CustomerCardExamplesPage,
})

const CUSTOMER: CustomerCardData = {
  name: 'Alex Turner',
  email: 'alex@arcticmonkey.io',
  phone_number: '8373 3739',
  phone_number_country_code: '65',
  address: {
    street: '123 Main Street',
    city: 'Pennsylvania',
    state: 'Pennsylvania',
    postal_code: '12345',
    country: 'USA',
  },
}

const BENEFICIARY: CustomerCardData = {
  name: 'Alex Turner',
  email: 'alex@arcticmonkey.io',
  currency: 'SGD',
  bank_name: 'DBS Bank',
  bank_account_number: '**** 1234',
}

function CustomerCardExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">
      <DocHeader crumb="Customer Card" />

      <section className="flex flex-col gap-16 px-8 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Small
          </p>
          <CustomerCard variant="Small" customer={CUSTOMER} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Big
          </p>
          <CustomerCard variant="Big" customer={CUSTOMER} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Float
          </p>
          <CustomerCard variant="Float" customer={CUSTOMER} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Empty
          </p>
          <CustomerCard variant="Big" />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Beneficiary
          </p>
          <div className="flex flex-col gap-4">
            <CustomerCard variant="Small" beneficiary customer={BENEFICIARY} />
            <CustomerCard variant="Big" beneficiary customer={BENEFICIARY} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Edit and close
          </p>
          <div className="flex flex-col gap-4">
            <CustomerCard variant="Small" customer={CUSTOMER} edit hover />
            <CustomerCard variant="Small" customer={CUSTOMER} closable />
          </div>
        </div>
      </section>
    </main>
  )
}
