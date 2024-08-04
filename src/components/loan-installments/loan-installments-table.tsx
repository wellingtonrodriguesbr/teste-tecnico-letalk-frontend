import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LoanInstallment } from "@/hooks/use-get-installments-by-loan";
import { formatCurrency } from "@/utils/format-currency";

import dayjs from "dayjs";

interface LoanInstallmentsTableProps {
  installments: LoanInstallment[];
  isGetInstallmentsPending: boolean;
}

export function LoanInstallmentsTable({
  installments,
  isGetInstallmentsPending,
}: LoanInstallmentsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            Saldo devedor
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            Juros
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            Saldo devedor ajustado
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            Valor da parcela
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            Vencimento
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!isGetInstallmentsPending &&
          installments.map((installment) => (
            <TableRow key={installment.id}>
              <TableCell className="text-app-gray-800 font-normal text-sm md:text-base">
                {formatCurrency(installment.outstandingBalance?.toString())}
              </TableCell>
              <TableCell className="text-app-gray-800 font-normal text-sm md:text-base">
                {formatCurrency(installment.interest?.toString())}
              </TableCell>
              <TableCell className="text-app-gray-800 font-normal text-sm md:text-base">
                {formatCurrency(installment.adjustedBalance?.toString())}
              </TableCell>
              <TableCell className="text-app-gray-800 font-normal text-sm md:text-base">
                {formatCurrency(installment.installmentAmount?.toString())}
              </TableCell>
              <TableCell className="text-app-gray-800 font-normal text-sm md:text-base">
                {dayjs(installment.dueDate).format("DD/MM/YY")}
              </TableCell>
            </TableRow>
          ))}
        <TableRow>
          <TableCell className="text-app-gray-800 font-normal text-sm md:text-base">
            R$ 0,00
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
