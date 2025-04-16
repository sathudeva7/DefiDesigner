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

  // Helper to create a demo block if none are found for a category
  const createDemoBlocks = (category: string) => {
    // If nothing is found for the category, let's create some demo blocks
    if (category === "DeFi Components" && editor) {
      // Add demo blocks for DeFi Components
      editor.BlockManager.add("demo-connect-wallet", {
        label: "Connect Wallet Button",
        category: "DeFi Components",
        content: `
          <button style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #6e56cf;
            color: white;
            border: none;
            border-radius: 4px;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          ">
            Connect Wallet
          </button>
        `,
      });
      
      editor.BlockManager.add("demo-token-swap", {
        label: "Token Swap Widget",
        category: "DeFi Components",
        content: `
          <div style="
            background-color: #1c1c22;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #2a2a35;
            width: 250px;
          ">
            <h3 style="font-size: 16px; margin-bottom: 10px; color: white;">Swap Tokens</h3>
            <div style="margin-bottom: 15px;">
              <input type="text" placeholder="0.0" style="
                width: 100%;
                background: #252530;
                border: none;
                padding: 10px;
                color: white;
                border-radius: 4px;
              ">
            </div>
            <div style="margin-bottom: 15px;">
              <input type="text" placeholder="0.0" style="
                width: 100%;
                background: #252530;
                border: none;
                padding: 10px;
                color: white;
                border-radius: 4px;
              ">
            </div>
            <button style="
              width: 100%;
              padding: 8px 0;
              background-color: #3694ff;
              color: white;
              border: none;
              border-radius: 6px;
              font-weight: 500;
              cursor: pointer;
            ">Swap Now</button>
          </div>
        `,
      });
    }
    
    if (category === "Layouts" && editor) {
      // Add demo blocks for Layouts
      editor.BlockManager.add("demo-hero-section", {
        label: "Hero Section",
        category: "Layouts",
        content: `
          <div style="
            padding: 32px;
            background: linear-gradient(to right, rgba(110, 86, 207, 0.2), rgba(54, 148, 255, 0.2));
            text-align: center;
          ">
            <h1 style="font-size: 36px; color: white; margin-bottom: 16px;">Create Your DeFi App</h1>
            <p style="color: #e1e1e3; margin-bottom: 24px;">Build powerful decentralized applications easily.</p>
            <button style="
              padding: 8px 24px;
              background-color: #6e56cf;
              color: white;
              border: none;
              border-radius: 6px;
              font-weight: 500;
            ">Get Started</button>
          </div>
        `,
      });
    }
  };
  
  // This will be populated when the editor is initialized
  const renderBlocks = (category: string) => {
    if (!editor) return null;
    
    // Call our helper to ensure blocks are created for each category
    createDemoBlocks(category);
    
    // Get blocks by category - different approach to access models
    const blocks: any[] = [];
    editor.BlockManager.getAll().each((block: any) => {
      // Category can be a string or an object with a label property
      const blockCategory = block.get('category');
      const blockLabel = block.get('label');
      const categoryName = typeof blockCategory === 'string' 
        ? blockCategory 
        : blockCategory && typeof blockCategory === 'object' && blockCategory.label 
          ? blockCategory.label 
          : '';
      
      // Log for debugging - include the full category object
      console.log(`Block: ${block.id}, Category:`, blockCategory);
      if (typeof blockCategory === 'object' && blockCategory !== null) {
        console.log('Object keys:', Object.keys(blockCategory));
      }
      
      if (categoryName === category && 
          (searchQuery.trim() === "" || blockLabel.toLowerCase().includes(searchQuery.toLowerCase()))) {
        blocks.push(block);
      }
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
