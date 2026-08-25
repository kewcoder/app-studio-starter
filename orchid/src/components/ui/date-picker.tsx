import { useState } from 'react'
import type { DateRange, Matcher } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'

type DatePickerProps = {
  className?: string
  mode?: 'single' | 'range'
  selected?: Date
  defaultSelected?: Date
  onSelect?: (date: Date | undefined) => void
  range?: DateRange
  defaultRange?: DateRange
  onRangeSelect?: (range: DateRange | undefined) => void
  disabled?: Matcher | Matcher[]
  showFooter?: boolean
  onClear?: () => void
  onDone?: () => void
}

function DatePicker({
  className,
  mode = 'single',
  selected,
  defaultSelected,
  onSelect,
  range,
  defaultRange,
  onRangeSelect,
  disabled,
  showFooter = true,
  onClear,
  onDone,
}: DatePickerProps) {
  const [uncontrolledDate, setUncontrolledDate] = useState<Date | undefined>(defaultSelected)
  const [uncontrolledRange, setUncontrolledRange] = useState<DateRange | undefined>(defaultRange)

  const date = selected ?? uncontrolledDate
  const dateRange = range ?? uncontrolledRange

  function handleClear() {
    setUncontrolledDate(undefined)
    setUncontrolledRange(undefined)
    onSelect?.(undefined)
    onRangeSelect?.(undefined)
    onClear?.()
  }

  return (
    <div
      data-slot="date-picker"
      className={cn(
        'flex w-fit flex-col gap-6 rounded-lg bg-background p-5 shadow-[0_3px_11px_rgba(38,42,50,0.09)]',
        className,
      )}
    >
      {mode === 'range' ? (
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={(next) => {
            setUncontrolledRange(next)
            onRangeSelect?.(next)
          }}
          disabled={disabled}
        />
      ) : (
        <Calendar
          mode="single"
          selected={date}
          onSelect={(next) => {
            setUncontrolledDate(next)
            onSelect?.(next)
          }}
          disabled={disabled}
        />
      )}

      {showFooter ? (
        <div className="flex items-center justify-end gap-2">
          <Button type="Secondary" onClick={handleClear}>
            Clear
          </Button>
          <Button type="Primary" onClick={onDone}>
            Done
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export { DatePicker }
export type { DatePickerProps }
