import { useState, type ReactNode } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useHitPayUser } from '#/lib/hitpay'
import { Mail, Plus, Trash2, X } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { PageTitle } from '@/components/ui/page-title'
import { Select } from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'

export const Route = createFileRoute('/')({ component: Home })

const COUNTRIES = [
  { label: 'Singapore', value: 'SG' },
  { label: 'Malaysia', value: 'MY' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Australia', value: 'AU' },
]

/**
 * Placeholder while App Studio prepares the workspace.
 * Replace this page when you build the real app.
 */
function Home() {
  const { user, error } = useHitPayUser()
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [notify, setNotify] = useState(true)
  const [plan, setPlan] = useState('monthly')
  const [country, setCountry] = useState<string | null>('SG')
  const [departments, setDepartments] = useState<string[]>(['eng'])
  const displayName = user?.name?.trim() || user?.email || 'Signed in'
  const roleTitle = user?.role?.title ?? null
  const canManage = roleTitle === 'Owner' || roleTitle === 'Admin'

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-6">
      <div className="flex flex-col gap-2">
        <PageTitle
          title="Your app is being prepared"
          badge={<Badge variant="warning">Preparing</Badge>}
        >
          {user ? (
            <Badge variant="secondary">
              {roleTitle ? `${displayName} · ${roleTitle}` : displayName}
            </Badge>
          ) : null}
        </PageTitle>
        <p className="-mt-6 text-sm text-[#61667c]">
          {error ??
            "We're setting up your workspace. Keep chatting — this screen will update when your app is ready."}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Section title="Actions">
          <div className="flex flex-wrap items-center gap-2">
            <Button>
              <Plus />
              Save
            </Button>
            <Button variant="outline">Cancel</Button>
            {canManage ? <Button variant="destructive">Delete</Button> : null}
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
            <Button size="sm">Small</Button>
            <Button size="icon">
              <X />
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Paid</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="destructive">Failed</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge onRemove={() => undefined}>Closable</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Dialog>
              <DialogTrigger
                nativeButton={false}
                render={
                  <Button>
                    <Plus />
                    Add item
                  </Button>
                }
              />
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add item</DialogTitle>
                  <DialogDescription>Create a new record.</DialogDescription>
                </DialogHeader>
                <DialogBody className="flex flex-col gap-4">
                  <Input label="Name" placeholder="Jane Doe" />
                  <Textarea label="Notes" placeholder="Optional notes..." />
                </DialogBody>
                <DialogFooter>
                  <DialogClose nativeButton={false} render={<Button variant="outline">Cancel</Button>} />
                  <DialogClose nativeButton={false} render={<Button>Save</Button>} />
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {canManage ? (
              <AlertDialog>
                <AlertDialogTrigger
                  nativeButton={false}
                  render={
                    <Button variant="destructive">
                      <Trash2 />
                      Delete item
                    </Button>
                  }
                />
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete this item?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel />
                    <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : null}
          </div>
        </Section>

        <Section title="Form">
          <Input
            label="Email"
            placeholder="you@example.com"
            icon={<Mail className="size-5" />}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Textarea
            label="Notes"
            placeholder="Add a note..."
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
          <Checkbox
            label="I accept the terms"
            checked={accepted}
            onCheckedChange={setAccepted}
          />
          <Switch
            label="Email notifications"
            checked={notify}
            onCheckedChange={setNotify}
          />
          <RadioGroup label="Billing" value={plan} onValueChange={setPlan}>
            <RadioGroupItem value="monthly" label="Monthly" />
            <RadioGroupItem value="yearly" label="Yearly" />
          </RadioGroup>
        </Section>

        <Section title="Select">
          <Select
            isFilterable
            isClearable
            label="Country"
            placeholder="Search countries..."
            value={country}
            onValueChange={setCountry}
            options={COUNTRIES}
          />
          <Select
            multiple
            isFilterable
            label="Departments"
            placeholder="Select departments..."
            value={departments}
            onValueChange={setDepartments}
            options={[
              { label: 'Design', value: 'design' },
              { label: 'Engineering', value: 'eng' },
              { label: 'Marketing', value: 'mkt' },
              { label: 'Sales', value: 'sales' },
            ]}
          />
        </Section>

        <Section title="Overview">
          <Card>
            <CardHeader>
              <CardTitle>This week</CardTitle>
              <CardDescription>Collected from paid invoices.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#03102f]">SGD 1,240.00</p>
            </CardContent>
          </Card>
        </Section>
      </div>

      <Section title="Recent payments">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>
                <Badge variant="success">Paid</Badge>
              </TableCell>
              <TableCell>SGD 120.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Alex Tan</TableCell>
              <TableCell>
                <Badge variant="warning">Pending</Badge>
              </TableCell>
              <TableCell>SGD 48.50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mei Wong</TableCell>
              <TableCell>
                <Badge variant="secondary">Draft</Badge>
              </TableCell>
              <TableCell>SGD 16.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>
    </main>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-base font-semibold text-[#03102f]">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  )
}
