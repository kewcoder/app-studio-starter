import { useRef, useState } from 'react'
import { Check, ChevronDown, Minus, Search, X } from 'lucide-react'
import { Select as SelectPrimitive } from '@base-ui/react/select'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Field } from '@/components/ui/field'

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

type SelectShared = {
  options: SelectOption[]
  label?: string
  hint?: string
  errorMessage?: string
  placeholder?: string
  searchPlaceholder?: string
  disabled?: boolean
  readOnly?: boolean
  isRequired?: boolean
  isClearable?: boolean
  isFilterable?: boolean
  id?: string
  className?: string
}

type SingleSelectProps = SelectShared & {
  multiple?: false
  value?: string | null
  defaultValue?: string | null
  onValueChange?: (value: string | null) => void
  isSelectAll?: never
}

type MultiSelectProps = SelectShared & {
  multiple: true
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  isSelectAll?: boolean
}

function matchesQuery(label: string, query: string) {
  const keywords = query.toLowerCase().trim().replace(/\s+/g, ' ')
  if (!keywords) return true
  return label.toLowerCase().trim().replace(/\s+/g, ' ').includes(keywords)
}

function OptionCheck({
  selected,
  partial,
}: {
  selected: boolean
  partial?: boolean
}) {
  return (
    <span
      className={cn(
        'flex size-5 shrink-0 items-center justify-center rounded-sm border',
        selected && !partial && 'border-[#2465de] bg-[#2465de]',
        partial && 'border-[#2465de] bg-[#ccdefe]',
        !selected && !partial && 'border-[#a6b3cd] bg-white',
      )}
    >
      {partial ? (
        <Minus className="size-3.5 text-[#2465de]" />
      ) : selected ? (
        <Check className="size-3.5 text-white" />
      ) : null}
    </span>
  )
}

