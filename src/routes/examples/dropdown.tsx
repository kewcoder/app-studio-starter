import { createFileRoute } from '@tanstack/react-router'
import { CircleIcon, PencilIcon } from 'lucide-react'
import { DocHeader } from '@/components/examples/doc-header'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const Route = createFileRoute('/examples/dropdown')({
  component: DropdownExamplesPage,
})

function MenuItem({
  variant = 'default',
}: {
  variant?: 'default' | 'destructive'
}) {
  return (
    <DropdownMenuItem variant={variant}>
      <PencilIcon />
      Menu
    </DropdownMenuItem>
  )
}

function OpenButton({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        nativeButton
        className="inline-flex w-fit"
        render={
          <Button type="Secondary" size="Small">
            Open
          </Button>
        }
      />
      <DropdownMenuContent align="start">{children}</DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">
      <DocHeader crumb="Dropdown" />

      <section className="flex flex-col items-start gap-16 px-8 py-12">
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Dropdown Menu
          </p>
          <OpenButton>
            <MenuItem />
            <MenuItem />
            <DropdownMenuSeparator />
            <MenuItem variant="destructive" />
          </OpenButton>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Dropdown
          </p>
          <OpenButton>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Group Title</DropdownMenuLabel>
              <MenuItem />
              <MenuItem />
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Group Title</DropdownMenuLabel>
              <MenuItem />
              <MenuItem />
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <MenuItem variant="destructive" />
          </OpenButton>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Dropdown in Button
          </p>
          <Button
            type="Secondary"
            size="Small"
            menu={
              <>
                <MenuItem />
                <MenuItem />
                <DropdownMenuSeparator />
                <MenuItem variant="destructive" />
              </>
            }
          >
            <CircleIcon />
            Button Text
          </Button>
        </div>
      </section>
    </main>
  )
}
