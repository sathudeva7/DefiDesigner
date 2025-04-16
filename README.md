# DeFi Website Builder

A React-based drag-and-drop website builder for DeFi applications with GrapesJS integration.

## Features

- **Three-panel UI**: Components sidebar, builder canvas, and styles sidebar
- **Drag-and-drop functionality**: Easily drag DeFi components onto the canvas
- **DeFi-specific components**: Token swap widgets, lending pools, price charts, etc.
- **Responsive design previews**: Desktop, tablet, and mobile views
- **Modern dark theme**: Sleek interface with neon blue/purple accents

## Prerequisites

- Node.js 16+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/defi-website-builder.git
cd defi-website-builder
```

2. **Install dependencies**

```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm run dev
```

This will start both the backend Express server and the frontend Vite development server. The application will be available at:

- **Local URL**: http://localhost:5000

## Project Structure

- `/client` - Frontend React application
  - `/src/components` - React components
    - `/defi` - DeFi-specific components
    - `/layouts` - Layout components
    - `/ui` - UI components (using shadcn/ui)
  - `/src/lib` - Utility functions and GrapesJS configuration
  - `/src/pages` - Application pages
- `/server` - Backend Express server
- `/shared` - Shared types and schemas

## Key Components

- **ComponentsSidebar**: Left panel with draggable components
- **BuilderCanvas**: Central canvas for designing websites
- **StylesSidebar**: Right panel for styling selected components
- **DeFi Components**: 
  - ConnectWalletButton
  - TokenSwapWidget
  - LendingPoolPanel
  - YieldFarmingSection
  - PriceCharts

## Usage Guide

1. **Adding components**: Drag components from the left sidebar onto the canvas or click them to add
2. **Styling components**: Select a component on the canvas and use the right sidebar to style it
3. **Testing responsive design**: Use the device buttons in the top toolbar to switch between desktop, tablet, and mobile views
4. **Undo/Redo**: Use the undo and redo buttons in the top toolbar
5. **Zooming**: Use the zoom dropdown in the top toolbar to adjust the canvas view

## Technologies Used

- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui
- **Builder Engine**: GrapesJS
- **Backend**: Express, Node.js
- **State Management**: React Query
- **Routing**: Wouter

## Development Notes

- The application uses in-memory storage by default
- GrapesJS is configured with custom blocks for DeFi components
- Dark theme is implemented throughout the application for a modern look and feel
- Responsive design is fully supported with device preview options

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.