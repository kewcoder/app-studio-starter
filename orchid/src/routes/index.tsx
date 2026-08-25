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
  {
    to: '/avatar' as const,
    name: 'Avatar',
    description: 'Sizes 24–64, Default, Business, and Image.',
  },
  {
    to: '/tooltip' as const,
    name: 'Tooltip',
    description: 'Hover tooltip with top, bottom, left, and right placement.',
  },
  {
    to: '/tab-menu' as const,
    name: 'Tab Menu',
    description: 'Default underline and Pills tab bars.',
  },
  {
    to: '/clickable-option' as const,
    name: 'Clickable Option',
    description: 'Selectable radio cards with title and description.',
  },
  {
    to: '/overview-item' as const,
    name: 'Overview Item',
    description: 'Metric card with header divider, value, and percent badge.',
  },
  {
    to: '/sub-header' as const,
    name: 'Sub Header',
    description: 'Back or close on the left; actions on the right.',
  },
  {
    to: '/page-title' as const,
    name: 'Page Title',
    description: 'Heading with optional description, chip, and copy.',
  },
  {
    to: '/box-detail' as const,
    name: 'Box Detail',
    description: 'Detail card with grid columns, colspan, and stacked rows.',
  },
  {
    to: '/group-icon' as const,
    name: 'Group Icon',
    description: 'Icon cluster with Default and Border; dropdown, link, and copy.',
  },
  {
    to: '/customer-card' as const,
    name: 'Customer Card',
    description: 'Small, Big, and Float customer or beneficiary cards.',
  },
  {
    to: '/modal' as const,
    name: 'Modal',
    description: 'Dialog overlay with Small, Medium, and Default sizes.',
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
