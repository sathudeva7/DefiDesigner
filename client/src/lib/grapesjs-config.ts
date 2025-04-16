import grapesjs from "grapesjs";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import ConnectWalletButton from "@/components/defi/ConnectWalletButton";
import TokenSwapWidget from "@/components/defi/TokenSwapWidget";
import LendingPoolPanel from "@/components/defi/LendingPoolPanel";
import YieldFarmingSection from "@/components/defi/YieldFarmingSection";
import PriceCharts from "@/components/defi/PriceCharts";
import HeroSection from "@/components/layouts/HeroSection";
import TwoColumns from "@/components/layouts/TwoColumns";
import CardGrid from "@/components/layouts/CardGrid";
import ConnectWalletFn from "@/func/ConnectWalletFn";

// Initialize GrapesJS editor with configuration
export const initEditor = (container: string | HTMLElement) => {
  const editor = grapesjs.init({
    container,
    height: "100%",
    width: "100%",
    fromElement: false,
    storageManager: false,
    canvas: {
      styles: [
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      ],
    },
    deviceManager: {
      devices: [
        {
          id: "desktop",
          name: "Desktop",
          width: "",
        },
        {
          id: "tablet",
          name: "Tablet",
          width: "768px",
          widthMedia: "768px",
        },
        {
          id: "mobile",
          name: "Mobile",
          width: "320px",
          widthMedia: "320px",
        },
      ],
    },
    // Fix for lastComponent error
    components: `
      <div style="padding: 20px; min-height: 300px;">
        <!-- Empty canvas with some minimal content -->
        <h1 style="font-family: 'Inter', sans-serif; color: #ffffff;">Drop components here</h1>
      </div>
    `,
    panels: {
      defaults: [],
    },
    styleManager: {
      sectors: [
        {
          name: "Dimensions",
          open: false,
          properties: [
            "width",
            "height",
            "max-width",
            "min-height",
            "margin",
            "padding",
          ],
        },
        {
          name: "Typography",
          open: false,
          properties: [
            "font-family",
            "font-size",
            "font-weight",
            "letter-spacing",
            "color",
            "line-height",
            "text-align",
            "text-decoration",
            "text-shadow",
          ],
        },
        {
          name: "Background",
          open: false,
          properties: [
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-size",
          ],
        },
        {
          name: "Border",
          open: false,
          properties: [
            "border-width",
            "border-style",
            "border-color",
            "border-radius",
          ],
        },
        {
          name: "Flex",
          open: false,
          properties: [
            "display",
            "flex-direction",
            "justify-content",
            "align-items",
            "gap",
          ],
        },
        {
          name: "Extra",
          open: false,
          properties: ["opacity", "box-shadow", "transition"],
        },
      ],
    },
    scripts: [
      "https://cdn.tailwindcss.com",
      "https://cdn.jsdelivr.net/npm/ethers/dist/ethers.min.js",
    ],
    plugins: [gjsBlocksBasic, ConnectWalletFn],
    pluginsOpts: {
      "grapesjs-blocks-basic": {
        blocks: ["column1", "column2", "column3"],
        flexGrid: true,
      },
    },
  });

  // Create categories before adding blocks
  editor.BlockManager.getCategories().reset();
  const categories = editor.BlockManager.getCategories();
  categories.add([
    { id: "basic", label: "Basic" },
    { id: "defi", label: "DeFi Components" },
    { id: "layouts", label: "Layouts" },
  ]);

  // Delete all existing blocks to avoid duplicates
  editor.BlockManager.getAll().reset();

  // Add basic blocks
  editor.BlockManager.add("text", {
    label: "Text",
    category: { id: "basic", label: "Basic" },
    content: '<div data-gjs-type="text">Insert your text here</div>',
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">T</div>`,
  });

  editor.BlockManager.add("image", {
    label: "Image",
    category: { id: "basic", label: "Basic" },
    content: { type: "image" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">I</div>`,
  });

  editor.BlockManager.add("button", {
    label: "Button",
    category: { id: "basic", label: "Basic" },
    content: '<button class="button">Click me</button>',
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">B</div>`,
  });

  // Register custom blocks - DeFi components
  editor.BlockManager.add("connect-wallet-button", {
    label: "Connect Wallet Button",
    category: { id: "defi", label: "DeFi Components" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">W</div>`,
    content: ConnectWalletButton(),
  });

  editor.BlockManager.add("token-swap-widget", {
    label: "Token Swap Widget",
    category: { id: "defi", label: "DeFi Components" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">S</div>`,
    content: TokenSwapWidget(),
  });

  editor.BlockManager.add("lending-pool-panel", {
    label: "Lending Pool Panel",
    category: { id: "defi", label: "DeFi Components" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">L</div>`,
    content: LendingPoolPanel(),
  });

  editor.BlockManager.add("yield-farming-section", {
    label: "Yield Farming Section",
    category: { id: "defi", label: "DeFi Components" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">Y</div>`,
    content: YieldFarmingSection(),
  });

  editor.BlockManager.add("price-charts", {
    label: "Price Charts",
    category: { id: "defi", label: "DeFi Components" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">C</div>`,
    content: PriceCharts(),
  });

  // Register custom blocks - Layout components
  editor.BlockManager.add("hero-section", {
    label: "Hero Section",
    category: { id: "layouts", label: "Layouts" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">H</div>`,
    content: HeroSection(),
  });

  editor.BlockManager.add("two-columns", {
    label: "Two Columns",
    category: { id: "layouts", label: "Layouts" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">2C</div>`,
    content: TwoColumns(),
  });

  editor.BlockManager.add("card-grid", {
    label: "Card Grid",
    category: { id: "layouts", label: "Layouts" },
    media: `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;background-color:#252530;border-radius:4px;color:#6e56cf;">G</div>`,
    content: CardGrid(),
  });

  return editor;
};

// Helper to get device breakpoints
export const getDevices = (editor: any) => {
  return editor ? editor.DeviceManager.getDevices() : [];
};

// Helper to get current selected device
export const getCurrentDevice = (editor: any) => {
  return editor ? editor.DeviceManager.getDeviceModel() : null;
};

// Helper to change device
export const setDevice = (editor: any, deviceId: string) => {
  if (editor) {
    editor.DeviceManager.select(deviceId);
  }
};

// Helper to save the editor content
export const saveContent = (editor: any) => {
  if (editor) {
    return {
      html: editor.getHtml(),
      css: editor.getCss(),
      js: editor.getJs(),
      components: JSON.stringify(editor.getComponents()),
      styles: JSON.stringify(editor.getStyle()),
    };
  }
  return null;
};

// Helper to load content into the editor
export const loadContent = (editor: any, content: any) => {
  if (editor && content) {
    editor.setComponents(
      content.components ? JSON.parse(content.components) : content.html
    );
    editor.setStyle(content.styles ? JSON.parse(content.styles) : content.css);
  }
};
