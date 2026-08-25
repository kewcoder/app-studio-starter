import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

function Table({ className, ...props }: ComponentProps<'table'>) {
  return (
    <div data-slot="table-container" className="hp-table-wrap relative w-full overflow-x-auto">
      <table data-slot="table" className={cn('hp-table', className)} {...props} />
    </div>
  )
}

function TableHeader({ className, ...props }: ComponentProps<'thead'>) {
  return <thead data-slot="table-header" className={cn(className)} {...props} />
}

function TableBody({ className, ...props }: ComponentProps<'tbody'>) {
  return <tbody data-slot="table-body" className={cn(className)} {...props} />
}

function TableFooter({ className, ...props }: ComponentProps<'tfoot'>) {
  return (
    <tfoot data-slot="table-footer" className={cn('hp-table-footer', className)} {...props} />
  )
}

function TableRow({ className, onClick, ...props }: ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      onClick={onClick}
      className={cn('hp-table-row', onClick && 'hp-table-row-interactive', className)}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: ComponentProps<'th'>) {
  return <th data-slot="table-head" className={cn('hp-table-head', className)} {...props} />
}

function TableCell({ className, ...props }: ComponentProps<'td'>) {
  return <td data-slot="table-cell" className={cn('hp-table-cell', className)} {...props} />
}

function TableCaption({ className, ...props }: ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('mt-4 text-sm text-[#9295a5]', className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
