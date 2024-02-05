import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BaseCareerDialogForm } from "./base-career-dialog-form";

interface BaseCareerDialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function BaseCareerDialog({
  title,
  isOpen,
  onClose,
}: BaseCareerDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <BaseCareerDialogForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
