import { createFileRoute } from '@tanstack/react-router'
import { LandmarkIcon, MapPinIcon, CircleDollarSignIcon, PencilIcon, Trash2Icon } from 'lucide-react'
import { DocHeader } from '@/components/examples/doc-header'
import { Button } from '@/components/ui/button'
import { Chip } from '@/components/ui/chip'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import {
  ListItem,
  ListItemAction,
  ListItemActionDivider,
  ListItemBody,
  ListItemCopyRow,
  ListItemDescription,
  ListItemDetail,
  ListItemHoverActions,
  ListItemLogo,
  ListItemMeta,
  ListItemMethod,
  ListItemMore,
  ListItemTitle,
} from '@/components/ui/list-item'

export const Route = createFileRoute('/list-item')({
  component: ListItemExamplesPage,
})

function ListItemExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">
      <DocHeader crumb="List Item" />

      <section className="flex flex-col gap-16 px-8 py-12">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            General
          </p>
          <ListItem>
            <ListItemBody>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <ListItemTitle>DBS Multiplier</ListItemTitle>
                  <Chip color="DarkBlue">Default</Chip>
                  <Chip color="Blue">HitPay</Chip>
                  <Chip color="Purple">Stripe</Chip>
                </div>
                <ListItemDescription>Alex Turner</ListItemDescription>
              </div>
              <ListItemMeta>
                <ListItemDetail icon={<MapPinIcon />}>Singapore</ListItemDetail>
                <ListItemDetail icon={<CircleDollarSignIcon />}>SGD</ListItemDetail>
                <ListItemDetail icon={<LandmarkIcon />}>***3123</ListItemDetail>
              </ListItemMeta>
            </ListItemBody>
          </ListItem>
          <ListItem>
            <ListItemBody>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <ListItemTitle>DBS Multiplier</ListItemTitle>
                  <Chip color="DarkBlue">Default</Chip>
                  <Chip color="Blue">HitPay</Chip>
                  <Chip color="Purple">Stripe</Chip>
                </div>
                <ListItemDescription>Alex Turner</ListItemDescription>
              </div>
              <ListItemMeta>
                <ListItemDetail icon={<MapPinIcon />}>Singapore</ListItemDetail>
                <ListItemDetail icon={<CircleDollarSignIcon />}>SGD</ListItemDetail>
                <ListItemDetail icon={<LandmarkIcon />}>***3123</ListItemDetail>
              </ListItemMeta>
              <ListItemHoverActions>
                <ListItemAction aria-label="Edit">
                  <PencilIcon className="size-4" />
                </ListItemAction>
                <ListItemActionDivider />
                <ListItemAction aria-label="Delete" destructive>
                  <Trash2Icon className="size-4" />
                </ListItemAction>
              </ListItemHoverActions>
            </ListItemBody>
          </ListItem>
          <ListItem selected>
            <ListItemBody>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <ListItemTitle>DBS Multiplier</ListItemTitle>
                  <Chip color="DarkBlue">Default</Chip>
                  <Chip color="Blue">HitPay</Chip>
                  <Chip color="Purple">Stripe</Chip>
                </div>
                <ListItemDescription>Alex Turner</ListItemDescription>
              </div>
              <ListItemMeta>
                <ListItemDetail icon={<MapPinIcon />}>Singapore</ListItemDetail>
                <ListItemDetail icon={<CircleDollarSignIcon />}>SGD</ListItemDetail>
                <ListItemDetail icon={<LandmarkIcon />}>***3123</ListItemDetail>
              </ListItemMeta>
            </ListItemBody>
          </ListItem>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Webhook
          </p>
          <ListItem className="flex-col items-stretch gap-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 flex-wrap items-baseline gap-1">
                <ListItemTitle>Zapier Flow</ListItemTitle>
                <span className="text-xs text-muted-foreground">-</span>
                <span className="text-xs text-muted-foreground">Oct, 20 2023</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <ListItemCopyRow
                label="URL:"
                value="https://webhook.site/a9ad4444-e1da-46d9-9d83-4da6cb602ab9"
              />
              <ListItemCopyRow
                label="Salt:"
                value="JDJ5JDEwJHUvekxEVWpoUjV5Ty9qdFg1bENrVC40eDZJVnNNSFFKdmozTkpqWHVqZ3cybHFTOXZINjNx"
              />
            </div>
          </ListItem>
          <ListItem className="flex-col items-stretch gap-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 flex-wrap items-baseline gap-1">
                <ListItemTitle>Zapier Flow</ListItemTitle>
                <span className="text-xs text-muted-foreground">-</span>
                <span className="text-xs text-muted-foreground">Oct, 20 2023</span>
              </div>
              <ListItemMore
                menu={
                  <>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                  </>
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <ListItemCopyRow
                label="URL:"
                value="https://webhook.site/a9ad4444-e1da-46d9-9d83-4da6cb602ab9"
              />
              <ListItemCopyRow
                label="Salt:"
                value="JDJ5JDEwJHUvekxEVWpoUjV5Ty9qdFg1bENrVC40eDZJVnNNSFFKdmozTkpqWHVqZ3cybHFTOXZINjNx"
              />
            </div>
          </ListItem>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Integration
          </p>
          <ListItem className="p-4">
            <ListItemBody>
              <div className="flex items-center gap-2">
                <ListItemLogo>
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    H
                  </span>
                </ListItemLogo>
                <ListItemTitle>HitPay Store</ListItemTitle>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <p className="mr-1 text-xs font-medium text-muted-foreground">Payment methods</p>
                {['Visa', 'WC', 'MC', 'AP', 'At', 'PN', 'GP', 'IP', 'JCB', 'KP'].map((code) => (
                  <ListItemMethod key={code}>{code}</ListItemMethod>
                ))}
              </div>
            </ListItemBody>
          </ListItem>
          <ListItem className="p-4">
            <ListItemBody>
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <ListItemLogo>
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      H
                    </span>
                  </ListItemLogo>
                  <ListItemTitle>HitPay Store</ListItemTitle>
                </div>
                <ListItemHoverActions className="static flex">
                  <ListItemAction aria-label="Edit">
                    <PencilIcon className="size-4" />
                  </ListItemAction>
                  <ListItemActionDivider />
                  <ListItemAction aria-label="Delete" destructive>
                    <Trash2Icon className="size-4" />
                  </ListItemAction>
                </ListItemHoverActions>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <p className="mr-1 text-xs font-medium text-muted-foreground">Payment methods</p>
                {['Visa', 'WC', 'MC', 'AP', 'At', 'PN', 'GP', 'IP', 'JCB', 'KP'].map((code) => (
                  <ListItemMethod key={code}>{code}</ListItemMethod>
                ))}
              </div>
            </ListItemBody>
            <Button type="Primary" size="Default">
              Connect
            </Button>
          </ListItem>
        </div>
      </section>
    </main>
  )
}
