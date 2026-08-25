import { useId } from 'react'
import { Check, Minus } from 'lucide-react'
import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'

import { cn } from '@/lib/utils'

function Checkbox({
  className,
  label,
  ...props
}: CheckboxPrimitive.Root.Props & {
  label?: string
}) {
  const labelId = useId()

  const control = (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      aria-labelledby={label ? labelId : undefined}
      className={cn('hp-checkbox peer', className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center"
      >
        <Check className="hp-checkbox-check size-4 text-white" />
        <Minus className="hp-checkbox-minus size-4 text-[#2465de]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )

  if (!label) return control

  return (
    <div className="inline-flex cursor-pointer items-center gap-3 text-sm text-[#03102f] has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50">
      {control}
      <span
        id={labelId}
        onClick={(event) => {
          event.currentTarget
            .parentElement?.querySelector<HTMLElement>('[data-slot="checkbox"]')
            ?.click()
        }}
      >
        {label}
      </span>
    </div>
  )
}

export { Checkbox }
