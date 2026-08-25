import { createFileRoute, Link } from '@tanstack/react-router'
import { docComponentsByName } from '@/components/doc/doc-components'
import { ListItem, ListItemBody, ListItemDescription, ListItemTitle } from '@/components/ui/list-item'

export const Route = createFileRoute('/')({
  component: ExamplesIndexPage,
})

function ExamplesIndexPage() {
  return (
    <main className="bg-background">
      <section className="space-y-3 px-8 py-12">
        {docComponentsByName().map((item) => (
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
