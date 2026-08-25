import { createFileRoute } from '@tanstack/react-router'
import { Avatar } from '@/components/ui/avatar'

export const Route = createFileRoute('/avatar')({
  component: AvatarExamplesPage,
})

const SIZES = [24, 28, 32, 40, 48, 64] as const
const PHOTO =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop'

function AvatarExamplesPage() {
  return (
    <main className="min-h-dvh overflow-auto bg-background">

      <section className="flex flex-col gap-16 px-8 py-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Size
          </p>
          <div className="flex flex-wrap items-end gap-4">
            {SIZES.map((size) => (
              <Avatar key={size} size={size} type="Default">
                H
              </Avatar>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Type
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar type="Default">H</Avatar>
            <Avatar type="Business">H</Avatar>
            <Avatar type="Image" src={PHOTO} alt="Portrait" />
          </div>
        </div>
      </section>
    </main>
  )
}
