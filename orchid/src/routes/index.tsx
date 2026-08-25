import { createFileRoute, Link } from '@tanstack/react-router'
import { docComponentsByName } from '@/components/doc/doc-components'
import { ListItem, ListItemBody, ListItemDescription, ListItemTitle } from '@/components/ui/list-item'
import { DocExamplePage } from '@/components/doc/doc-example-page'

export const Route = createFileRoute('/')({
  component: ExamplesIndexPage,
})

function ExamplesIndexPage() {
  return (
    <DocExamplePage to="/">
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
      </DocExamplePage>
  )
}
