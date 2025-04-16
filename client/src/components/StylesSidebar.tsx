import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface StylesSidebarProps {
  editor: any;
  selectedComponent: any;
}

interface StyleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const StyleSection = ({ title, children, defaultOpen = true }: StyleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-4">
      <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
        <div className="text-sm font-medium text-text-secondary">{title}</div>
        <i className={`fas fa-chevron-${isOpen ? 'down' : 'right'} text-text-muted text-xs`}></i>
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
};

const StylesSidebar = ({ editor, selectedComponent }: StylesSidebarProps) => {
  const [activeTab, setActiveTab] = useState("styles");
  const [componentName, setComponentName] = useState<string | null>(null);
  const [styleProperties, setStyleProperties] = useState<any>({
    width: '',
    height: '',
    padding: '',
    backgroundColor: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: '',
    color: '',
    lineHeight: '',
    borderStyle: '',
    borderWidth: '',
    borderRadius: '',
  });

  // Update component data when selected component changes
  useEffect(() => {
    if (selectedComponent) {
      setComponentName(selectedComponent.get('tagName') || selectedComponent.get('type'));
      
      // Get current styles from the component
      const styles = selectedComponent.getStyle();
      setStyleProperties({
        width: styles.width || '',
        height: styles.height || '',
        padding: styles.padding || '',
        backgroundColor: styles['background-color'] || '',
        fontFamily: styles['font-family'] || '',
        fontSize: styles['font-size'] || '',
        fontWeight: styles['font-weight'] || '',
        color: styles.color || '',
        lineHeight: styles['line-height'] || '',
        borderStyle: styles['border-style'] || '',
        borderWidth: styles['border-width'] || '',
        borderRadius: styles['border-radius'] || '',
      });
    } else {
      setComponentName(null);
      setStyleProperties({
        width: '',
        height: '',
        padding: '',
        backgroundColor: '',
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        color: '',
        lineHeight: '',
        borderStyle: '',
        borderWidth: '',
        borderRadius: '',
      });
    }
  }, [selectedComponent]);

  // Apply style changes to the selected component
  const handleStyleChange = (property: string, value: string) => {
    if (!selectedComponent) return;
    
    const styleObj: Record<string, string> = {};
    
    // Convert our property names to CSS property names
    const propertyMap: Record<string, string> = {
      backgroundColor: 'background-color',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontWeight: 'font-weight',
      lineHeight: 'line-height',
      borderStyle: 'border-style',
      borderWidth: 'border-width',
      borderRadius: 'border-radius',
    };
    
    const cssProperty = propertyMap[property] || property;
    styleObj[cssProperty] = value;
    
    selectedComponent.addStyle(styleObj);
    
    // Update our local state
    setStyleProperties({
      ...styleProperties,
      [property]: value,
    });
  };

  return (
    <div className="w-72 border-l border-border bg-panel-bg flex flex-col h-full">
      <div className="p-3 border-b border-border">
        <div className="text-sm font-semibold text-text-primary mb-3">Styles</div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-3">
            <TabsTrigger value="properties" className="text-sm">Properties</TabsTrigger>
            <TabsTrigger value="styles" className="text-sm">Styles</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="text-sm text-text-secondary mb-2">
          {selectedComponent 
            ? `Currently editing: ${componentName}`
            : "No component selected"}
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1 p-3">
        {!selectedComponent ? (
          <div className="text-text-muted text-sm p-2">
            Select a component to edit its styles
          </div>
        ) : (
          <TabsContent value="styles" className="mt-0">
            {/* Dimensions Panel */}
            <StyleSection title="Dimensions">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs text-text-muted mb-1">Width</Label>
                  <div className="flex">
                    <Input 
                      type="text" 
                      value={styleProperties.width} 
                      className="rounded-r-none"
                      onChange={(e) => handleStyleChange('width', e.target.value)}
                    />
                    <Select 
                      value="px" 
                      onValueChange={(value) => {
                        const numValue = styleProperties.width.replace(/[^0-9.]/g, '');
                        handleStyleChange('width', numValue + value);
                      }}
                    >
                      <SelectTrigger className="w-14 rounded-l-none">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="px">px</SelectItem>
                        <SelectItem value="%">%</SelectItem>
                        <SelectItem value="em">em</SelectItem>
                        <SelectItem value="rem">rem</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-text-muted mb-1">Height</Label>
                  <div className="flex">
                    <Input 
                      type="text" 
                      value={styleProperties.height} 
                      className="rounded-r-none"
                      onChange={(e) => handleStyleChange('height', e.target.value)}
                    />
                    <Select 
                      value="px" 
                      onValueChange={(value) => {
                        const numValue = styleProperties.height.replace(/[^0-9.]/g, '');
                        handleStyleChange('height', numValue + value);
                      }}
                    >
                      <SelectTrigger className="w-14 rounded-l-none">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="px">px</SelectItem>
                        <SelectItem value="%">%</SelectItem>
                        <SelectItem value="em">em</SelectItem>
                        <SelectItem value="rem">rem</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </StyleSection>
            
            {/* Spacing Panel */}
            <StyleSection title="Spacing">
              <div className="bg-item-bg p-3 rounded border border-border">
                <div className="bg-panel-bg p-4 rounded relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background text-xs text-text-muted p-1 w-10 h-10 flex items-center justify-center">
                      Box
                    </div>
                  </div>
                  
                  <div className="flex justify-between mb-1">
                    <Input
                      type="text"
                      value="32"
                      className="w-10 text-center bg-background text-text-muted text-xs p-1 h-6"
                      onChange={(e) => {
                        const padding = `${e.target.value}px ${styleProperties.padding.split(' ')[1] || e.target.value}px ${styleProperties.padding.split(' ')[2] || e.target.value}px ${styleProperties.padding.split(' ')[3] || e.target.value}px`;
                        handleStyleChange('padding', padding);
                      }}
                    />
                    <Input
                      type="text"
                      value="32"
                      className="w-10 text-center bg-background text-text-muted text-xs p-1 h-6"
                      onChange={(e) => {
                        const padding = `${styleProperties.padding.split(' ')[0] || e.target.value}px ${e.target.value}px ${styleProperties.padding.split(' ')[2] || e.target.value}px ${styleProperties.padding.split(' ')[3] || e.target.value}px`;
                        handleStyleChange('padding', padding);
                      }}
                    />
                    <Input
                      type="text"
                      value="32"
                      className="w-10 text-center bg-background text-text-muted text-xs p-1 h-6"
                      onChange={(e) => {
                        const padding = `${styleProperties.padding.split(' ')[0] || e.target.value}px ${styleProperties.padding.split(' ')[1] || e.target.value}px ${e.target.value}px ${styleProperties.padding.split(' ')[3] || e.target.value}px`;
                        handleStyleChange('padding', padding);
                      }}
                    />
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Input
                      type="text"
                      value="32"
                      className="w-10 text-center bg-background text-text-muted text-xs p-1 h-6"
                      onChange={(e) => {
                        const padding = `${styleProperties.padding.split(' ')[0] || e.target.value}px ${styleProperties.padding.split(' ')[1] || e.target.value}px ${styleProperties.padding.split(' ')[2] || e.target.value}px ${e.target.value}px`;
                        handleStyleChange('padding', padding);
                      }}
                    />
                    <Input
                      type="text"
                      value="32"
                      className="w-10 text-center bg-background text-text-muted text-xs p-1 h-6"
                    />
                    <Input
                      type="text"
                      value="32"
                      className="w-10 text-center bg-background text-text-muted text-xs p-1 h-6"
                    />
                  </div>
                </div>
              </div>
            </StyleSection>
            
            {/* Typography Panel */}
            <StyleSection title="Typography">
              <div className="space-y-3">
                <div>
                  <Label className="text-xs text-text-muted mb-1">Font Family</Label>
                  <Select 
                    value={styleProperties.fontFamily || "Inter"} 
                    onValueChange={(value) => handleStyleChange('fontFamily', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Inter">Inter</SelectItem>
                      <SelectItem value="Roboto">Roboto</SelectItem>
                      <SelectItem value="Poppins">Poppins</SelectItem>
                      <SelectItem value="Arial">Arial</SelectItem>
                      <SelectItem value="Helvetica">Helvetica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-text-muted mb-1">Size</Label>
                    <div className="flex">
                      <Input 
                        type="text" 
                        value={styleProperties.fontSize.replace(/[^0-9.]/g, '') || "16"} 
                        className="rounded-r-none"
                        onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)}
                      />
                      <Select 
                        value="px" 
                        onValueChange={(value) => {
                          const numValue = styleProperties.fontSize.replace(/[^0-9.]/g, '');
                          handleStyleChange('fontSize', `${numValue}${value}`);
                        }}
                      >
                        <SelectTrigger className="w-14 rounded-l-none">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="px">px</SelectItem>
                          <SelectItem value="em">em</SelectItem>
                          <SelectItem value="rem">rem</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-text-muted mb-1">Weight</Label>
                    <Select 
                      value={styleProperties.fontWeight || "400"} 
                      onValueChange={(value) => handleStyleChange('fontWeight', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Weight" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="400">Regular</SelectItem>
                        <SelectItem value="500">Medium</SelectItem>
                        <SelectItem value="600">Semibold</SelectItem>
                        <SelectItem value="700">Bold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-1">
                    <Label className="text-xs text-text-muted mb-1">Color</Label>
                    <div className="flex items-center bg-item-bg rounded border border-border p-1 h-9">
                      <div 
                        className="w-5 h-5 rounded-sm mr-1"
                        style={{ backgroundColor: styleProperties.color || '#FFFFFF' }}
                      ></div>
                      <Input 
                        type="text" 
                        value={styleProperties.color || "#FFFFFF"} 
                        className="bg-transparent border-0 h-7 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        onChange={(e) => handleStyleChange('color', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label className="text-xs text-text-muted mb-1">Line Height</Label>
                    <Input
                      type="text" 
                      value={styleProperties.lineHeight || "1.4"}
                      onChange={(e) => handleStyleChange('lineHeight', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </StyleSection>
            
            {/* Background Panel */}
            <StyleSection title="Background">
              <div className="space-y-3">
                <div>
                  <div className="flex space-x-2 mb-2">
                    <Button 
                      size="sm" 
                      variant={styleProperties.backgroundColor ? "default" : "outline"}
                      className="px-3 text-xs font-medium"
                    >
                      Color
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="px-3 text-xs font-medium"
                    >
                      Gradient
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="px-3 text-xs font-medium"
                    >
                      Image
                    </Button>
                  </div>
                  
                  <div className="flex items-center bg-item-bg rounded border border-border p-1 h-9">
                    <div 
                      className="w-5 h-5 rounded-sm mr-1"
                      style={{ backgroundColor: styleProperties.backgroundColor || 'rgba(110,86,207,0.2)' }}
                    ></div>
                    <Input 
                      type="text" 
                      value={styleProperties.backgroundColor || "rgba(110,86,207,0.2)"}
                      className="bg-transparent border-0 h-7 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </StyleSection>
            
            {/* Border Panel */}
            <StyleSection title="Border">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-text-muted mb-1">Style</Label>
                    <Select 
                      value={styleProperties.borderStyle || "none"} 
                      onValueChange={(value) => handleStyleChange('borderStyle', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="solid">Solid</SelectItem>
                        <SelectItem value="dashed">Dashed</SelectItem>
                        <SelectItem value="dotted">Dotted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs text-text-muted mb-1">Width</Label>
                    <div className="flex">
                      <Input 
                        type="text" 
                        value={styleProperties.borderWidth.replace(/[^0-9.]/g, '') || "0"} 
                        className="rounded-r-none"
                        onChange={(e) => handleStyleChange('borderWidth', `${e.target.value}px`)}
                      />
                      <Select value="px">
                        <SelectTrigger className="w-14 rounded-l-none">
                          <SelectValue placeholder="px" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="px">px</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs text-text-muted mb-1">Radius</Label>
                  <div className="flex">
                    <Input 
                      type="text" 
                      value={styleProperties.borderRadius.replace(/[^0-9.]/g, '') || "0"} 
                      className="rounded-r-none"
                      onChange={(e) => handleStyleChange('borderRadius', `${e.target.value}px`)}
                    />
                    <Select value="px">
                      <SelectTrigger className="w-14 rounded-l-none">
                        <SelectValue placeholder="px" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="px">px</SelectItem>
                        <SelectItem value="%">%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </StyleSection>
          </TabsContent>
        )}
      </div>
    </div>
  );
};

export default StylesSidebar;
