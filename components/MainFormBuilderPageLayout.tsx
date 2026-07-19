import Toolbox from "./builder/Toolbox";
import Canvas from "./builder/Canvas";
import PropertiesPanel from "./builder/PropertiesPanel";

export default function MainFormBuilderPageLayout() {
  return (
    <main className="grid h-screen grid-cols-[280px_minmax(0,1fr)_320px] overflow-hidden">
      <aside className="border-r">
        <Toolbox />
      </aside>

      <section className="overflow-auto">
        <Canvas />
      </section>

      <aside className="border-l">
        <PropertiesPanel />
      </aside>
    </main>
  );
}