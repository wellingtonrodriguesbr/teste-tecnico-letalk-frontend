import { Link } from "react-router-dom";
import { LoansTable } from "@/components/loans-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Loans() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 space-y-12">
      <header className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Todos os empréstimos efetivados
        </h1>
        <Button
          className="w-full md:w-fit gap-2 bg-app-green-500 hover:bg-app-green-500 hover:brightness-95 font-bold"
          asChild
        >
          <Link to="/">
            <Plus className="size-4" />
            Solicitar novo
          </Link>
        </Button>
      </header>
      <LoansTable />
    </section>
  );
}
