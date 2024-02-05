import { BaseCareerDialog } from "./components/base-career-dialog";
import { useEditCareerDialog } from "./use-edit-career-dialog";

export function EditCareerDialog() {
  const { isOpen, onClose } = useEditCareerDialog();

  return (
    <BaseCareerDialog
      title="職歴を編集する"
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}
