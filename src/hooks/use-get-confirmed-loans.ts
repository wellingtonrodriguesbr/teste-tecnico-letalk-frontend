import { Loan } from "@/contexts/loan-context";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

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
    try {
      const { data } = await api.get<GetConfirmedLoansResponse>("/loans");

      return data.confirmedLoans;
    } catch (error) {
      toast.error("Falha ao buscar empréstimos, recarregue a página.");
    }
  }

  return { confirmedloans: confirmedloans ?? [], isGetConfirmedLoansPending };
}
