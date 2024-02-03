import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

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

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>企業名</Label>
            <Input />
          </div>
          <div className="space-y-2">
            <Label>期間</Label>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Input className="w-16 text-center" />
                <span>年</span>
                <Input className="w-10 text-center" />
                <span>月</span>
              </div>
              <span>〜</span>
              <div className="flex items-center gap-1.5">
                <Input className="w-16 text-center" />
                <span>年</span>
                <Input className="w-10 text-center" />
                <span>月</span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={onClose}>
            保存する
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
