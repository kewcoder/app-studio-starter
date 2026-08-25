import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { InputStepper } from '@/components/ui/input-stepper'

export const Route = createFileRoute('/input-stepper')({
  component: InputStepperExamplesPage,
})

function InputStepperExamplesPage() {
  const [value, setValue] = useState(1)

  return (
    <main className="min-h-dvh overflow-auto bg-background">

      <section className="flex flex-col gap-12 px-8 py-12">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Default — click the number to type
          </p>
          <InputStepper value={value} min={0} max={99} onValueChange={setValue} />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Uncontrolled
          </p>
          <InputStepper defaultValue={3} min={1} max={10} />
        </div>
      </section>
    </main>
  )
}
