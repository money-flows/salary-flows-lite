import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

interface Inputs {
  companyName: string;
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
}

interface BaseCareerDialogFormProps {
  onClose: () => void;
}

function BaseCareerDialogForm({ onClose }: BaseCareerDialogFormProps) {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      companyName: "",
      startYear: "2024",
      startMonth: "2",
      endYear: "",
      endMonth: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>企業名</Label>
            <Input {...register("companyName")} />
          </div>
          <div className="space-y-2">
            <Label>期間</Label>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Input
                  className="w-16 text-center"
                  {...register("startYear")}
                />
                <span>年</span>
                <Input
                  className="w-10 text-center"
                  {...register("startMonth")}
                />
                <span>月</span>
              </div>
              <span>〜</span>
              <div className="flex items-center gap-1.5">
                <Input className="w-16 text-center" {...register("endYear")} />
                <span>年</span>
                <Input className="w-10 text-center" {...register("endMonth")} />
                <span>月</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <Button type="submit" className="w-36">
            保存する
          </Button>
        </div>
      </form>
    </>
  );
}

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
