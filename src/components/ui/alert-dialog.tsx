import type { ComponentProps } from 'react'
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn('hp-alert-overlay', className)}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = 'medium',
  showCloseButton = true,
  children,
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: 'default' | 'medium' | 'small'
  showCloseButton?: boolean
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn('hp-alert-popup', className)}
        {...props}
      >
        {showCloseButton ? (
          <AlertDialogPrimitive.Close
            data-slot="alert-dialog-close"
            className="hp-alert-close"
          >
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </AlertDialogPrimitive.Close>
        ) : null}
        {children}
      </AlertDialogPrimitive.Popup>
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn('hp-alert-header', className)}
      {...props}
    />
  )
}

function AlertDialogBody({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-body"
      className={cn('hp-alert-body', className)}
      {...props}
    />
  )
}

function AlertDialogFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn('hp-alert-footer', className)}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.Title.Props) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn('hp-alert-title', className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.Description.Props) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn('hp-alert-description', className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  variant = 'default',
  children = 'OK',
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <AlertDialogPrimitive.Close
      nativeButton={false}
      render={
        <Button variant={variant} className={cn('min-w-[112px]', className)} {...props}>
          {children}
        </Button>
      }
    />
  )
}

function AlertDialogCancel({
  className,
  variant = 'outline',
  children = 'Cancel',
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <AlertDialogPrimitive.Close
      nativeButton={false}
      render={
        <Button variant={variant} className={cn('min-w-[112px]', className)} {...props}>
          {children}
        </Button>
      }
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
