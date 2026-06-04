import FormRenderer from "@/components/from-builder/FormRenderer";
import { exampleForm } from "@/lib/schema/exampleForm";

export default function Page() {
  return <FormRenderer schema={exampleForm} />;
}
