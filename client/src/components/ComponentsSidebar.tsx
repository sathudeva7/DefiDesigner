import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ComponentsSidebarProps {
  editor: any;
}

interface CategoryProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Category = ({ title, children, defaultOpen = true }: CategoryProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-border">
      <div className="p-3">
        <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
          <div className="text-sm font-medium text-text-secondary">{title}</div>
          <span className="text-text-muted text-xs">{isOpen ? '▼' : '▶'}</span>
        </CollapsibleTrigger>
        <CollapsibleContent>{children}</CollapsibleContent>
      </div>
    </Collapsible>
  );
};

const ComponentsSidebar = ({ editor }: ComponentsSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  // This will be populated when the editor is initialized
  const renderBlocks = (category: string) => {
    if (!editor) return null;
    
    const blocks = editor.BlockManager.getAll().filter((block: any) => {
      const matchesCategory = block.get('category') === category;
      const matchesSearch = searchQuery.trim() === "" || 
        block.get('label').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    return blocks.map((block: any) => (
      <div 
        key={block.id}
        className="bg-item-bg rounded p-2 mb-2 cursor-move flex items-center text-sm hover:bg-opacity-70 transition-colors duration-150"
        onMouseDown={() => {
          editor.addComponents(`<div data-gjs-type="wrapper">${block.get('content')}</div>`);
        }}
      >
        <div className="w-8 h-8 bg-panel-bg rounded flex items-center justify-center text-primary mr-2"
          dangerouslySetInnerHTML={{ __html: block.get('media') }}
        />
        <span>{block.get('label')}</span>
      </div>
    ));
  };

  return (
    <div className="w-64 border-r border-border bg-panel-bg flex flex-col h-full">
      <div className="p-3 border-b border-border">
        <div className="text-sm font-semibold text-text-primary mb-2">Components</div>
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search components..." 
            className="bg-item-bg text-text-secondary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute right-3 top-2 text-text-muted text-xs">🔍</span>
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1">
        <Category title="Basics">
          {editor ? renderBlocks("Basic") : (
            <div className="text-text-muted text-sm p-2">Loading components...</div>
          )}
        </Category>
        
        <Category title="DeFi Components">
          {editor ? renderBlocks("DeFi Components") : (
            <div className="text-text-muted text-sm p-2">Loading components...</div>
          )}
        </Category>
        
        <Category title="Layouts">
          {editor ? renderBlocks("Layouts") : (
            <div className="text-text-muted text-sm p-2">Loading components...</div>
          )}
        </Category>
      </div>
    </div>
  );
};

export default ComponentsSidebar;
