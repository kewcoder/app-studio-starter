import type { ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

function PageTitle({
  title,
  description,
  badge,
  onBack,
  className,
  children,
}: {
  title: string
  description?: string
  badge?: ReactNode
  onBack?: () => void
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn('flex flex-col pb-4', className)}>
      <div className="flex flex-col gap-3 pt-4">
        {onBack ? (
          <Button
            variant="outline"
            size="sm"
            className="self-start"
            onClick={onBack}
          >
            <ChevronLeft className="size-4" />
            Back
          </Button>
        ) : null}
        <div className="flex min-h-9 w-full items-start gap-5">
          <div className="flex min-w-0 flex-1 flex-col gap-3 text-[#03102f]">
            <div className="flex items-center gap-3 font-medium">
              <h1 className="truncate text-base lg:text-xl">{title}</h1>
              {badge}
            </div>
            {description ? (
              <p className="truncate text-sm text-[#61667c]">{description}</p>
            ) : null}
          </div>
          {children ? (
            <div className="flex shrink-0 items-center gap-3">{children}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export { PageTitle }
