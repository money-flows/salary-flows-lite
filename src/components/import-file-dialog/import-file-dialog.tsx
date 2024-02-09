import { AlertCircle, Upload } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Dropzone from "@/components/ui/dropzone";
import { Stepper, StepperItem, useStepper } from "@/components/ui/stepper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useImportFileDialog } from "./use-import-file-dialog";
import { parseRakutenBankCsvFile } from "./parsers/rankuten-bank-csv";
import { Card } from "../ui/card";
import { formatDate } from "@/utils/date";

const steps = [
  { id: 0, label: "ファイルをアップロード" },
  { id: 1, label: "取り込み設定" },
];

function FileUploadStepperContent() {
  const { nextStep } = useStepper();
  const { setTransactions } = useImportFileDialog();

  return (
    <>
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
        onDrop={async (files) => {
          if (files && files.length === 1) {
            const transactions = await parseRakutenBankCsvFile(files[0]);
            console.log({ transactions });
            setTransactions(transactions);
            nextStep();
          }
        }}
      >
        <Upload className="w-10 h-10 text-muted-foreground/50" />
        <div className="space-y-1 text-sm text-muted-foreground text-center">
          <p className="font-semibold">
            ここにファイルをドラッグ＆ドロップしてください。
          </p>
          <p>またはここをクリックして選択してください。</p>
        </div>
      </Dropzone>
    </>
  );
}

function ImportStepperContent() {
  const { transactions } = useImportFileDialog();

  if (!transactions) {
    throw new Error("`transactions` is undefined");
  }

  return (
    <div className="flex min-h-96 space-x-4 text-sm">
      <div className="w-1/2">
        <Card>
          <Table
            className="grid"
            containerClassName="overflow-auto relative h-96"
          >
            <TableHeader className="sticky top-0 z-10 grid rounded-lg bg-white">
              <TableRow className="flex w-full">
                <TableHead className="flex w-4/12 items-center">
                  取引日
                </TableHead>
                <TableHead className="flex w-2/12 items-center">
                  入金額
                </TableHead>
                <TableHead className="flex w-6/12 items-center">
                  入金内容
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody
              style={{ height: `${transactions.length * 60}px` }}
              className="relative grid"
            >
              {transactions.map((transaction, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  style={{ transform: `translateY(${60 * rowIndex}px)` }}
                  className="absolute flex h-[60px] w-full"
                >
                  <TableCell className="flex w-4/12 items-center">
                    {formatDate(transaction.date)}
                  </TableCell>
                  <TableCell className="flex w-2/12 items-center justify-end">
                    {transaction.amount}
                  </TableCell>
                  <TableCell className="flex w-6/12 items-center">
                    {transaction.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
      <div className="w-1/2">TODO</div>
    </div>
  );
}

export function ImportFileDialog() {
  const { isOpen, onClose } = useImportFileDialog();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[64rem]">
        <DialogHeader>
          <DialogTitle>外部データを取り込む</DialogTitle>
        </DialogHeader>
        <Stepper initialStep={0} steps={steps} isClickable={false}>
          <StepperItem>
            <FileUploadStepperContent />
          </StepperItem>
          <StepperItem>
            <ImportStepperContent />
          </StepperItem>
        </Stepper>
      </DialogContent>
    </Dialog>
  );
}
