import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Field } from '@/components/ui/field'

type TextareaProps = ComponentProps<'textarea'> & {
  label?: string
  hint?: string
  errorMessage?: string
  isRequired?: boolean
  labelIcon?: ReactNode
}

function Textarea({
  className,
  label,
  hint,
  errorMessage,
  isRequired,
  labelIcon,
  disabled,
  placeholder = 'Placeholder',
  id,
  rows = 3,
  ...props
}: TextareaProps) {
  const invalid = Boolean(errorMessage)

  return (
    <Field
      label={label}
      hint={hint}
      error={errorMessage}
      required={isRequired}
      htmlFor={id}
      labelIcon={labelIcon}
      className={className}
    >
      <textarea
        id={id}
        data-slot="textarea"
        data-invalid={invalid || undefined}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          'hp-input hp-textarea w-full px-2 py-2 text-[14px] leading-[18px] text-[#03102f] outline-none placeholder:text-[#9295a5]',
          disabled && 'hp-input-disabled',
        )}
        {...props}
      />
    </Field>
  )
}

export { Textarea }
