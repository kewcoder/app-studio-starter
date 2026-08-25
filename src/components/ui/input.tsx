import { useRef, useState, type ComponentProps, type ReactNode } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Field } from '@/components/ui/field'

type InputProps = Omit<ComponentProps<'input'>, 'prefix'> & {
  label?: string
  hint?: string
  errorMessage?: string
  hasError?: boolean
  isRequired?: boolean
  isInlineLabel?: boolean
  isReadonly?: boolean
  preFill?: string
  icon?: ReactNode
  trailing?: ReactNode
  leading?: ReactNode
  hasLeadingSeparator?: boolean
  labelIcon?: ReactNode
}

function Input({
  className,
  type = 'text',
  label,
  hint,
  errorMessage,
  hasError,
  isRequired,
  isInlineLabel,
  isReadonly,
  preFill,
  icon,
  trailing,
  leading,
  hasLeadingSeparator = true,
  labelIcon,
  disabled,
  placeholder = 'Placeholder',
  id,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const isPassword = type === 'password'
  const invalid = Boolean(errorMessage || hasError)

  return (
    <Field
      label={isInlineLabel ? undefined : label}
      hint={hint}
      error={errorMessage}
      required={isRequired}
      htmlFor={id}
      labelIcon={labelIcon}
      className={className}
    >
      <div
        data-invalid={invalid || undefined}
        className={cn(
          'hp-input flex cursor-pointer items-center gap-2 px-2',
          isReadonly && 'hp-input-readonly',
          disabled && 'hp-input-disabled',
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {leading ? (
          <div className="flex h-full items-center border-r border-[#e5e6ea] py-2 pr-2">
            {leading}
          </div>
        ) : null}
        {icon ? <span className="size-5 shrink-0 text-[#61667c]">{icon}</span> : null}
        <div className="flex flex-1 items-baseline gap-2">
          {isInlineLabel && label ? (
            <span className="text-[14px] text-[#9295a5]">{label}:</span>
          ) : null}
          <div className="flex w-full items-center gap-1">
            {preFill ? <span className="text-[14px] text-[#9295a5]">{preFill}</span> : null}
            <input
              ref={inputRef}
              id={id}
              data-slot="input"
              type={isPassword && passwordVisible ? 'text' : type}
              readOnly={isReadonly}
              disabled={disabled}
              placeholder={placeholder}
              autoComplete={props.autoComplete ?? 'one-time-code'}
              aria-invalid={invalid || undefined}
              className="h-6 w-full bg-transparent text-[16px] leading-[18px] text-[#03102f] text-ellipsis outline-none placeholder:font-normal placeholder:text-[#9295a5] disabled:text-[#9295a5] md:text-[14px]"
              onFocus={onFocus}
              onBlur={onBlur}
              {...props}
            />
          </div>
        </div>
        {trailing || isPassword ? (
          <div className="flex h-full items-center">
            {hasLeadingSeparator ? (
              <span className="h-full border-l border-[#e5e6ea] py-3 pl-2" />
            ) : null}
            {trailing ?? (
              <button
                type="button"
                className="text-[#cbcdd4]"
                onClick={(event) => {
                  event.preventDefault()
                  setPasswordVisible((visible) => !visible)
                }}
              >
                {passwordVisible ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
              </button>
            )}
          </div>
        ) : null}
      </div>
    </Field>
  )
}

export { Input }
