import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  labelIcon,
  errorId,
  hintId,
  className,
  children,
}: {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  htmlFor?: string
  labelIcon?: ReactNode
  errorId?: string
  hintId?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('flex w-full flex-col gap-1', className)}>
      {label ? (
        <Label htmlFor={htmlFor} className="hp-field-label gap-2">
          <span className="flex items-center gap-1">
            {label}
            {required ? <span className="text-[#dc3545]">*</span> : null}
          </span>
          {labelIcon}
        </Label>
      ) : null}
      {children}
      {error ? (
        <p id={errorId} className="hp-field-error" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="hp-field-hint">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export { Field }
