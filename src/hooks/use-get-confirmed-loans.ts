import { Loan } from "@/contexts/loan-context";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface GetConfirmedLoansResponse {
  confirmedLoans: Loan[];
}

export function useGetConfirmedLoans() {
  const { data: confirmedloans, isPending: isGetConfirmedLoansPending } =
    useQuery({
      queryKey: ["confirmed-loans"],
      queryFn: handleGetConfirmedLoans,
      enabled: true,
    });

  async function handleGetConfirmedLoans() {
    const { data } = await api.get<GetConfirmedLoansResponse>("/loans");

    return data.confirmedLoans;
  }

  return { confirmedloans: confirmedloans ?? [], isGetConfirmedLoansPending };
}
