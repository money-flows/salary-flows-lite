import { Button } from "@/components/ui/button";
import { CareerCard } from "@/components/career-card";
import {
  EditCareerDialog,
  NewCareerDialog,
  useEditCareerDialog,
  useNewCareerDialog,
} from "@/components/career-dialog";
import { Card } from "./components/ui/card";

function App() {
  const { onOpen: onNewCareerDialogOpen } = useNewCareerDialog();
  const { onOpen: onEditCareerDialogOpen } = useEditCareerDialog();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[40rem] flex-col gap-8 px-8 pt-16">
      <h1 className="text-center text-3xl font-bold">給与推移グラフ化ツール</h1>

      <Card className="flex flex-col space-y-4 p-4">
        <Button variant="default" onClick={onNewCareerDialogOpen}>
          職歴を追加する
        </Button>

        <CareerCard
          companyName="株式会社AAA"
          startMonth="2022年5月"
          endMonth="2022年10月"
          onEdit={onEditCareerDialogOpen}
        />

        <CareerCard
          companyName="株式会社AAA"
          startMonth="2022年5月"
          endMonth="2022年10月"
          onEdit={onEditCareerDialogOpen}
        />

        <CareerCard
          companyName="株式会社AAA"
          startMonth="2022年5月"
          endMonth="2022年10月"
          onEdit={onEditCareerDialogOpen}
        />
      </Card>

      <NewCareerDialog />
      <EditCareerDialog />
    </main>
  );
}

export default App;
