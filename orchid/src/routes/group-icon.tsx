import { createFileRoute } from '@tanstack/react-router'
import { CopyIcon, SquareArrowOutUpRightIcon } from 'lucide-react'
import { DocHeader } from '@/components/examples/doc-header'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import {
  GroupIcon,
  GroupIconButton,
  GroupIconDivider,
  GroupIconLink,
  GroupIconMenu,
} from '@/components/ui/group-icon'

export const Route = createFileRoute('/group-icon')({
  component: GroupIconExamplesPage,
})

function ExampleGroup({ type }: { type?: 'Default' | 'Border' }) {
  return (
    <GroupIcon type={type}>
      <GroupIconMenu
        menu={
          <>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </>
        }
      />
      <GroupIconDivider />
      <GroupIconLink href="https://hitpayapp.com" aria-label="Open new link">
        <SquareArrowOutUpRightIcon />
      </GroupIconLink>
      <GroupIconDivider />
      <GroupIconButton
        aria-label="Copy"
        onClick={() => navigator.clipboard.writeText('https://hitpayapp.com')}
      >
        <CopyIcon />
      </GroupIconButton>
    </GroupIcon>
  )
}

function GroupIconExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">
      <DocHeader crumb="Group Icon" />

      <section className="flex flex-col gap-16 px-8 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Default
          </p>
          <ExampleGroup type="Default" />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Border
          </p>
          <ExampleGroup type="Border" />
        </div>
      </section>
    </main>
  )
}
