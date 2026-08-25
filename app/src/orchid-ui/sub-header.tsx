import type { ComponentProps, ReactNode } from 'react'
import { ChevronLeftIcon, XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from './button'

function SubHeader({
  className,
  left = 'Back',
  onBack,
  actions,
  ...props
}: ComponentProps<'div'> & {
  left?: 'Back' | 'Close'
  onBack?: () => void
  actions?: ReactNode
}) {
  return (
    <div
      data-slot="sub-header"
      className={cn('flex w-full items-center justify-between gap-4', className)}
      {...props}
    >
      <Button
        type="Secondary"
        style="Transparent"
        size="Small"
        iconOnly
        htmlType="button"
        aria-label={left === 'Close' ? 'Close' : 'Back'}
        onClick={onBack}
      >
        {left === 'Close' ? <XIcon /> : <ChevronLeftIcon />}
      </Button>
      {actions ? (
        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-2">{actions}</div>
      ) : (
        <span className="min-w-0 flex-1" />
      )}
    </div>
  )
}

export { SubHeader }
