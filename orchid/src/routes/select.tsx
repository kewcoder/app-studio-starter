import { createFileRoute } from '@tanstack/react-router'
import { DocExamplePage } from '@/components/doc/doc-example-page'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const Route = createFileRoute('/select')({
  component: SelectExamplesPage,
})

function SelectExamplesPage() {
  return (
    <DocExamplePage to="/select">
      <FieldGroup className="max-w-sm">
        <Field>
          <FieldLabel>Label</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Placeholder" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                <SelectItem value="one">Option one</SelectItem>
                <SelectItem value="two">Option two</SelectItem>
                <SelectItem value="three">Option three</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldDescription>This is a hint text to help user.</FieldDescription>
        </Field>
      </FieldGroup>
    </DocExamplePage>
  )
}
