import { BaseCareerDialog } from "./components/base-career-dialog";
import { useNewCareerDialog } from "./use-new-career-dialog";

export function NewCareerDialog() {
  const { isOpen, onClose } = useNewCareerDialog();

  return (
    <BaseCareerDialog
      title="職歴を追加する"
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}
