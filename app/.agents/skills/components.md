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
import { Avatar } from '@/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip'
import { TabMenu, TabMenuList, TabMenuPanel, TabMenuTab } from '@/ui/tab-menu'
import { ClickableOption, ClickableOptionGroup } from '@/ui/clickable-option'
import { OverviewItem } from '@/ui/overview-item'
import { SubHeader } from '@/ui/sub-header'
import { PageTitle } from '@/ui/page-title'
import {
  BoxDetail,
  BoxDetailGrid,
  BoxDetailHeader,
  BoxDetailRow,
  BoxDetailTitle,
} from '@/ui/box-detail'
import {
  GroupIcon,
  GroupIconButton,
  GroupIconLink,
  GroupIconMenu,
} from '@/ui/group-icon'
import { CustomerCard } from '@/ui/customer-card'
import { Modal, ModalPopup, ModalTrigger } from '@/ui/modal'
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

### Avatar

`src/orchid-ui/avatar.tsx` — import `@/ui/avatar`. `size`: `24` `28` `32` `40` `48` `64` (default `32`). `type`: `Default` | `Business` | `Image`. Initials as children; `src` / `alt` for photos.

### Tooltip

`src/orchid-ui/tooltip.tsx` — import `@/ui/tooltip`. Wrap a tree in `TooltipProvider`. Compose `Tooltip`, `TooltipTrigger` (`nativeButton` + `render={<Button … />}`), `TooltipContent` (`side` `top` | `bottom` | `left` | `right`, `arrowHidden`).

### Tab Menu

`src/orchid-ui/tab-menu.tsx` — import `@/ui/tab-menu`. Base UI Tabs. `type`: `Default` (underline) | `Pills`. `size`: `Default` | `Big`. Compose `TabMenu`, `TabMenuList`, `TabMenuTab` (`value`, optional `icon`, `count`), `TabMenuPanel`.

### Clickable Option

`src/orchid-ui/clickable-option.tsx` — import `@/ui/clickable-option`. Base UI Radio. Wrap in `ClickableOptionGroup` (`value` / `defaultValue`, `onValueChange`). Each `ClickableOption` needs `value`; optional `title`, `description`, `icon`.

### Overview Item

`src/orchid-ui/overview-item.tsx` — import `@/ui/overview-item`. Metric card: header (`icon`, `title`, optional `info` + `tooltip`) with a divider, then `content` plus outlined `percentValue` badge. `iconColor`: `Blue` | `Green` | `Red` | `Grey`. Optional `footer`, `transparent`, `loading`. Lay out several cards in a CSS grid (e.g. 4 columns). Wrap the page in `TooltipProvider` if using tooltips.

### Sub Header

`src/orchid-ui/sub-header.tsx` — import `@/ui/sub-header`. Left control only: `left` `Back` | `Close`, `onBack`. Right: `actions` (e.g. Buttons). Put `PageTitle` below, not inside Sub Header.

### Page Title

`src/orchid-ui/page-title.tsx` — import `@/ui/page-title`. Heading block. `title`, optional `description`, `chip`, `copyValue` (copy icon next to description), `loading`.

### Box Detail

`src/orchid-ui/box-detail.tsx` — import `@/ui/box-detail`. Labeled fields. Always one outer card border. `type`: `Default` (gaps between fields) | `Border` (table lines on every row/column). Compose `BoxDetail`, `BoxDetailHeader`, `BoxDetailTitle`, `BoxDetailGrid` (`columns`), `BoxDetailRow` (`label`, `alignment` `Horizontal` | `Vertical`, `size` `Small` | `Big`, `copyValue`, `colSpan` inside a grid).

### Group Icon

`src/orchid-ui/group-icon.tsx` — import `@/ui/group-icon`. Icon action cluster. `type`: `Default` | `Border`. Compose `GroupIcon`, `GroupIconButton`, `GroupIconLink` (opens a new tab), `GroupIconDivider`, `GroupIconMenu` (dropdown, uses horizontal ellipsis).

### Customer Card

`src/orchid-ui/customer-card.tsx` — import `@/ui/customer-card`. Profile card. `variant`: `Small` | `Big` | `Float`. Pass `customer` (`name`, `email`, `phone` / `phone_number`, `address`, optional `src`). `beneficiary` switches to bank fields (`currency`, `bank_name`, `bank_account_number`). Empty (no `customer`) shows Add customer (`onAdd`). `edit` + `hover`, `closable`, `onEdit`, `onClose`, `leading`, `bottom`.

### Modal

`src/orchid-ui/modal.tsx` — import `@/ui/modal`. Base UI Dialog. Wrap `ModalTrigger` + `ModalPopup` in `Modal`. `size`: `Small` | `Medium` | `Default`. `title`, `description`, `closeIcon`, `header`, `footer`, `borderless`, `persistent` (no backdrop close). Footer: `cancelLabel`, `confirmLabel`, `confirmType`, `onCancel`, `onConfirm`, or `footerContent`.

