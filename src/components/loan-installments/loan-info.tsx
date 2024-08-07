import { useLoan } from "@/contexts/loan-context";
import { LoanInfoItem } from "./loan-info-item";
import { formatCurrency } from "@/utils/format-currency";

export function LoanInfo() {
  const { loan } = useLoan();

  if (!loan) {
    return null;
  }

  const formattedLoanDetails = {
    loanAmountRequested: formatCurrency(loan.loanAmountRequested?.toString()),
    interestRate: `${parseFloat((loan.interestRate * 100).toFixed(1))}% ao mês`,
    desiredInstallmentAmount: formatCurrency(
      loan.desiredInstallmentAmount?.toString()
    ),
    totalMonths: `${loan.installments} meses`,
    totalInterestRateAmount: formatCurrency(
      loan.totalInterestRateAmount?.toString()
    ),
    totalAmount: formatCurrency(loan.totalAmount?.toString()),
  };

  const loanInfoItems = [
    {
      description: "Valor requerido:",
      value: formattedLoanDetails.loanAmountRequested,
    },
    { description: "Taxa de juros:", value: formattedLoanDetails.interestRate },
    {
      description: "Valor que deseja pagar por mês:",
      value: formattedLoanDetails.desiredInstallmentAmount,
    },
    {
      description: "Total de meses para quitar:",
      value: formattedLoanDetails.totalMonths,
    },
    {
      description: "Total de juros:",
      value: formattedLoanDetails.totalInterestRateAmount,
    },
    { description: "Total a pagar:", value: formattedLoanDetails.totalAmount },
  ];

  return (
    <ul className="grid grid-cols-2 xl:grid-cols-3 gap-6 md:gap-[4.375rem]">
      {loanInfoItems.map((item, index) => (
        <LoanInfoItem
          key={index}
          description={item.description}
          value={item.value ?? ""}
        />
      ))}
    </ul>
  );
}
