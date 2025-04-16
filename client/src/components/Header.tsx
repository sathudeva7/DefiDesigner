import { Button } from "@/components/ui/button";
import { saveContent } from "@/lib/grapesjs-config";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  editor: any;
}

const Header = ({ editor }: HeaderProps) => {
  const { toast } = useToast();

  const handleSave = async () => {
    if (!editor) return;
    
    const content = saveContent(editor);
    
    try {
      // In a real app, we would save to the server here
      // await saveToServer(content);
      toast({
        title: "Project saved!",
        description: "Your project was successfully saved.",
      });
    } catch (error) {
      toast({
        title: "Save failed",
        description: "There was an error saving your project.",
        variant: "destructive",
      });
    }
  };

  const handlePreview = () => {
    const content = saveContent(editor);
    if (!content) return;
    
    // Open a new window with the preview
    const previewWindow = window.open("", "_blank");
    if (!previewWindow) return;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${content.css}</style>
        </head>
        <body>
          ${content.html}
          <script>${content.js}</script>
        </body>
      </html>
    `;
    
    previewWindow.document.open();
    previewWindow.document.write(html);
    previewWindow.document.close();
  };

  const handlePublish = () => {
    toast({
      title: "Publishing...",
      description: "This feature is not implemented yet.",
    });
  };

  return (
    <header className="flex items-center justify-between border-b border-border h-14 px-4 bg-panel-bg">
      <div className="flex items-center space-x-4">
        <div className="text-primary font-semibold text-xl">DeFi Builder</div>
        <div className="h-6 w-px bg-border"></div>
        <div className="flex space-x-3">
          <Button variant="ghost" size="sm">File</Button>
          <Button variant="ghost" size="sm">Edit</Button>
          <Button variant="ghost" size="sm">View</Button>
          <Button variant="ghost" size="sm">Help</Button>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Button 
          size="sm" 
          className="bg-primary hover:bg-primary-light text-white"
          onClick={handleSave}
        >
          Save
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          className="bg-item-bg"
          onClick={handlePreview}
        >
          Preview
        </Button>
        <Button 
          size="sm" 
          className="bg-secondary hover:bg-secondary-light text-white"
          onClick={handlePublish}
        >
          Publish
        </Button>
      </div>
    </header>
  );
};

export default Header;
