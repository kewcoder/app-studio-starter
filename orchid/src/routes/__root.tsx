import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { DocHeader, PreviewCanvas, PreviewProvider } from '@/components/examples/doc-header'

import appCss from '../styles.css?url'

function NotFound() {
  return (
    <p className="px-8 py-12 text-sm text-muted-foreground">That page does not exist.</p>
  )
}

function RootLayout() {
  return (
    <PreviewProvider>
      <div className="flex min-h-dvh flex-col">
        <DocHeader />
        <PreviewCanvas>
          <Outlet />
        </PreviewCanvas>
      </div>
    </PreviewProvider>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Orchid UI' },
    ],
    links: [
      { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="%232465de"/></svg>' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
