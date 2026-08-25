import { createFileRoute } from '@tanstack/react-router'
import { CircleIcon, PencilIcon, ToggleLeftIcon, Trash2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

export const Route = createFileRoute('/button')({
  component: ButtonExamplesPage,
})

const TYPES = ['Primary', 'Destructive', 'Secondary'] as const
const STYLES = ['Default', 'Transparent', 'Border'] as const
const SIZES = ['Default', 'Small', 'Big'] as const
const STATES = [
  { label: 'Default' as const, disabled: false },
  { label: 'Disabled' as const, disabled: true },
]

function ButtonExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">

      <section className="flex flex-col gap-16 px-8 py-12">
        {SIZES.map((size) => (
          <div key={size} className="flex flex-col gap-8">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {size}
            </p>

            {TYPES.map((type) => (
              <div key={type} className="flex flex-col gap-4">
                <p className="text-sm font-medium text-foreground">{type}</p>
                {STATES.map((state) => (
                  <div key={state.label} className="flex flex-col gap-2">
                    <p className="text-xs text-muted-foreground">{state.label}</p>
                    <TypeCluster type={type} size={size} disabled={state.disabled} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}

function TypeCluster({
  type,
  size,
  disabled,
}: {
  type: (typeof TYPES)[number]
  size: (typeof SIZES)[number]
  disabled?: boolean
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {STYLES.map((style) => (
        <Button key={`${style}-text`} type={type} style={style} size={size} disabled={disabled}>
          Button Text
        </Button>
      ))}
      {STYLES.map((style) => (
        <Button key={`${style}-leading`} type={type} style={style} size={size} disabled={disabled}>
          <CircleIcon />
          Button Text
        </Button>
      ))}
      {STYLES.map((style) => (
        <Button key={`${style}-trailing`} type={type} style={style} size={size} disabled={disabled}>
          Button Text
          <CircleIcon />
        </Button>
      ))}
      {STYLES.map((style) => (
        <Button
          key={`${style}-icon`}
          type={type}
          style={style}
          size={size}
          iconOnly
          disabled={disabled}
        >
          <CircleIcon />
        </Button>
      ))}
      {STYLES.map((style) => (
        <Button
          key={`${style}-circle`}
          type={type}
          style={style}
          size={size}
          iconOnly
          shape="Circle"
          disabled={disabled}
        >
          <CircleIcon />
        </Button>
      ))}
      <Button
        type={type}
        size={size}
        disabled={disabled}
        menu={
          <>
            <DropdownMenuItem>
              <PencilIcon />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ToggleLeftIcon />
              Unpublish
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2Icon />
              Delete
            </DropdownMenuItem>
          </>
        }
      >
        <CircleIcon />
        Button Text
      </Button>
    </div>
  )
}
