"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { formatCPF } from "@/utils/format-cpf";
import { formatCurrency } from "@/utils/format-currency";
import { useRequestNewLoan } from "@/hooks/use-request-new-loan";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const loanSimulationFormSchema = z.object({
  customerDocumentNumber: z
    .string()
    .min(11, { message: "Digite um CPF válido" })
    .max(11, { message: "Digite um CPF válido" }),
  customerState: z.string(),
  customerBirthDate: z
    .string()
    .min(2, { message: "Selecione a sua data de nascimento" }),
  loanAmountRequested: z.coerce
    .string()
    .min(12, { message: "O valor mínimo para empréstimo é de R$ 50.000,00" }),
  desiredInstallmentAmount: z.coerce.string(),
});

type LoanSimulationFormSchema = z.infer<typeof loanSimulationFormSchema>;

export function LoanSimulationForm() {
  const form = useForm<LoanSimulationFormSchema>({
    resolver: zodResolver(loanSimulationFormSchema),
    defaultValues: {
      customerDocumentNumber: "",
      customerState: "",
      customerBirthDate: "",
      loanAmountRequested: "0",
      desiredInstallmentAmount: "0",
    },
  });

  const { requestNewLoan, isRequestNewLoanPending } = useRequestNewLoan();

  async function onSubmit(values: LoanSimulationFormSchema) {
    const loanAmountRequested = values.loanAmountRequested.replace(
      /[^\d]/g,
      ""
    );

    const desiredInstallmentAmount = values.desiredInstallmentAmount.replace(
      /[^\d]/g,
      ""
    );

    try {
      await requestNewLoan({
        customerDocumentNumber: values.customerDocumentNumber,
        customerState: values.customerState,
        customerBirthDate: values.customerBirthDate,
        loanAmountRequested: Number(loanAmountRequested),
        desiredInstallmentAmount: Number(desiredInstallmentAmount),
      });

      toast.success("Simulação realizada com sucesso");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3 bg-white border rounded-[5px] shadow-sm px-8 pt-[4.375rem] pb-[2.375rem]"
      >
        <FormField
          control={form.control}
          name="customerDocumentNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="CPF"
                  {...field}
                  onChange={({ currentTarget }) =>
                    form.setValue("customerDocumentNumber", currentTarget.value)
                  }
                  value={formatCPF(field.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customerState"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="MG">MG</SelectItem>
                  <SelectItem value="SP">SP</SelectItem>
                  <SelectItem value="RJ">RJ</SelectItem>
                  <SelectItem value="ES">ES</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customerBirthDate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="DATA DE NASCIMENTO"
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loanAmountRequested"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="QUAL O VALOR DO EMPRÉSTIMO"
                  {...field}
                  onChange={(e) =>
                    form.setValue("loanAmountRequested", e.target.value)
                  }
                  value={formatCurrency(field.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desiredInstallmentAmount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="QUAL VALOR DESEJA PAGAR POR MÊS"
                  {...field}
                  onChange={({ currentTarget }) =>
                    form.setValue(
                      "desiredInstallmentAmount",
                      currentTarget.value
                    )
                  }
                  value={formatCurrency(field.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={isRequestNewLoanPending}
          className="w-full uppercase text-base font-bold tracking-widest bg-app-orange-500 hover:bg-app-orange-500 hover:brightness-95 mt-7 shadow-lg"
        >
          {isRequestNewLoanPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Simular"
          )}
        </Button>
      </form>
    </Form>
  );
}
