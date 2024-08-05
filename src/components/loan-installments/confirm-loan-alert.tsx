import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useConfirmLoan } from "@/hooks/use-confirm-loan";
import { AxiosError } from "axios";
import { ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface ConfirmLoanAlertProps {
  loanId: string;
}

export function ConfirmLoanAlert({ loanId }: ConfirmLoanAlertProps) {
  const navigate = useNavigate();
  const { confirmLoan, isConfirmLoanPending } = useConfirmLoan();

  async function handleConfirmLoan() {
    try {
      await confirmLoan({
        loanId,
      });

      navigate("/sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          toast.error("Empréstimo não encontrado, tente novamente.");
        } else {
          toast.error("Falha ao efetivar empréstimo, tente novamente.");
        }
      }
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full max-w-[554px] uppercase text-sm md:text-base font-bold tracking-widest bg-app-green-500 hover:bg-app-green-500 hover:brightness-95 shadow-lg gap-2">
          Efetivar o empréstimo <ArrowRight className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[370px] rounded-[5px] md:w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja efetivar este empréstimo?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Após a confirmação, esta ação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button
              disabled={isConfirmLoanPending}
              className="border border-rose-200 text-rose-500 hover:text-rose-700 hover:bg-rose-50"
            >
              Cancelar
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              disabled={isConfirmLoanPending}
              onClick={handleConfirmLoan}
              className="bg-app-green-500 hover:bg-app-green-500 hover:brightness-95"
            >
              {isConfirmLoanPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                "Sim, quero efetivar este empréstimo"
              )}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
