import { Hero } from "@/components/hero";
import { LoanSimulation } from "@/components/loan-simulation.";

export function Home() {
  return (
    <div className="w-full max-w-[967px] mx-auto px-4">
      <Hero />
      <LoanSimulation />
    </div>
  );
}
