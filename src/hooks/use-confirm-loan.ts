import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface ConfirmLoanProps {
  loanId: string;
}

export function useConfirmLoan() {
  const { mutateAsync: confirmLoan, isPending: isConfirmLoanPending } =
    useMutation({
      mutationFn: handleConfirmLoan,
    });

  async function handleConfirmLoan({ loanId }: ConfirmLoanProps) {
    const { data } = await api.patch("/loans/confirm", {
      loanId,
    });

    return data;
  }

  return { confirmLoan, isConfirmLoanPending };
}
