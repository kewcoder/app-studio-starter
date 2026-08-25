import type { ComponentProps, ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { PencilIcon, UserPlusIcon, XCircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Avatar } from './avatar'
import { BoxDetailRow } from './box-detail'
import { Button } from './button'
import { Chip } from './chip'

type CustomerCardAddress = {
  street?: string
  city?: string
  state?: string
  postal_code?: string
  country?: string
}

type CustomerCardData = {
  name?: string
  email?: string
  phone?: string
  phone_number?: string
  phone_number_country_code?: string
  src?: string
  currency?: string
  bank_name?: string
  bank_account_number?: string
  address?: CustomerCardAddress
}

const customerCardVariants = cva(
  'group/customer-card relative flex w-full items-center justify-between gap-4 rounded-lg border border-solid border-border bg-background px-4 py-5',
  {
    variants: {
      variant: {
        Small: '',
        Big: '',
        Float: 'shadow-[0_3px_11px_rgba(38,42,50,0.09)]',
      },
      hover: {
        true: 'transition-shadow hover:shadow-[0_3px_11px_rgba(38,42,50,0.09)]',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'Small',
      hover: false,
    },
  },
)

function formatPhone(customer: CustomerCardData) {
  const phone = customer.phone ?? customer.phone_number
  const code = customer.phone_number_country_code
  if (code && phone && !phone.includes('+')) return `+${code} ${phone}`
  if (phone) return phone
  return '-'
}

function formatAddress(address?: CustomerCardAddress) {
  if (!address) return '-'
  const line = [
    address.street,
    address.city,
    address.state,
    address.postal_code,
    address.country,
  ]
    .filter(Boolean)
    .join(' ')
    .trim()
  return line || '-'
}

function CustomerCard({
  className,
  variant = 'Small',
  customer,
  hover = false,
  edit = false,
  closable = false,
  beneficiary = false,
  leading,
  bottom,
  onAdd,
  onEdit,
  onClose,
  ...props
}: ComponentProps<'div'> & {
  variant?: 'Small' | 'Big' | 'Float'
  customer?: CustomerCardData | null
  hover?: boolean
  edit?: boolean
  closable?: boolean
  beneficiary?: boolean
  leading?: ReactNode
  bottom?: ReactNode
  onAdd?: () => void
  onEdit?: () => void
  onClose?: () => void
}) {
  const expanded = variant !== 'Small'

  return (
    <div
      data-slot="customer-card"
      data-variant={variant}
      className={cn(customerCardVariants({ variant, hover }), className)}
      {...props}
    >
      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-3 overflow-hidden">
        {edit ? (
          <div
            className={cn(
              'absolute top-3 right-3 transition-opacity',
              hover && 'opacity-0 group-hover/customer-card:opacity-100',
            )}
          >
            <Button
              type="Secondary"
              size="Small"
              iconOnly
              htmlType="button"
              aria-label="Edit"
              onClick={onEdit}
            >
              <PencilIcon />
            </Button>
          </div>
        ) : null}

        {closable ? (
          <button
            type="button"
            aria-label="Close"
            className="-top-1.5 -right-1.5 absolute rounded-full bg-background text-muted-foreground outline-none hover:text-destructive-strong"
            onClick={onClose}
          >
            <XCircleIcon className="size-5 fill-background" />
          </button>
        ) : null}

        {customer ? (
          <>
            <div className="flex w-full min-w-0 items-center gap-3">
              <Avatar
                size={32}
                type={customer.src ? 'Image' : 'Default'}
                src={customer.src}
                alt=""
              >
                {(customer.name?.[0] ?? 'J').toUpperCase()}
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col overflow-hidden font-medium">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="min-w-0 truncate text-sm leading-[1.5] text-foreground">
                    {customer.name || '-'}
                  </span>
                  {beneficiary && customer.currency ? (
                    <Chip color="Blue">{customer.currency.toUpperCase()}</Chip>
                  ) : null}
                </div>
                {beneficiary ? (
                  <span className="truncate text-sm font-normal leading-[1.5] text-muted-foreground">
                    {customer.bank_name}
                    {customer.bank_account_number ? ` / ${customer.bank_account_number}` : ''}
                  </span>
                ) : (
                  <span className="truncate text-sm font-normal leading-[1.5] text-muted-foreground">
                    {customer.email || formatPhone(customer)}
                  </span>
                )}
              </div>
            </div>

            {expanded ? (
              <div className="flex w-full min-w-0 flex-col gap-4 pt-4">
                {beneficiary ? (
                  <BoxDetailRow label="Email">{customer.email ?? '-'}</BoxDetailRow>
                ) : (
                  <>
                    <BoxDetailRow label="Phone">{formatPhone(customer)}</BoxDetailRow>
                    <BoxDetailRow label="Address" alignment="Vertical">
                      {formatAddress(customer.address)}
                    </BoxDetailRow>
                  </>
                )}
              </div>
            ) : null}
          </>
        ) : beneficiary ? null : (
          <>
            <div className="flex w-full flex-col items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-solid border-neutral-border bg-neutral-strong text-primary-foreground">
                <UserPlusIcon className="size-4" />
              </span>
              <div className="flex flex-col text-center font-medium">
                <span className="text-sm leading-[1.5] text-foreground">No customer attached</span>
                <span className="text-sm font-normal leading-[1.5] text-muted-foreground">
                  Add customer detail to this transaction
                </span>
              </div>
            </div>
            <Button type="Secondary" size="Small" htmlType="button" className="w-full" onClick={onAdd}>
              Add customer
            </Button>
          </>
        )}

        {bottom ? (
          <div
            className={cn(
              'w-full',
              hover && 'opacity-0 group-hover/customer-card:opacity-100',
            )}
          >
            {bottom}
          </div>
        ) : null}
      </div>

      {leading ? <div className="shrink-0">{leading}</div> : null}
    </div>
  )
}

export { CustomerCard }
export type { CustomerCardAddress, CustomerCardData }
