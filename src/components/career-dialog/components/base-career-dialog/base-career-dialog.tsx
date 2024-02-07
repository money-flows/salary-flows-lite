import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BaseCareerDialogForm } from "./base-career-dialog-form";
import { Career } from "@/types/career";

interface BaseCareerDialogProps {
  title: string;
  defaultValues?: Career;
  isOpen: boolean;
  onClose: () => void;
}

export function BaseCareerDialog({
  title,
  defaultValues,
  isOpen,
  onClose,
}: BaseCareerDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <BaseCareerDialogForm defaultValues={defaultValues} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
