import { createFileRoute } from '@tanstack/react-router'
import { DocExamplePage } from '@/components/doc/doc-example-page'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Toggle } from '@/components/ui/toggle'

export const Route = createFileRoute('/field')({
  component: FieldExamplesPage,
})

function FieldExamplesPage() {
  return (
    <DocExamplePage to="/field">
      <div className="grid max-w-xl gap-10">
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>This appears on invoices and emails.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel>Full name</FieldLabel>
              <FieldDescription>Input control will sit here.</FieldDescription>
            </Field>
            <Field data-invalid>
              <FieldLabel>Username</FieldLabel>
              <FieldError>Choose another username.</FieldError>
            </Field>
            <Field orientation="horizontal">
              <Toggle />
              <FieldLabel>Subscribe to the newsletter</FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend variant="label">Notifications</FieldLegend>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox />
              <FieldLabel>Email alerts</FieldLabel>
            </Field>
            <FieldSeparator>Or</FieldSeparator>
            <Field orientation="horizontal">
              <Checkbox />
              <FieldLabel>Push notifications</FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </DocExamplePage>
  )
}
