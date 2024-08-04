import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetConfirmedLoans } from "@/hooks/use-get-confirmed-loans";
import { formatCPF } from "@/utils/format-cpf";
import { formatCurrency } from "@/utils/format-currency";
import { LoansTableLoading } from "@/components/loaders/loans-table-loading";
import { Search } from "lucide-react";

import dayjs from "dayjs";

export function LoansTable() {
  const { confirmedloans, isGetConfirmedLoansPending } = useGetConfirmedLoans();

  return (
    <>
      {!isGetConfirmedLoansPending && confirmedloans.length === 0 ? (
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Search className="size-4" />
          <p>Nenhum empréstimo encontrado.</p>
        </div>
      ) : null}
      {isGetConfirmedLoansPending ? <LoansTableLoading /> : null}

      {!isGetConfirmedLoansPending && confirmedloans.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                CPF
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                Data de nascimento
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                UF
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                Valor do empréstimo
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                Porcentagem do juros
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                Valor desejado de parcela
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                Quantidade de parcelas
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                Total de juros
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                Total a pagar
              </TableHead>
              <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
                Solicitado em
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isGetConfirmedLoansPending &&
              confirmedloans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {formatCPF(loan.customerDocumentNumber)}
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {dayjs(loan.customerBirthDate).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {loan.customerState}
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {formatCurrency(loan.loanAmountRequested?.toString())}
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {parseFloat((loan.interestRate * 100).toFixed(1))}%
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {formatCurrency(loan.desiredInstallmentAmount?.toString())}
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {loan.installments}x
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {formatCurrency(loan.totalInterestRateAmount?.toString())}
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {formatCurrency(loan.totalAmount?.toString())}
                  </TableCell>
                  <TableCell className="text-app-gray-800 font-normal text-sm md:text-base text-nowrap">
                    {dayjs(loan.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
}
