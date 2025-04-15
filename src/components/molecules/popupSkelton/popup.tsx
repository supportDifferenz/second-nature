// components/molecules/popup/Popup.tsx
import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PopupPropsTypes } from '@/components/types/type';

export const Popup: React.FC<PopupPropsTypes> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  className = '',
}) => {
  const sizeClasses: Record<string, string> = {
    sm: 'max-w-fit',
    md: 'lg:min-w-[300px] max-w-[387px]',
    lg: 'max-w-[587px]',
    full: 'w-full max-w-none', // optional: full width modal
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={`p-0  bg-white rounded-2xl w-[85%] sm:w-[60%] lg:w-fit  ${sizeClasses[size] || sizeClasses['md']} ${className}`}
      >
        <div className="flex flex-col">
          {title && (
            <DialogHeader className="mb-8 px-7 pt-5">
              <DialogTitle className="h5 text-center text-primary-dark">
                {title}
              </DialogTitle>
            </DialogHeader>
          )}

          <div className='px-7 '>
            {children}
          </div>

          {footer && (
            <DialogFooter >
              {footer}
            </DialogFooter>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
