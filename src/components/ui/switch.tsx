import { useId } from 'react'
import { Switch as SwitchPrimitive } from '@base-ui/react/switch'

import { cn } from '@/lib/utils'

function Switch({
  className,
  label,
  ...props
}: SwitchPrimitive.Root.Props & {
  label?: string
}) {
  const labelId = useId()

  const control = (
    <span data-slot="switch-wrap" className={cn('hp-switch-wrap', className)}>
      <SwitchPrimitive.Root
        data-slot="switch"
        aria-labelledby={label ? labelId : undefined}
        className="hp-switch-control"
        {...props}
      />
      <span className="hp-switch-track" aria-hidden />
    </span>
  )

  if (!label) return control

  return (
    <div className="inline-flex h-fit cursor-pointer items-center gap-3 text-sm text-[#03102f] has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50">
      {control}
      <span
        id={labelId}
        onClick={(event) => {
          event.currentTarget
            .parentElement?.querySelector<HTMLElement>('[data-slot="switch"]')
            ?.click()
        }}
      >
        {label}
      </span>
    </div>
  )
}

export { Switch }
