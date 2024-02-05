import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Period } from "./period";
import { Schema } from "./schema";
import { CompanyName } from "./company-name";

interface BaseCareerDialogFormProps {
  onClose: () => void;
}

export function BaseCareerDialogForm({ onClose }: BaseCareerDialogFormProps) {
  const form = useForm<Schema>({
    defaultValues: {
      companyName: "",
      isCurrentlyEmployed: false,
    },
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <CompanyName />
          <Period />
          <div className="flex items-center justify-center">
            <Button type="submit" className="w-36">
              保存する
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
