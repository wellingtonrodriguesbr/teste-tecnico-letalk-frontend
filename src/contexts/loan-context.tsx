import { ReactNode, createContext, useContext, useState } from "react";

export interface Loan {
  id: string;
  customerDocumentNumber: string;
  customerBirthDate: string;
  customerState: string;
  loanAmountRequested: number;
  interestRate: number;
  desiredInstallmentAmount: number;
  installments: number;
  totalInterestRateAmount: number;
  totalAmount: number;
  loanMadeEffective: boolean;
  createdAt: Date;
}

interface LoanContextProviderProps {
  children: ReactNode;
}

interface LoanContextData {
  loan: Loan;
  setLoan: (state: Loan) => void;
}

export const LoanContext = createContext({} as LoanContextData);

export function LoanContextProvider({ children }: LoanContextProviderProps) {
  const [loan, setLoan] = useState<Loan>({} as Loan);

  return (
    <LoanContext.Provider
      value={{
        loan,
        setLoan,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
}

export function useLoan(): LoanContextData {
  const { loan, setLoan } = useContext(LoanContext);

  return {
    loan,
    setLoan,
  };
}
