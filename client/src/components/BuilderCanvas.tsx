import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { initEditor, getDevices, setDevice } from "@/lib/grapesjs-config";
import "grapesjs/dist/css/grapes.min.css";

interface BuilderCanvasProps {
  setEditor: (editor: any) => void;
}

const BuilderCanvas = ({ setEditor }: BuilderCanvasProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorInstance = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current && !editorInstance.current) {
      try {
        // Initialize editor with all styling handled in the configuration
        const editor = initEditor(editorRef.current);
        editorInstance.current = editor;
        setEditor(editor);
        
        // Clean up
        return () => {
          if (editor) {
            editor.destroy();
            editorInstance.current = null;
          }
        };
      } catch (error) {
        console.error('Error initializing editor:', error);
      }
    }
  }, [setEditor]);

  const handleDeviceChange = (deviceId: string) => {
    if (editorInstance.current) {
      setDevice(editorInstance.current, deviceId);
    }
  };

  const handleUndo = () => {
    if (editorInstance.current) {
      editorInstance.current.UndoManager.undo();
    }
  };

  const handleRedo = () => {
    if (editorInstance.current) {
      editorInstance.current.UndoManager.redo();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      <div className="flex items-center justify-between p-2 border-b border-border bg-panel-bg">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleDeviceChange('desktop')}
          >
            <i className="fas fa-desktop text-text-secondary"></i>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleDeviceChange('tablet')}
          >
            <i className="fas fa-tablet-alt text-text-secondary"></i>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleDeviceChange('mobile')}
          >
            <i className="fas fa-mobile-alt text-text-secondary"></i>
          </Button>
          <div className="h-5 w-px bg-border mx-1"></div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={handleUndo}
          >
            <i className="fas fa-undo text-text-secondary"></i>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={handleRedo}
          >
            <i className="fas fa-redo text-text-secondary"></i>
          </Button>
        </div>
        <div>
          <Select defaultValue="100" onValueChange={(value) => {
            if (editorInstance.current) {
              const zoom = parseInt(value) / 100;
              editorInstance.current.Canvas.setZoom(zoom);
            }
          }}>
            <SelectTrigger className="w-24 h-8 text-sm bg-item-bg border-border">
              <SelectValue placeholder="Zoom" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50">50%</SelectItem>
              <SelectItem value="75">75%</SelectItem>
              <SelectItem value="100">100%</SelectItem>
              <SelectItem value="125">125%</SelectItem>
              <SelectItem value="150">150%</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto p-6 relative">
        <div 
          ref={editorRef} 
          className="h-full"
          style={{ 
            height: 'calc(100vh - 114px)',
            border: '1px solid hsl(var(--border))'
          }}
        />
      </div>
    </div>
  );
};

export default BuilderCanvas;
