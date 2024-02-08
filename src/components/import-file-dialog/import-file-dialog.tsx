import { AlertCircle, Upload } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Dropzone from "@/components/ui/dropzone";
import { useImportFileDialog } from "./use-import-file-dialog";

export function ImportFileDialog() {
  const { isOpen, onClose } = useImportFileDialog();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>外部データを取り込む</DialogTitle>
        </DialogHeader>
        <Alert variant="destructive" className="flex items-center gap-2">
          <div>
            <AlertCircle className="h-4 w-4" />
          </div>
          <AlertDescription className="font-semibold">
            外部データを取り込むと、現在のデータは上書きされます。
          </AlertDescription>
        </Alert>
        <Dropzone
          className="flex flex-col items-center justify-center min-h-64 space-y-4"
          onDrop={(files) => console.log(files)}
        >
          <Upload className="w-10 h-10 text-muted-foreground/50" />
          <div className="space-y-1 text-sm text-muted-foreground text-center">
            <p className="font-semibold">
              ここにファイルをドラッグ＆ドロップしてください。
            </p>
            <p>またはここをクリックして選択してください。</p>
          </div>
        </Dropzone>
      </DialogContent>
    </Dialog>
  );
}