function Select(props: SingleSelectProps | MultiSelectProps) {
  const {
    options,
    label,
    hint,
    errorMessage,
    placeholder = 'Placeholder',
    searchPlaceholder = 'Search',
    disabled,
    readOnly,
    isRequired,
    isClearable,
    isFilterable,
    id,
    className,
  } = props
  const multiple = props.multiple === true
  const invalid = Boolean(errorMessage)
  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const isControlled = props.value !== undefined
  const [uncontrolledSingle, setUncontrolledSingle] = useState<string | null>(
    multiple ? null : (props.defaultValue ?? null),
  )
  const [uncontrolledMulti, setUncontrolledMulti] = useState<string[]>(
    multiple ? (props.defaultValue ?? []) : [],
  )
  const selectedSingle = isControlled
    ? (multiple ? null : (props.value ?? null))
    : uncontrolledSingle
  const selectedMulti = isControlled
    ? (multiple ? (props.value ?? []) : [])
    : uncontrolledMulti
  const selectedValues = multiple
    ? selectedMulti
    : selectedSingle
      ? [selectedSingle]
      : []
  const selectedOptions = options.filter((option) => selectedValues.includes(option.value))
  const filteredOptions = isFilterable
    ? options.filter((option) => matchesQuery(option.label, query))
    : options
  const selectableFiltered = filteredOptions.filter((option) => !option.disabled)
  const selectableFilteredValues = selectableFiltered.map((option) => option.value)
  const allSelected =
    multiple &&
    selectableFiltered.length > 0 &&
    selectableFiltered.every((option) => selectedValues.includes(option.value))
  const someSelected =
    multiple &&
    selectableFiltered.some((option) => selectedValues.includes(option.value)) &&
    !allSelected

  const commitMulti = (next: string[]) => {
    if (!isControlled) {
      setUncontrolledMulti(next)
    }

    if (multiple) {
      props.onValueChange?.(next)
    }
  }

  const commitSingle = (next: string | null) => {
    if (!isControlled) {
      setUncontrolledSingle(next)
    }

    if (!multiple) {
      props.onValueChange?.(next)
    }
  }

  const toggleSelectAll = () => {
    if (!multiple) return

    const preserved = selectedValues.filter(
      (value) => !selectableFilteredValues.includes(value),
    )

    commitMulti(allSelected ? preserved : [...preserved, ...selectableFilteredValues])
  }

  const removeValue = (next: string) => {
    if (!multiple) return
    commitMulti(selectedValues.filter((value) => value !== next))
  }

  const onOpenChange = (open: boolean) => {
    if (!open) {
      setQuery('')
      return
    }
    requestAnimationFrame(() => searchRef.current?.focus())
  }

  const selectBody = (
    <>
        <SelectPrimitive.Trigger
          id={id}
          nativeButton={false}
          render={<div />}
          disabled={disabled}
          data-invalid={invalid || undefined}
          className={cn(
            'hp-input hp-select-trigger group flex w-full cursor-pointer items-center justify-between gap-2 px-2 text-left',
            multiple && 'hp-select-multiple',
            disabled && 'hp-input-disabled',
            readOnly && 'hp-input-readonly',
          )}
        >
          {multiple ? (
            <span className="flex min-w-0 flex-1 flex-wrap items-center gap-2 overflow-hidden">
              {selectedOptions.length === 0 ? (
                <span className="text-[14px] leading-[18px] text-[#9295a5]">{placeholder}</span>
              ) : (
                selectedOptions.map((option) => (
                  <Badge
                    key={option.value}
                    className="max-w-[180px]"
                    onRemove={
                      disabled || readOnly ? undefined : () => removeValue(option.value)
                    }
                  >
                    {option.label}
                  </Badge>
                ))
              )}
            </span>
          ) : (
            <span
              className={cn(
                'min-w-0 flex-1 truncate text-[14px] leading-[18px]',
                selectedOptions.length ? 'text-[#03102f]' : 'text-[#9295a5]',
              )}
            >
              {selectedOptions[0]?.label ?? placeholder}
            </span>
          )}
          <span className="flex shrink-0 items-center gap-1 self-center">
            {isClearable && selectedOptions.length > 0 && !disabled && !readOnly ? (
              <span
                role="button"
                className="text-[#61667c] transition-transform duration-500 hover:rotate-90"
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  if (multiple) {
                    commitMulti([])
                    return
                  }
                  commitSingle(null)
                }}
              >
                <X className="size-4" />
              </span>
            ) : null}
            <SelectPrimitive.Icon className="flex text-[#61667c] transition-transform duration-500 group-data-[popup-open]:-rotate-180">
              <ChevronDown className="size-5" />
            </SelectPrimitive.Icon>
          </span>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Positioner
            className="z-50 outline-none"
            side="bottom"
            align="end"
            sideOffset={4}
            alignItemWithTrigger={false}
          >
            <SelectPrimitive.Popup className="hp-select-popup">
              {isFilterable ? (
                <div className="sticky top-0 z-10 bg-white px-2 pt-2">
                  <div className="hp-input flex items-center gap-2 px-2">
                    <Search className="size-5 shrink-0 text-[#61667c]" />
                    <input
                      ref={searchRef}
                      value={query}
                      placeholder={searchPlaceholder}
                      className="h-6 w-full bg-transparent text-[14px] leading-[18px] text-[#03102f] outline-none placeholder:text-[#9295a5]"
                      onChange={(event) => setQuery(event.target.value)}
                      onKeyDown={(event) => {
                        if (
                          event.key !== 'ArrowDown' &&
                          event.key !== 'ArrowUp' &&
                          event.key !== 'Escape'
                        ) {
                          event.stopPropagation()
                        }
                      }}
                    />
                  </div>
                </div>
              ) : null}
              {multiple && props.isSelectAll !== false && selectableFiltered.length > 0 ? (
                <div className="px-2 pt-2">
                  <div
                    role="button"
                    tabIndex={0}
                    className="hp-select-item hp-select-item-multi w-full border-b border-[#e5e6ea]"
                    onPointerDown={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                    }}
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      toggleSelectAll()
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        toggleSelectAll()
                      }
                    }}
                  >
                    <OptionCheck selected={allSelected} partial={someSelected} />
                    <span className="min-w-0 flex-1 truncate">Select All</span>
                  </div>
                </div>
              ) : null}
              <SelectPrimitive.List className="flex flex-col gap-1 p-2">
                {filteredOptions.length === 0 ? (
                  <div className="py-2 text-center text-[14px] leading-[18px] text-[#9295a5]">
                    No data to display
                  </div>
                ) : (
                  filteredOptions.map((option) => (
                    <SelectPrimitive.Item
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                      className={cn('hp-select-item', multiple && 'hp-select-item-multi')}
                    >
                      {multiple ? (
                        <OptionCheck selected={selectedValues.includes(option.value)} />
                      ) : null}
                      <SelectPrimitive.ItemText className="min-w-0 flex-1 truncate">
                        {option.label}
                      </SelectPrimitive.ItemText>
                      {multiple ? null : (
                        <SelectPrimitive.ItemIndicator>
                          <Check className="size-5 text-[#2465de]" />
                        </SelectPrimitive.ItemIndicator>
                      )}
                    </SelectPrimitive.Item>
                  ))
                )}
              </SelectPrimitive.List>
            </SelectPrimitive.Popup>
          </SelectPrimitive.Positioner>
        </SelectPrimitive.Portal>
    </>
  )

  const rootProps = {
    items: options,
    disabled,
    readOnly,
    modal: false as const,
    onOpenChange,
  }

  return (
    <Field
      label={label}
      hint={hint}
      error={errorMessage}
      required={isRequired}
      htmlFor={id}
      className={className}
    >
      {multiple ? (
        <SelectPrimitive.Root
          {...rootProps}
          multiple
          {...(isControlled
            ? { value: selectedMulti }
            : { defaultValue: props.defaultValue ?? [] })}
          onValueChange={commitMulti}
        >
          {selectBody}
        </SelectPrimitive.Root>
      ) : (
        <SelectPrimitive.Root
          {...rootProps}
          multiple={false}
          {...(isControlled
            ? { value: selectedSingle }
            : { defaultValue: props.defaultValue ?? null })}
          onValueChange={commitSingle}
        >
          {selectBody}
        </SelectPrimitive.Root>
      )}
    </Field>
  )
}

export { Select }
