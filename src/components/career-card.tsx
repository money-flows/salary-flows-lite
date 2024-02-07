import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Career } from "@/types/career";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useEditCareerDialog } from "./career-dialog";
import { useCallback } from "react";

interface CareerCardProps {
  career: Career;
}

export function CareerCard({ career }: CareerCardProps) {
  const { onOpen } = useEditCareerDialog();

  const edit = useCallback(() => {
    onOpen(career);
  }, [onOpen, career]);

  return (
    <Card className="flex items-center justify-between p-6 gap-2">
      <div className="space-y-1.5">
        <h3 className="text-xl font-semibold tracking-tight">
          {career.companyName}
        </h3>
        <div className="text-muted-foreground text-sm">
          {`${career.startYear}年${career.startMonth}月 〜 ${career.endYear}年${career.endMonth}月`}
        </div>
      </div>
      <Button
        className="rounded-xl shrink-0"
        variant="secondary"
        size="icon"
        onClick={edit}
      >
        <Pencil1Icon />
      </Button>
    </Card>
  );
}
