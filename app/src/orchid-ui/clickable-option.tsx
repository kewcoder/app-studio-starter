import type { ReactNode } from 'react'
import { Radio as RadioPrimitive } from '@base-ui/react/radio'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'

import { cn } from '@/lib/utils'

function ClickableOptionGroup({
  className,
  ...props
}: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="clickable-option-group"
      className={cn('flex w-full flex-col gap-3', className)}
      {...props}
    />
  )
}

function ClickableOption({
  className,
  title,
  description,
  icon,
  children,
  ...props
}: RadioPrimitive.Root.Props & {
  title?: string
  description?: string
  icon?: ReactNode
}) {
  return (
    <RadioPrimitive.Root
      data-slot="clickable-option"
      className={cn(
        'group/clickable-option flex w-full cursor-pointer items-start gap-3 rounded-lg border border-solid border-border bg-background px-4 py-3 text-left outline-none',
        'hover:shadow-[0_3px_11px_rgba(38,42,50,0.09)]',
        'data-checked:border-2 data-checked:border-primary',
        'data-disabled:pointer-events-none data-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <span
        data-slot="clickable-option-control"
        className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-solid border-neutral-border bg-background shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1.5px_1.5px_rgba(0,0,0,0.09)] group-data-checked/clickable-option:border-primary group-data-checked/clickable-option:border-[5px]"
      >
        <RadioPrimitive.Indicator className="sr-only" />
      </span>
      {icon ? (
        <span className="inline-flex size-5 shrink-0 items-center justify-center [&_svg]:size-5">
          {icon}
        </span>
      ) : null}
      {children ?? (
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          {title ? (
            <span className="text-sm font-medium leading-[1.5] text-foreground">{title}</span>
          ) : null}
          {description ? (
            <span className="text-xs leading-[1.5] text-muted-foreground">{description}</span>
          ) : null}
        </span>
      )}
    </RadioPrimitive.Root>
  )
}

export { ClickableOption, ClickableOptionGroup }
