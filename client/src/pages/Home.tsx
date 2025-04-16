import { useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import Header from "@/components/Header";
import ComponentsSidebar from "@/components/ComponentsSidebar";
import BuilderCanvas from "@/components/BuilderCanvas";
import StylesSidebar from "@/components/StylesSidebar";

const Home = () => {
  const [editor, setEditor] = useState<any>(null);
  const [selectedComponent, setSelectedComponent] = useState<any>(null);

  // Handle editor component selection
  useEffect(() => {
    if (editor) {
      editor.on("component:selected", (component: any) => {
        setSelectedComponent(component);
      });

      editor.on("component:deselected", () => {
        setSelectedComponent(null);
      });

      return () => {
        editor.off("component:selected");
        editor.off("component:deselected");
      };
    }
  }, [editor]);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <Header editor={editor} />
      <div className="flex flex-1 overflow-hidden">
        <ComponentsSidebar editor={editor} />
        <BuilderCanvas setEditor={setEditor} />
        <StylesSidebar editor={editor} selectedComponent={selectedComponent} />
      </div>
    </div>
  );
};

export default Home;
