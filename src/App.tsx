import { Button } from "@/components/ui/button";
import { CareerCard } from "@/components/career-card";
import {
  EditCareerDialog,
  NewCareerDialog,
  useNewCareerDialog,
} from "@/components/career-dialog";
import { Card } from "./components/ui/card";
import { useCareers } from "./hooks/use-careers";

function App() {
  const { careers } = useCareers();
  const { onOpen } = useNewCareerDialog();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[40rem] flex-col gap-8 px-8 pt-16">
      <h1 className="text-center text-3xl font-bold">給与推移グラフ化ツール</h1>

      <Card className="flex flex-col space-y-4 p-4">
        <Button variant="default" onClick={onOpen}>
          職歴を追加する
        </Button>

        {careers.map((career, index) => (
          <CareerCard key={index} career={career} />
        ))}
      </Card>

      <NewCareerDialog />
      <EditCareerDialog />
    </main>
  );
}

export default App;
