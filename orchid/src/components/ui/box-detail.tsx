import { createContext, useContext, useState, type ComponentProps, type ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { CopyIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const BoxDetailTypeContext = createContext<'Default' | 'Border'>('Default')

const boxDetailVariants = cva(
  'flex w-full flex-col rounded-lg border border-solid border-border bg-background',
  {
    variants: {
      type: {
        Default: 'gap-4 p-4',
        Border: 'gap-px overflow-hidden bg-border',
      },
    },
    defaultVariants: {
      type: 'Default',
    },
  },
)

function BoxDetail({
  className,
  type = 'Default',
  ...props
}: ComponentProps<'div'> & {
  type?: 'Default' | 'Border'
}) {
  return (
    <BoxDetailTypeContext.Provider value={type}>
      <div
        data-slot="box-detail"
        data-type={type}
        className={cn(boxDetailVariants({ type }), className)}
        {...props}
      />
    </BoxDetailTypeContext.Provider>
  )
}

function BoxDetailHeader({ className, ...props }: ComponentProps<'div'>) {
  const type = useContext(BoxDetailTypeContext)

  return (
    <div
      data-slot="box-detail-header"
      className={cn(
        'flex w-full min-w-0 items-center justify-between gap-3',
        type === 'Border' && 'bg-background px-4 py-3',
        className,
      )}
      {...props}
    />
  )
}

function BoxDetailGrid({
  className,
  columns = 2,
  style,
  ...props
}: ComponentProps<'div'> & {
  columns?: number
}) {
  const type = useContext(BoxDetailTypeContext)

  return (
    <div
      data-slot="box-detail-grid"
      className={cn(
        'grid w-full min-w-0',
        type === 'Border' ? 'gap-px bg-border' : 'gap-x-6 gap-y-4',
        className,
      )}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        ...style,
      }}
      {...props}
    />
  )
}

function BoxDetailTitle({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      data-slot="box-detail-title"
      className={cn('min-w-0 text-sm font-medium leading-[1.5] text-foreground', className)}
      {...props}
    />
  )
}

const boxDetailRowVariants = cva('flex w-full min-w-0 gap-3', {
  variants: {
    alignment: {
      Horizontal: 'flex-row items-start justify-between',
      Vertical: 'flex-col items-stretch gap-1',
    },
  },
  defaultVariants: {
    alignment: 'Horizontal',
  },
})

const boxDetailLabelVariants = cva('shrink-0 leading-[1.5] text-muted-foreground', {
  variants: {
    size: {
      Small: 'text-xs',
      Big: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'Small',
  },
})

const boxDetailValueVariants = cva('min-w-0 leading-[1.5] text-foreground', {
  variants: {
    size: {
      Small: 'text-sm',
      Big: 'text-lg font-medium',
    },
    alignment: {
      Horizontal: 'text-right',
      Vertical: 'text-left',
    },
  },
  defaultVariants: {
    size: 'Small',
    alignment: 'Horizontal',
  },
})

function BoxDetailRow({
  className,
  label,
  children,
  copyValue,
  alignment = 'Horizontal',
  size = 'Small',
  colSpan,
  style,
  ...props
}: ComponentProps<'div'> & {
  label?: string
  copyValue?: string
  alignment?: 'Horizontal' | 'Vertical'
  size?: 'Small' | 'Big'
  colSpan?: number
}) {
  const type = useContext(BoxDetailTypeContext)

  return (
    <div
      data-slot="box-detail-row"
      data-alignment={alignment}
      data-size={size}
      className={cn(
        boxDetailRowVariants({ alignment }),
        type === 'Border' && 'bg-background p-4',
        className,
      )}
      style={{
        ...(colSpan ? { gridColumn: `span ${colSpan}` } : {}),
        ...style,
      }}
      {...props}
    >
      {label ? <span className={boxDetailLabelVariants({ size })}>{label}</span> : null}
      <span
        className={cn(
          boxDetailValueVariants({ size, alignment }),
          'flex items-start gap-2',
          alignment === 'Horizontal' ? 'justify-end' : 'justify-start',
        )}
      >
        <span className="min-w-0 break-words">{children}</span>
        {copyValue ? <BoxDetailCopy value={copyValue} /> : null}
      </span>
    </div>
  )
}

function BoxDetailCopy({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      aria-label="Copy"
      className="relative inline-flex size-4 shrink-0 items-center justify-center outline-none"
      onClick={async () => {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1200)
      }}
    >
      <CopyIcon className="size-4 text-muted-foreground" />
      {copied ? (
        <span className="absolute -top-8 left-1/2 z-20 -translate-x-1/2 rounded bg-neutral px-2 py-1 text-xs font-medium whitespace-nowrap text-muted-foreground shadow-[0_1px_3px_rgba(0,0,0,0.1),0_3px_22px_rgba(38,42,50,0.09)]">
          Copied !
        </span>
      ) : null}
    </button>
  )
}

function BoxDetailValue({
  className,
  children,
  ...props
}: ComponentProps<'span'> & { children?: ReactNode }) {
  return (
    <span data-slot="box-detail-value" className={cn('min-w-0', className)} {...props}>
      {children}
    </span>
  )
}

export {
  BoxDetail,
  BoxDetailHeader,
  BoxDetailGrid,
  BoxDetailTitle,
  BoxDetailRow,
  BoxDetailValue,
}
