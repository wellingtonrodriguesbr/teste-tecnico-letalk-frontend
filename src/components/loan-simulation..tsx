import { LoanInstallments } from "./loan-installments";
import { LoanSimulationForm } from "./loan-simulation.form";

export function LoanSimulation() {
  return (
    <div className="flex flex-col items-center justify-center mt-[5rem]">
      <h2 className="font-bold text-xl mb-[1.625rem]">
        Preencha o formulário abaixo para simular
      </h2>

      <LoanSimulationForm />
      <LoanInstallments />
    </div>
  );
}
