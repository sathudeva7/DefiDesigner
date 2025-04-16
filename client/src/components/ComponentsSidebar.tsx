import React, { useState } from "react";
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
        <CollapsibleTrigger className="flex items-center justify-between w-full focus:outline-none">
          <span className="font-medium text-text-primary">{title}</span>
          <span className="text-text-muted text-xs">{isOpen ? "▼" : "►"}</span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="p-3 pt-0">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const ComponentsSidebar = ({ editor }: ComponentsSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to create a component block
  const createBlockItem = (id: string, label: string, content: string, icon: string = "C") => {
    return (
      <div 
        key={id}
        className="bg-item-bg rounded p-2 mb-2 cursor-move flex items-center text-sm hover:bg-opacity-70 transition-colors duration-150"
        draggable={true}
        onDragStart={(e) => {
          // Set data for drag operation
          e.dataTransfer.setData('blockId', id);
          e.dataTransfer.effectAllowed = 'copy';
        }}
        onClick={() => {
          // Fallback - add component on click
          if (editor) {
            editor.addComponents(`<div data-gjs-type="wrapper">${content}</div>`);
          }
        }}
      >
        <div className="w-8 h-8 bg-panel-bg rounded flex items-center justify-center text-primary mr-2">
          {icon}
        </div>
        <span>{label}</span>
      </div>
    );
  };

  // This will render hardcoded blocks for each category
  const renderBlocks = (category: string) => {
    if (category === "Basic") {
      return (
        <>
          {createBlockItem("text", "Text", '<div data-gjs-type="text">Insert your text here</div>', "T")}
          {createBlockItem("image", "Image", '<img src="https://via.placeholder.com/350x150" alt="Placeholder" />', "I")}
          {createBlockItem("button", "Button", '<button style="padding: 10px 20px; background-color: #6e56cf; color: white; border: none; border-radius: 4px;">Click Me</button>', "B")}
        </>
      );
    }
    
    if (category === "DeFi Components") {
      return (
        <>
          {createBlockItem("connect-wallet-button", "Connect Wallet Button", 
            '<button style="display: inline-block; padding: 10px 20px; background-color: #6e56cf; color: white; border: none; border-radius: 4px; font-family: sans-serif; font-size: 14px; font-weight: 500; cursor: pointer;">Connect Wallet</button>',
            "W")}
          {createBlockItem("token-swap-widget", "Token Swap Widget", 
            '<div style="background-color: #1c1c22; padding: 20px; border-radius: 8px; border: 1px solid #2a2a35; width: 250px;"><h3 style="font-size: 16px; margin-bottom: 10px; color: white;">Swap Tokens</h3><div style="margin-bottom: 15px;"><input type="text" placeholder="0.0" style="width: 100%; background: #252530; border: none; padding: 10px; color: white; border-radius: 4px;"></div><div style="margin-bottom: 15px;"><input type="text" placeholder="0.0" style="width: 100%; background: #252530; border: none; padding: 10px; color: white; border-radius: 4px;"></div><button style="width: 100%; padding: 8px 0; background-color: #3694ff; color: white; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;">Swap Now</button></div>',
            "S")}
          {createBlockItem("lending-pool-panel", "Lending Pool Panel", 
            '<div style="background-color: #1c1c22; padding: 20px; border-radius: 8px; border: 1px solid #2a2a35; width: 300px;"><h3 style="font-size: 16px; margin-bottom: 15px; color: white;">Lending Pools</h3><div style="background: #252530; border-radius: 6px; padding: 12px; margin-bottom: 10px;"><div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span style="color: #a1a1aa;">ETH</span><span style="color: white;">4.5% APY</span></div><button style="width: 100%; padding: 8px 0; background-color: #6e56cf; color: white; border: none; border-radius: 4px; margin-top: 5px;">Supply</button></div><div style="background: #252530; border-radius: 6px; padding: 12px;"><div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span style="color: #a1a1aa;">USDC</span><span style="color: white;">3.2% APY</span></div><button style="width: 100%; padding: 8px 0; background-color: #6e56cf; color: white; border: none; border-radius: 4px; margin-top: 5px;">Supply</button></div></div>',
            "L")}
          {createBlockItem("yield-farming-section", "Yield Farming Section", 
            '<div style="background-color: #1c1c22; padding: 20px; border-radius: 8px; border: 1px solid #2a2a35; width: 100%; max-width: 600px;"><h2 style="font-size: 24px; margin-bottom: 20px; color: white;">Yield Farming</h2><div style="display: flex; flex-wrap: wrap; gap: 15px;"><div style="background: #252530; border-radius: 8px; padding: 15px; flex: 1;"><h3 style="font-size: 16px; margin-bottom: 10px; color: white;">ETH-USDC LP</h3><div style="color: #a1a1aa; margin-bottom: 5px;">APY: <span style="color: #4ade80;">24.5%</span></div><div style="color: #a1a1aa; margin-bottom: 12px;">TVL: $1.2M</div><button style="width: 100%; padding: 8px 0; background-color: #6e56cf; color: white; border: none; border-radius: 4px;">Farm</button></div><div style="background: #252530; border-radius: 8px; padding: 15px; flex: 1;"><h3 style="font-size: 16px; margin-bottom: 10px; color: white;">WBTC-ETH LP</h3><div style="color: #a1a1aa; margin-bottom: 5px;">APY: <span style="color: #4ade80;">18.2%</span></div><div style="color: #a1a1aa; margin-bottom: 12px;">TVL: $3.5M</div><button style="width: 100%; padding: 8px 0; background-color: #6e56cf; color: white; border: none; border-radius: 4px;">Farm</button></div></div></div>',
            "Y")}
          {createBlockItem("price-charts", "Price Charts", 
            '<div style="background-color: #1c1c22; padding: 20px; border-radius: 8px; border: 1px solid #2a2a35; width: 100%; max-width: 500px;"><h3 style="font-size: 18px; margin-bottom: 15px; color: white;">Price Chart - ETH/USD</h3><div style="height: 200px; background-color: #252530; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #6e56cf;">Price Chart Visualization</div><div style="display: flex; justify-content: space-between; margin-top: 15px;"><div style="color: #a1a1aa;">24h Change: <span style="color: #4ade80;">+2.4%</span></div><div style="color: white; font-weight: 500;">$2,485.75</div></div></div>',
            "C")}
        </>
      );
    }
    
    if (category === "Layouts") {
      return (
        <>
          {createBlockItem("hero-section", "Hero Section", 
            '<div style="padding: 32px; background: linear-gradient(to right, rgba(110, 86, 207, 0.2), rgba(54, 148, 255, 0.2)); text-align: center;"><h1 style="font-size: 36px; color: white; margin-bottom: 16px;">Create Your DeFi App</h1><p style="color: #e1e1e3; margin-bottom: 24px;">Build powerful decentralized applications easily.</p><button style="padding: 8px 24px; background-color: #6e56cf; color: white; border: none; border-radius: 6px; font-weight: 500;">Get Started</button></div>',
            "H")}
          {createBlockItem("two-columns", "Two Columns", 
            '<div style="display: flex; gap: 24px;"><div style="flex: 1; padding: 16px; background-color: #1c1c22; border-radius: 8px;"><h3 style="font-size: 18px; color: white; margin-bottom: 12px;">Column One</h3><p style="color: #a1a1aa;">Add your content here.</p></div><div style="flex: 1; padding: 16px; background-color: #1c1c22; border-radius: 8px;"><h3 style="font-size: 18px; color: white; margin-bottom: 12px;">Column Two</h3><p style="color: #a1a1aa;">Add your content here.</p></div></div>',
            "2C")}
          {createBlockItem("card-grid", "Card Grid", 
            '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;"><div style="background-color: #1c1c22; border-radius: 8px; overflow: hidden;"><div style="height: 150px; background-color: #252530;"></div><div style="padding: 16px;"><h3 style="font-size: 18px; color: white; margin-bottom: 8px;">Card Title</h3><p style="color: #a1a1aa; margin-bottom: 16px;">Card description goes here.</p><button style="padding: 8px 16px; background-color: #6e56cf; color: white; border: none; border-radius: 4px;">View</button></div></div><div style="background-color: #1c1c22; border-radius: 8px; overflow: hidden;"><div style="height: 150px; background-color: #252530;"></div><div style="padding: 16px;"><h3 style="font-size: 18px; color: white; margin-bottom: 8px;">Card Title</h3><p style="color: #a1a1aa; margin-bottom: 16px;">Card description goes here.</p><button style="padding: 8px 16px; background-color: #6e56cf; color: white; border: none; border-radius: 4px;">View</button></div></div><div style="background-color: #1c1c22; border-radius: 8px; overflow: hidden;"><div style="height: 150px; background-color: #252530;"></div><div style="padding: 16px;"><h3 style="font-size: 18px; color: white; margin-bottom: 8px;">Card Title</h3><p style="color: #a1a1aa; margin-bottom: 16px;">Card description goes here.</p><button style="padding: 8px 16px; background-color: #6e56cf; color: white; border: none; border-radius: 4px;">View</button></div></div></div>',
            "G")}
        </>
      );
    }
    
    // Default empty case
    return (
      <div className="text-text-muted text-sm p-2">No components found</div>
    );
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
          {renderBlocks("Basic")}
        </Category>
        
        <Category title="DeFi Components">
          {renderBlocks("DeFi Components")}
        </Category>
        
        <Category title="Layouts">
          {renderBlocks("Layouts")}
        </Category>
        
        {/* Add a hint about drag & drop */}
        <div className="p-4 text-center text-xs text-text-muted">
          <p>Drag components to the canvas or click to add</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentsSidebar;