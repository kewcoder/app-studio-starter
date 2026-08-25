import { useState, type ComponentProps, type ReactNode } from 'react'
import { CopyIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function PageTitle({
  className,
  title,
  description,
  chip,
  copyValue,
  loading = false,
  ...props
}: ComponentProps<'div'> & {
  title: string
  description?: string
  chip?: ReactNode
  copyValue?: string
  loading?: boolean
}) {
  const [copied, setCopied] = useState(false)

  return (
    <div
      data-slot="page-title"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    >
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        {loading ? (
          <span className="h-7 min-w-0 flex-1 animate-pulse rounded bg-neutral-soft" />
        ) : (
          <h1 className="min-w-0 text-2xl font-medium leading-[1.4] text-foreground">{title}</h1>
        )}
        {chip && !loading ? chip : null}
      </div>
      {loading ? (
        <span className="h-4 min-w-0 flex-1 animate-pulse rounded bg-neutral-soft" />
      ) : description ? (
        <div className="group/copy flex min-w-0 items-start gap-2">
          <p className="min-w-0 text-sm leading-[1.5] text-muted-foreground">{description}</p>
          {copyValue ? (
            <button
              type="button"
              aria-label="Copy"
              className="relative mt-0.5 inline-flex size-4 shrink-0 items-center justify-center outline-none"
              onClick={async () => {
                await navigator.clipboard.writeText(copyValue)
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
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export { PageTitle }
