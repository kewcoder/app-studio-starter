import { useId } from 'react'
import { Radio as RadioPrimitive } from '@base-ui/react/radio'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'

import { cn } from '@/lib/utils'
import { Field } from '@/components/ui/field'

function RadioGroup({
  className,
  label,
  hint,
  errorMessage,
  orientation = 'vertical',
  id,
  ...props
}: Omit<RadioGroupPrimitive.Props, 'className'> & {
  className?: string
  label?: string
  hint?: string
  errorMessage?: string
  orientation?: 'vertical' | 'horizontal'
}) {
  const generatedId = useId()
  const groupId = id ?? generatedId
  const errorId = useId()
  const invalid = Boolean(errorMessage)

  return (
    <Field
      label={label}
      hint={hint}
      error={errorMessage}
      errorId={invalid ? errorId : undefined}
      htmlFor={label ? groupId : undefined}
      className={className}
    >
      <RadioGroupPrimitive
        id={groupId}
        data-slot="radio-group"
        data-invalid={invalid || undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? errorId : undefined}
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-wrap gap-x-5 gap-y-3' : 'flex-col gap-3',
        )}
        {...props}
      />
    </Field>
  )
}

function RadioGroupItem({
  className,
  label,
  disabled,
  ...props
}: RadioPrimitive.Root.Props & {
  label?: string
}) {
  const control = (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      disabled={disabled}
      className={cn('hp-radio', className)}
      {...props}
    >
      <RadioPrimitive.Indicator data-slot="radio-group-indicator" className="sr-only" />
    </RadioPrimitive.Root>
  )

  if (!label) return control

  return (
    <label
      className={cn(
        'inline-flex w-fit cursor-pointer items-center gap-3 text-sm text-[#03102f]',
        disabled && 'cursor-not-allowed text-[#9295a5]',
      )}
    >
      {control}
      <span>{label}</span>
    </label>
  )
}

export { RadioGroup, RadioGroupItem }
