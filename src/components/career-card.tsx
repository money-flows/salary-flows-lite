import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Career } from "@/types/career";
import { Pencil1Icon } from "@radix-ui/react-icons";

interface CareerCardProps {
  career: Career;
  onEdit: () => void;
}

export function CareerCard({ career, onEdit }: CareerCardProps) {
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
        onClick={onEdit}
      >
        <Pencil1Icon />
      </Button>
    </Card>
  );
}
