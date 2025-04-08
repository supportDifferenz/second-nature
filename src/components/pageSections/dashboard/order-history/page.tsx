// components/ui/Popup.tsx
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Popup } from '@/components/molecules/popup/Popup';





// Usage examples based on your screenshots

// Example 1: Order Status Popup
export const OrderStatusPopup: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <Popup 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Order Status"
      footer={
        <div className="flex justify-center w-full">
          <Button 
            className="bg-primary text-white hover:bg-primary/90 px-8"
            onClick={onClose}
          >
            Continue
          </Button>
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center py-4">
        <div className="grid grid-cols-3 gap-6 mb-4">
          {['Pending', 'Processing', 'Delivered'].map((status) => (
            <div key={status} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-green-500">✓</span>
              </div>
              <span className="text-sm">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </Popup>
  );
};

// Example 2: Tracking Details Popup
export const TrackingPopup: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <Popup 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Tracking Info"
    >
      <div className="space-y-4">
        <p className="text-sm">Your order is currently being processed.</p>
        <div className="border p-3 rounded-md">
          <p className="text-sm font-medium">Tracking ID:</p>
          <p className="text-sm">TRK123456789</p>
        </div>
      </div>
    </Popup>
  );
};

// Example 3: Order Cancelation Popup
export const CancelOrderPopup: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Popup 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Cancel Order"
      footer={
        <div className="flex justify-between w-full">
          <Button 
            onClick={onClose}
          >
            Go Back
          </Button>
          <Button 
            className="bg-red-600 text-white hover:bg-red-700"
            onClick={onConfirm}
          >
            Confirm Cancelation
          </Button>
        </div>
      }
    >
      <div className="py-2">
        <p className="text-sm">Are you sure you want to cancel this order?</p>
        <p className="text-sm text-gray-500 mt-2">This action cannot be undone.</p>
      </div>
    </Popup>
  );
};

// Example 4: Review Order Popup
export const ReviewOrderPopup: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState('');

  return (
    <Popup 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Write a Review"
      footer={
        <div className="flex justify-end w-full">
          <Button 
            className="bg-primary text-white hover:bg-primary/90"
            onClick={() => onSubmit(rating, comment)}
          >
            Submit Review
          </Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`text-xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Your Comment</label>
          <textarea
            className="w-full border rounded-md p-2 min-h-24 text-sm"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this product..."
          />
        </div>
      </div>
    </Popup>
  );
};

// Example 5: Return Items Popup
export const ReturnItemsPopup: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [reason, setReason] = React.useState('');
  const reasons = ["Damaged item", "Wrong item", "No longer needed", "Other"];

  return (
    <Popup 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Return Request"
      footer={
        <div className="flex justify-between w-full">
          <Button 
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            className="bg-primary text-white hover:bg-primary/90"
            onClick={() => onSubmit(reason)}
          >
            Submit Request
          </Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Select Reason for Return</label>
          <select
            className="w-full border rounded-md p-2 text-sm"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="" disabled>Select a reason</option>
            {reasons.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        {reason === "Other" && (
          <div>
            <label className="block text-sm font-medium mb-1">Please specify</label>
            <textarea
              className="w-full border rounded-md p-2 min-h-20 text-sm"
              placeholder="Tell us why you're returning this item..."
            />
          </div>
        )}
      </div>
    </Popup>
  );
};