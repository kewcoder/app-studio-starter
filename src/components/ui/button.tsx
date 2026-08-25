import { forwardRef } from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 border text-[14px] leading-[18px] font-medium whitespace-nowrap outline-none select-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default: 'hp-btn-primary',
        outline: 'hp-btn-secondary',
        secondary: 'hp-btn-secondary',
        destructive: 'hp-btn-destructive',
        ghost: 'rounded-lg border-transparent bg-transparent text-[#2465de] shadow-none hover:text-[#4c8afd]',
        link: 'rounded-lg border-transparent bg-transparent text-[#2465de] shadow-none underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 rounded-lg px-3 py-2',
        sm: 'h-7 rounded-md px-2 text-[12px] leading-[18px] [&_svg:not([class*="size-"])]:size-3.5',
        lg: 'h-11 rounded-lg px-3.5 text-[16px] leading-[22px] [&_svg:not([class*="size-"])]:size-5',
        icon: 'size-9 rounded-lg p-2',
        'icon-sm': 'size-7 rounded-md p-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = forwardRef<
  HTMLButtonElement,
  ButtonPrimitive.Props &
    VariantProps<typeof buttonVariants> & {
      isLoading?: boolean
    }
>(function Button(
  { className, variant = 'default', size = 'default', children, disabled, isLoading, ...props },
  ref,
) {
  const inactive = Boolean(disabled || isLoading)

  return (
    <ButtonPrimitive
      ref={ref}
      data-slot="button"
      disabled={inactive}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {isLoading ? <Loader2 className="size-4 animate-spin" /> : null}
      {children}
    </ButtonPrimitive>
  )
})

export { Button, buttonVariants }
