import { createFileRoute, Link } from '@tanstack/react-router'
import { DocHeader } from '@/components/examples/doc-header'
import { ListItem, ListItemBody, ListItemDescription, ListItemTitle } from '@/components/ui/list-item'

export const Route = createFileRoute('/')({
  component: ExamplesIndexPage,
})

const COMPONENTS = [
  {
    to: '/button' as const,
    name: 'Button',
    description: 'Type, Style, Size, Default/Disabled, icon-only, and additional action.',
  },
  {
    to: '/dropdown' as const,
    name: 'Dropdown',
    description: 'Item states and grouped or ungrouped menus.',
  },
  {
    to: '/snackbar' as const,
    name: 'Snack Bar',
    description: 'Small/Default as floating toasts; Big with close and actions.',
  },
  {
    to: '/chip' as const,
    name: 'Chip',
    description: 'Global colors, Background/Border/Transparent, and user-type chips.',
  },
  {
    to: '/accordion' as const,
    name: 'Accordion',
    description: 'Expandable sections with title, optional description, label, and progress.',
  },
  {
    to: '/progress-bar' as const,
    name: 'Progress Bar',
    description: 'Default and Small sizes with current/max label.',
  },
  {
    to: '/list-item' as const,
    name: 'List Item',
    description: 'General, webhook, and integration list cards.',
  },
  {
    to: '/input-stepper' as const,
    name: 'Input Stepper',
    description: 'Minus/plus stepper; click the value to type.',
  },
]

function ExamplesIndexPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">
      <DocHeader crumb="Examples" />

      <section className="flex flex-col gap-3 px-8 py-12">
        {COMPONENTS.map((item) => (
          <Link key={item.to} to={item.to} className="block">
            <ListItem>
              <ListItemBody>
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <ListItemTitle>{item.name}</ListItemTitle>
                    <ListItemDescription className="text-muted-foreground">
                      {item.description}
                    </ListItemDescription>
                  </div>
                  <span className="shrink-0 text-sm text-primary">Open</span>
                </div>
              </ListItemBody>
            </ListItem>
          </Link>
        ))}
      </section>
    </main>
  )
}
