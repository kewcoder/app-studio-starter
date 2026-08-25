import { createFileRoute } from '@tanstack/react-router'
import { DocExamplePage } from '@/components/doc/doc-example-page'
import { DatePicker } from '@/components/ui/date-picker'

export const Route = createFileRoute('/date-picker')({
  component: DatePickerExamplesPage,
})

const selected = new Date(2023, 9, 12)
const disabled = [{ from: new Date(2023, 9, 22), to: new Date(2023, 9, 26) }]

function DatePickerExamplesPage() {
  return (
    <DocExamplePage to="/date-picker">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Default
          </p>
          <DatePicker defaultSelected={selected} />
        </div>

        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Range
          </p>
          <DatePicker
            mode="range"
            defaultRange={{ from: new Date(2023, 9, 8), to: new Date(2023, 9, 14) }}
          />
        </div>

        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Disabled dates
          </p>
          <DatePicker defaultSelected={selected} disabled={disabled} />
        </div>

        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Inline
          </p>
          <DatePicker defaultSelected={selected} showFooter={false} className="shadow-none" />
        </div>
      </div>
    </DocExamplePage>
  )
}
