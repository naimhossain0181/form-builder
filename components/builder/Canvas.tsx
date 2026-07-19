
import TreeRenderer from "./TreeRenderer";

export default function Canvas() {
  return (
    <main className="overflow-auto bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl rounded-lg bg-white p-6 shadow">
        <TreeRenderer />
      </div>
    </main>
  );
}