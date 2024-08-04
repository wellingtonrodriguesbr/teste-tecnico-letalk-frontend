import { LoanInfo } from "./loan-info";
import { LoanInstallmentsTable } from "./loan-installments-table";
import { useLoan } from "@/contexts/loan-context";
import { useGetInstallmentsByLoan } from "@/hooks/use-get-installments-by-loan";
import { ConfirmLoanAlert } from "./confirm-loan-alert";

export function LoanInstallments() {
  const { loan } = useLoan();
  const { installments, isGetInstallmentsPending } = useGetInstallmentsByLoan({
    loanId: loan.id,
  });

  return (
    <section
      data-hidden={installments ? installments.length === 0 : true}
      className="w-full mt-[4.5rem] data-[hidden=true]:hidden"
    >
      <header className="flex items-center justify-center">
        <h3 className="font-bold text-lg md:text-xl mb-[1.625rem] text-center">
          Veja a simulação para o seu empréstimo antes de efetivar
        </h3>
      </header>

      <div className="flex flex-col items-center gap-[4.56rem] rounded-[5px] border shadow-sm bg-white p-6 md:p-10">
        <LoanInfo />

        <div className="w-full space-y-4">
          <strong className="uppercase text-sm text-app-gray-700">
            Projeção das parcelas:
          </strong>
          <LoanInstallmentsTable
            installments={installments}
            isGetInstallmentsPending={isGetInstallmentsPending}
          />
        </div>
        <ConfirmLoanAlert loanId={loan.id} />
      </div>
    </section>
  );
}
