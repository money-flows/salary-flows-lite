import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CareerCard } from "@/components/career-card";
import {
  EditCareerDialog,
  NewCareerDialog,
  useNewCareerDialog,
} from "@/components/career-dialog";
import { Card } from "./components/ui/card";
import { useCareers } from "./hooks/use-careers";

function ImportTabContent() {
  return (
    <Card className="flex flex-col space-y-4 p-4">
      <Button variant="default">楽天銀行（CSV形式）</Button>
    </Card>
  );
}

function ManualTabContent() {
  const { careers } = useCareers();
  const { onOpen } = useNewCareerDialog();

  return (
    <Card className="flex flex-col space-y-4 p-4">
      <Button variant="default" onClick={onOpen}>
        職歴を追加する
      </Button>

      {careers.map((career, index) => (
        <CareerCard key={index} career={career} />
      ))}
    </Card>
  );
}

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[40rem] flex-col gap-8 px-8 pt-16">
      <h1 className="text-center text-3xl font-bold">給与推移グラフ化ツール</h1>

      <Tabs defaultValue="import">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="import" className="font-semibold">
            外部データからインポート
          </TabsTrigger>
          <TabsTrigger value="manual" className="font-semibold">
            手入力
          </TabsTrigger>
        </TabsList>
        <TabsContent value="import">
          <ImportTabContent />
        </TabsContent>
        <TabsContent value="manual">
          <ManualTabContent />
        </TabsContent>
      </Tabs>

      <NewCareerDialog />
      <EditCareerDialog />
    </main>
  );
}

export default App;
