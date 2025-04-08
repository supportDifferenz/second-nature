import { PopupPropsTypes } from "@/components/types/type";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Popup: React.FC<PopupPropsTypes> = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    className = '',
  }) => {
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
    };
  
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className={`${sizeClasses[size]} ${className} p-0 overflow-hidden bg-white rounded-md`}>
          <div className="flex flex-col">
            {title && (
              <DialogHeader className="border-b px-4 py-3">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-lg font-medium">{title}</DialogTitle>
                  <Button 
                    className="h-8 w-8 p-0 rounded-full" 
                    onClick={onClose}
                  >
                    {/* <X className="h-4 w-4" /> */}
                  </Button>
                </div>
              </DialogHeader>
            )}
            
            <div className="p-4">
              {children}
            </div>
            
            {footer && (
              <DialogFooter className="border-t px-4 py-3 bg-gray-50">
                {footer}
              </DialogFooter>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };