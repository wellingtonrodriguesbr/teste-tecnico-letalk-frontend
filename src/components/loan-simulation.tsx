import { LoanInstallments } from "./loan-installments";
import { LoanSimulationForm } from "./loan-simulation-form";

export function LoanSimulation() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <header className="flex items-center justify-center">
        <h1 className="font-light text-3xl md:text-[3.125rem] text-app-gray-500 text-center leading-tight">
          Simule e solicite o seu empréstimo.
        </h1>
      </header>
      <h2 className="font-bold text-base md:text-xl mb-[1.625rem] text-center mt-6 md:mt-[5rem]">
        Preencha o formulário abaixo para simular
      </h2>

      <LoanSimulationForm />
      <LoanInstallments />
    </div>
  );
}
