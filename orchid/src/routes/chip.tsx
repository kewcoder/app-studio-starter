import { createFileRoute } from '@tanstack/react-router'
import { CircleIcon } from 'lucide-react'
import { Chip, UserChip } from '@/components/ui/chip'

export const Route = createFileRoute('/chip')({
  component: ChipExamplesPage,
})

const COLORS = [
  'Blue',
  'Purple',
  'Orange',
  'Red',
  'LightRed',
  'White',
  'DarkBlue',
  'Grey',
  'Tosca',
  'Green',
] as const

const TYPES = ['Background', 'Border', 'Transparent'] as const

function ChipExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">

      <section className="flex flex-col gap-16 px-8 py-12">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Global Chip
          </p>
          <div className="flex flex-col gap-4">
            {COLORS.map((color) => (
              <div key={color} className="flex flex-wrap items-center gap-3">
                {TYPES.map((type) => (
                  <Chip key={type} color={color} type={type}>
                    Text
                  </Chip>
                ))}
                <Chip color={color} icon={<CircleIcon />}>
                  Text
                </Chip>
                <Chip color={color} onRemove={() => {}}>
                  Text
                </Chip>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            User Type Chip
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <UserChip type="Owner" />
            <UserChip type="Admin" />
            <UserChip type="Manager" />
            <UserChip type="Cashier" />
          </div>
        </div>
      </section>
    </main>
  )
}
