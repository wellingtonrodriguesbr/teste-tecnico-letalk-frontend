import { LoansTable } from "@/components/loans-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export function Loans() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Todos os empréstimos efetivados</h1>
        <Button
          className="gap-2 bg-app-green-500 hover:bg-app-green-500 hover:brightness-95 font-bold"
          asChild
        >
          <Link to="/">
            <Plus className="size-4" />
            Solicitar novo
          </Link>
        </Button>
      </header>
      <LoansTable />
    </div>
  );
}
