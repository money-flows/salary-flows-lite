import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Period } from "./period";
import { formSchema, FormSchema, TransformedFormSchema } from "./form-schema";
import { CompanyName } from "./company-name";
import { SalaryTable } from "./salary-table";

interface BaseCareerDialogFormProps {
  onClose: () => void;
}

export function BaseCareerDialogForm({ onClose }: BaseCareerDialogFormProps) {
  const form = useForm<FormSchema, any, TransformedFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      startYear: "2000",
      startMonth: "1",
      endYear: "2000",
      endMonth: "1",
      isCurrentlyEmployed: false,
      salaries: [{ gross: 0, net: 0 }],
    },
  });

  const onSubmit: SubmitHandler<TransformedFormSchema> = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-8">
          <CompanyName />
          <Period />
          <SalaryTable />
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
