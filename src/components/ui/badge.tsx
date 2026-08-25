import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex w-fit max-w-full shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 text-[12px] leading-[18px] font-medium whitespace-nowrap [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-[#e5eeff] text-[#2465de]',
        secondary: 'border-transparent bg-[#f2f2f4] text-[#484d61]',
        destructive: 'border-transparent bg-[#f9e9e9] text-[#c20a1c]',
        outline: 'border-[#2465de] bg-transparent text-[#2465de]',
        ghost: 'border-transparent bg-transparent text-[#2465de]',
        success: 'border-transparent bg-[#e7f8f0] text-[#238b5b]',
        warning: 'border-transparent bg-[#fff9ec] text-[#bd8400]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant = 'default',
  onRemove,
  children,
  ...props
}: ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    onRemove?: () => void
  }) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      <span className="truncate">{children}</span>
      {onRemove ? (
        <span
          role="button"
          tabIndex={0}
          className="shrink-0 text-current/60 hover:text-current"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            onRemove()
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              event.stopPropagation()
              onRemove()
            }
          }}
        >
          <X className="size-3" />
        </span>
      ) : null}
    </span>
  )
}

export { Badge, badgeVariants }
