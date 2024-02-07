import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Period } from "./period";
import { formSchema, FormSchema, TransformedFormSchema } from "./form-schema";
import { CompanyName } from "./company-name";
import { SalaryTable } from "./salary-table";
import { useCareers } from "@/hooks/use-careers";
import { Career } from "@/types/career";

interface BaseCareerDialogFormProps {
  defaultValues?: Career;
  onClose: () => void;
}

export function BaseCareerDialogForm({
  defaultValues,
  onClose,
}: BaseCareerDialogFormProps) {
  const { addCareer } = useCareers();

  const form = useForm<FormSchema, any, TransformedFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: defaultValues?.companyName ?? "",
      startYear: `${defaultValues?.startYear ?? 2020}`,
      startMonth: `${defaultValues?.startMonth ?? 1}`,
      endYear: `${defaultValues?.endYear ?? 2020}`,
      endMonth: `${defaultValues?.endMonth ?? 12}`,
      validEndYear: defaultValues?.endYear ?? 2020,
      validEndMonth: defaultValues?.endMonth ?? 12,
      isCurrentlyEmployed: defaultValues?.isCurrentlyEmployed ?? false,
      salaries:
        defaultValues?.salaries.map((salary) => ({
          gross: `${salary.gross}`,
          net: `${salary.net}`,
        })) ??
        Array.from({ length: 12 }).map(() => ({
          gross: "0",
          net: "0",
        })),
    },
  });

  const onSubmit: SubmitHandler<TransformedFormSchema> = (data) => {
    addCareer({
      companyName: data.companyName,
      startYear: data.startYear,
      startMonth: data.startMonth,
      endYear: data.validEndYear,
      endMonth: data.validEndMonth,
      isCurrentlyEmployed: data.isCurrentlyEmployed,
      salaries: data.salaries.map((salary) => ({
        gross: salary.gross,
        net: salary.net,
      })),
    });
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
