import { createFileRoute } from '@tanstack/react-router'
import { useHitPayUser } from '#/lib/hitpay'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const { user, error } = useHitPayUser()
  const displayName = user?.name?.trim() || user?.email || 'Signed in'
  const roleTitle = user?.role?.title ?? null

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-4 px-6 py-10">
      <h1 className="text-xl font-medium text-[#03102f]">Your app is being prepared</h1>
      <p className="text-sm text-[#61667c]">
        {error ??
          "We're setting up your workspace. Keep chatting — this screen will update when your app is ready."}
      </p>
      {user ? (
        <p className="text-sm text-[#9295a5]">
          {roleTitle ? `${displayName} · ${roleTitle}` : displayName}
        </p>
      ) : null}
    </main>
  )
}
