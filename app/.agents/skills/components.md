---
description: UI components and how to add screens. Use when building or changing pages. Follow the user's layout, not a single template.
---

# Screens

Compose from `@/ui/` only. Tokens live in `src/styles.css`. Merge classes with `cn()` from `@/lib/utils`. Icons: `lucide-react`. Files live in `src/orchid-ui/`; import them as `@/ui/…`.

Do **not** run `shadcn add` / `bunx shadcn add` from ui.shadcn.com or any other registry. Do **not** add `@radix-ui/*`. Primitives are Base UI (`@base-ui/react`). Do **not** put UI kit files in `src/components/ui`.

If a primitive is missing: create `src/orchid-ui/<name>.tsx` following `button.tsx` / `chip.tsx` (`cva`, Figma prop names, tokens in `styles.css`, relative imports between UI kit files). Then add a short entry below.

Add as many routes and layout regions as the request needs. Shared chrome goes in `__root.tsx`. SSR: first paint must not read `window`. HitPay user/role in the browser (`#/lib/hitpay`). Links via TanStack `Link` / `createFileRoute` — do not hardcode the app-id path.

```ts
import { Button } from '@/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'
import {
  Snackbar,
  SnackbarBody,
  SnackbarDescription,
  SnackbarIcon,
  SnackbarTitle,
} from '@/ui/snackbar'
import { Chip, UserChip } from '@/ui/chip'
import { ProgressBar } from '@/ui/progress-bar'
import { ListItem, ListItemBody, ListItemTitle } from '@/ui/list-item'
import { InputStepper } from '@/ui/input-stepper'
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/ui/accordion'
```

Do not use shadcn APIs (`variant="outline"`, `size="sm"`) as the primary API.

### Button

`type`: `Primary` | `Destructive` | `Secondary` (default `Primary`). Visual only — use `htmlType` for submit.  
`style`: `Default` | `Transparent` | `Border`.  
`size`: `Small` | `Default` | `Big`.  
`iconOnly`, `shape`: `Default` | `Circle`.  
`menu` / `additional`: split button.

```tsx
<Button type="Primary" style="Default">Save</Button>
<Button type="Secondary" style="Border">Cancel</Button>
<Button type="Primary" menu={<DropdownMenuItem>Edit</DropdownMenuItem>}>Actions</Button>
```

### Dropdown menu

Base UI `Menu`. Typical: `DropdownMenu`, `DropdownMenuTrigger` (`nativeButton` + `render={<Button … />}`), `DropdownMenuContent`, `DropdownMenuItem` (`variant="destructive"` for danger), `DropdownMenuSeparator`, groups/labels/checkbox/radio/sub.

### Snackbar

`color`: `Default` (success) | `Blue` | `Red` | `Orange` | `Grey`.  
`size`: `Small` | `Default` | `Big`.  
`action`: `Bottom` | `Right` (Big).  
`onClose` only if you need a close control. Parts: `SnackbarIcon`, `SnackbarBody`, `SnackbarTitle`, `SnackbarDescription`, `SnackbarAction`.

### Chip

`color`: `Blue` `Purple` `Orange` `Red` `LightRed` `White` `DarkBlue` `Grey` `Tosca` `Green`.  
`type`: `Background` | `Border` | `Transparent`. Optional `icon`, `onRemove`.  
`UserChip` `type`: `Owner` | `Admin` | `Manager` | `Cashier`.

### Accordion

`src/orchid-ui/accordion.tsx` — import `@/ui/accordion`. Base UI Accordion. `multiple` default true.

```tsx
<Accordion defaultValue={['a']}>
  <AccordionItem value="a">
    <AccordionTrigger title="Additional Information" description="Description" />
    <AccordionPanel>Content</AccordionPanel>
  </AccordionItem>
</Accordion>
```

`AccordionTrigger`: `title`, `description`, `leading`, `label` (e.g. Chip), `progress` `{ label, value }` (`value` 0–1), `trailing`, `chevron` (default true).

### Progress Bar

`src/orchid-ui/progress-bar.tsx` — import `@/ui/progress-bar`.

`size`: `Default` (8px track) | `Small` (5px). `value` and `max` (label `70/100`). Track is fluid width, not a fixed pixel width. `showLabel` default true.

### List Item

`src/orchid-ui/list-item.tsx` — import `@/ui/list-item`. Compose `ListItem` (`selected` for primary border), `ListItemBody`, `ListItemTitle`, `ListItemDescription`, `ListItemMeta` + `ListItemDetail`, `ListItemMedia` (64px thumbnail, e.g. page cover), `ListItemTrailing` (edit/delete + primary button, top right), `ListItemHoverActions` (edit/delete on hover, or `className="static flex"` inside trailing), `ListItemCopyRow`, `ListItemMore`, `ListItemLogo`, `ListItemMethod`. Fluid width. Use `Chip` and `Button` from the kit.

### Input Stepper

`src/orchid-ui/input-stepper.tsx` — import `@/ui/input-stepper`. Minus / plus steppers. Click the number to type. `value` / `defaultValue`, `min`, `max`, `step`, `onValueChange`.

