import FormRenderer from "@/components/from/FormRenderer";
import { exampleForm } from "@/lib/schema/exampleForm";

export default function Page() {
  return <FormRenderer schema={exampleForm} />;
}
