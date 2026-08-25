import { useState } from 'react'
import { Slider as SliderPrimitive } from '@base-ui/react/slider'

import { cn } from '@/lib/utils'

function toNumber(value: number | readonly number[] | undefined, fallback: number) {
  if (typeof value === 'number') return value
  if (Array.isArray(value) && typeof value[0] === 'number') return value[0]
  return fallback
}

function Slider({
  className,
  defaultValue = 50,
  value,
  min = 0,
  max = 100,
  showIndicator = true,
  showRange = true,
  onValueChange,
  onValueCommitted,
  ...props
}: SliderPrimitive.Root.Props<number> & {
  showIndicator?: boolean
  showRange?: boolean
}) {
  const [internal, setInternal] = useState(toNumber(defaultValue, 50))
  const [dragging, setDragging] = useState(false)
  const current = value !== undefined ? toNumber(value, internal) : internal

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      data-dragging={dragging || undefined}
      min={min}
      max={max}
      value={value}
      defaultValue={defaultValue}
      className={cn('flex w-full flex-col gap-1', className)}
      onValueChange={(next, details) => {
        setInternal(toNumber(next, current))
        setDragging(details.reason === 'drag')
        onValueChange?.(next, details)
      }}
      onValueCommitted={(next, details) => {
        setDragging(false)
        onValueCommitted?.(next, details)
      }}
      {...props}
    >
      <SliderPrimitive.Control className="flex w-full touch-none items-center py-1.5 select-none">
        <SliderPrimitive.Track className="relative h-2 w-full rounded-2xl bg-neutral-soft">
          <SliderPrimitive.Indicator className="rounded-2xl bg-primary" />
          <SliderPrimitive.Thumb className="relative flex size-5 items-center justify-center rounded-full bg-background shadow-[0_1px_3px_rgba(0,0,0,0.1),0_3px_22px_rgba(38,42,50,0.09)] outline-none">
            <span className="size-2.5 rounded-full bg-primary" />
            {showIndicator && dragging ? (
              <span className="absolute top-full mt-1 rounded px-1.5 py-0.5 text-xs font-medium leading-5 whitespace-nowrap text-primary-foreground bg-foreground">
                {current}
              </span>
            ) : null}
          </SliderPrimitive.Thumb>
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
      {showRange ? (
        <div className="flex w-full items-center justify-between text-sm leading-[1.5] text-foreground">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      ) : null}
    </SliderPrimitive.Root>
  )
}

export { Slider }
