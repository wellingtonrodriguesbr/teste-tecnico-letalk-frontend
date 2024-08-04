import { Loan, useLoan } from "@/contexts/loan-context";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useWindowSize } from "react-use";

interface RequestNewLoanProps {
  customerDocumentNumber: string;
  customerBirthDate: string;
  customerState: string;
  loanAmountRequested: number;
  desiredInstallmentAmount: number;
}

interface RequestNewLoanResponse {
  loan: Loan;
}

export function useRequestNewLoan() {
  const { height } = useWindowSize();
  const { setLoan } = useLoan();

  const { mutateAsync: requestNewLoan, isPending: isRequestNewLoanPending } =
    useMutation({
      mutationFn: handleRequestNewLoan,
    });

  async function handleRequestNewLoan({
    customerDocumentNumber,
    customerState,
    customerBirthDate,
    loanAmountRequested,
    desiredInstallmentAmount,
  }: RequestNewLoanProps) {
    const { data } = await api.post<RequestNewLoanResponse>("/loans", {
      customerDocumentNumber,
      customerState,
      customerBirthDate,
      loanAmountRequested,
      desiredInstallmentAmount,
    });

    setLoan(data.loan);
    window.scrollTo({
      top: (height * 2) / 4,
      behavior: "smooth",
    });
    return data;
  }

  return { requestNewLoan, isRequestNewLoanPending };
}
