import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CareerCard } from "./components/career-card";

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[40rem] flex-col gap-8 px-8 pt-16">
      <h1 className="text-center text-3xl font-bold">給与推移グラフ化ツール</h1>

      <div className="flex flex-col space-y-4">
        <Button variant="default" onClick={() => alert("追加")}>
          職歴を追加する
        </Button>

        <CareerCard
          companyName="株式会社AAA"
          startMonth="2022年5月"
          endMonth="2022年10月"
          onEdit={() => alert("編集")}
        />

        <CareerCard
          companyName="株式会社AAA"
          startMonth="2022年5月"
          endMonth="2022年10月"
          onEdit={() => alert("編集")}
        />

        <CareerCard
          companyName="株式会社AAA"
          startMonth="2022年5月"
          endMonth="2022年10月"
          onEdit={() => alert("編集")}
        />
      </div>
    </main>
  );
}

export default App;
