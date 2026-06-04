"use client";

import Toolbox from "@/components/builder/Toolbox";
import Canvas from "@/components/builder/Canvas";
import PropertiesPanel from "@/components/builder/PropertiesPanel";

export default function BuilderPage() {
  return (
    <div className="flex h-screen">
      <Toolbox />
      <Canvas />
      <PropertiesPanel />
    </div>
  );
}
