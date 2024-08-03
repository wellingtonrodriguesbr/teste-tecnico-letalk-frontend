import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface LoanInstallment {
  id: string;
  outstandingBalance: number;
  interest: number;
  adjustedBalance: number;
  installmentAmount: number;
  dueDate: string;
  loanId: string;
}

interface GetInstallmentsByLoanProps {
  loanId: string;
}

interface GetInstallmentsByLoanResponse {
  installments: LoanInstallment[];
}

export function useGetInstallmentsByLoan({
  loanId,
}: GetInstallmentsByLoanProps) {
  const { data: installments, isPending: isGetInstallmentsPending } = useQuery({
    queryKey: ["installments", loanId],
    queryFn: () => handleGetInstallments({ loanId }),
    enabled: !!loanId?.length,
  });

  async function handleGetInstallments({ loanId }: GetInstallmentsByLoanProps) {
    const { data } = await api.get<GetInstallmentsByLoanResponse>(
      `/loans/${loanId}/installments`
    );
    return data.installments;
  }

  return { installments: installments ?? [], isGetInstallmentsPending };
}
