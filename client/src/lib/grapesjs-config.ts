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

// Initialize GrapesJS editor with configuration
export const initEditor = (container: string | HTMLElement) => {
  const editor = grapesjs.init({
    container,
    height: "100%",
    width: "100%",
    fromElement: false,
    storageManager: false,
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
          properties: ["display", "flex-direction", "justify-content", "align-items", "gap"],
        },
        {
          name: "Extra",
          open: false,
          properties: ["opacity", "box-shadow", "transition"],
        },
      ],
    },
    plugins: [gjsBlocksBasic],
    pluginsOpts: {
      [gjsBlocksBasic]: {
        blocks: ["column1", "column2", "column3"],
        flexGrid: true,
      },
    },
  });

  // Register custom blocks - DeFi components
  editor.BlockManager.add("connect-wallet-button", {
    label: "Connect Wallet Button",
    category: "DeFi Components",
    media: `<div class="w-8 h-8 rounded bg-panel-bg flex items-center justify-center text-primary"><i class="fas fa-wallet text-sm"></i></div>`,
    content: ConnectWalletButton(),
  });

  editor.BlockManager.add("token-swap-widget", {
    label: "Token Swap Widget",
    category: "DeFi Components",
    media: `<div class="w-8 h-8 rounded bg-panel-bg flex items-center justify-center text-primary"><i class="fas fa-exchange-alt text-sm"></i></div>`,
    content: TokenSwapWidget(),
  });

  editor.BlockManager.add("lending-pool-panel", {
    label: "Lending Pool Panel",
    category: "DeFi Components",
    media: `<div class="w-8 h-8 rounded bg-panel-bg flex items-center justify-center text-primary"><i class="fas fa-coins text-sm"></i></div>`,
    content: LendingPoolPanel(),
  });

  editor.BlockManager.add("yield-farming-section", {
    label: "Yield Farming Section",
    category: "DeFi Components",
    media: `<div class="w-8 h-8 rounded bg-panel-bg flex items-center justify-center text-primary"><i class="fas fa-seedling text-sm"></i></div>`,
    content: YieldFarmingSection(),
  });

  editor.BlockManager.add("price-charts", {
    label: "Price Charts",
    category: "DeFi Components",
    media: `<div class="w-8 h-8 rounded bg-panel-bg flex items-center justify-center text-primary"><i class="fas fa-chart-line text-sm"></i></div>`,
    content: PriceCharts(),
  });

  // Register custom blocks - Layout components
  editor.BlockManager.add("hero-section", {
    label: "Hero Section",
    category: "Layouts",
    media: `<div class="w-8 h-8 rounded bg-panel-bg flex items-center justify-center text-primary"><i class="fas fa-th-large text-sm"></i></div>`,
    content: HeroSection(),
  });

  editor.BlockManager.add("two-columns", {
    label: "Two Columns",
    category: "Layouts",
    media: `<div class="w-8 h-8 rounded bg-panel-bg flex items-center justify-center text-primary"><i class="fas fa-columns text-sm"></i></div>`,
    content: TwoColumns(),
  });

  editor.BlockManager.add("card-grid", {
    label: "Card Grid",
    category: "Layouts",
    media: `<div class="w-8 h-8 rounded bg-panel-bg flex items-center justify-center text-primary"><i class="fas fa-th text-sm"></i></div>`,
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
    editor.setComponents(content.components ? JSON.parse(content.components) : content.html);
    editor.setStyle(content.styles ? JSON.parse(content.styles) : content.css);
  }
};
