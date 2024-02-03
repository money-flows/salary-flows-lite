import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil1Icon } from "@radix-ui/react-icons";

interface CareerCardProps {
  companyName: string;
  startMonth: string;
  endMonth: string;
  onEdit: () => void;
}

export function CareerCard({
  companyName,
  startMonth,
  endMonth,
  onEdit,
}: CareerCardProps) {
  return (
    <Card className="flex items-center justify-between p-6">
      <div className="space-y-1.5">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {companyName}
        </h3>
        <div className="text-muted-foreground text-sm">
          {`${startMonth} ~ ${endMonth}`}
        </div>
      </div>
      <Button
        className="rounded-xl"
        variant="secondary"
        size="icon"
        onClick={onEdit}
      >
        <Pencil1Icon />
      </Button>
    </Card>
  );
}
