"use client";

import { z } from "zod";
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
import { formatCPF } from "@/utils/format-cpf";
import { formatCurrency } from "@/utils/format-currency";
import { useRequestNewLoan } from "@/hooks/use-request-new-loan";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { AxiosError } from "axios";
import { formatDate } from "@/utils/format-date";

const loanSimulationFormSchema = z.object({
  customerDocumentNumber: z
    .string()
    .min(11, { message: "Digite um CPF válido" })
    .max(14, { message: "Digite um CPF válido" }),
  customerState: z.string().min(2, { message: "Selecione a UF do seu estado" }),
  customerBirthDate: z
    .string()
    .min(8, { message: "Digite sua data de nascimento. Ex: 12/02/1989" }),
  loanAmountRequested: z.coerce
    .string()
    .min(2, { message: "O valor mínimo para empréstimo é de R$ 50.000,00" }),
  desiredInstallmentAmount: z.coerce
    .string()
    .min(2, { message: "O valor mínimo é de 1% do valor do empréstimo" }),
});

type LoanSimulationFormSchema = z.infer<typeof loanSimulationFormSchema>;

export function LoanSimulationForm() {
  const form = useForm<LoanSimulationFormSchema>({
    resolver: zodResolver(loanSimulationFormSchema),
    defaultValues: {
      customerDocumentNumber: "",
      customerState: "",
      customerBirthDate: "",
      loanAmountRequested: "",
      desiredInstallmentAmount: "",
    },
  });

  const { requestNewLoan, isRequestNewLoanPending } = useRequestNewLoan();

  async function onSubmit(values: LoanSimulationFormSchema) {
    const customerDocumentNumber = values.customerDocumentNumber.replace(
      /\D/g,
      ""
    );
    const customerBirthDate = values.customerBirthDate.replace(/\D/g, "");
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
        customerDocumentNumber,
        customerState: values.customerState,
        customerBirthDate,
        loanAmountRequested: parseInt(loanAmountRequested),
        desiredInstallmentAmount: parseInt(desiredInstallmentAmount),
      });

      toast.success("Simulação realizada com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response?.status === 400 &&
          error.response.data.message.includes("The minimum loan amount is")
        ) {
          toast.error("O valor mínimo para empréstimo é de R$ 50.000,00");
        }
        if (
          error.response?.status === 400 &&
          error.response.data.message.includes(
            "The minimum installment amount is"
          )
        ) {
          toast.error(
            "O valor mínimo de parcela é de 1% do valor do empréstimo"
          );
        }
        if (
          error.response?.status === 400 &&
          error.response.data.message === "Invalid date"
        ) {
          toast.error("Data de nascimento inválida");
        }
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3 bg-white border rounded-[5px] shadow-sm p-6 md:px-8 md:pt-[4.375rem] md:pb-[2.375rem]"
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
                    form.setValue(
                      "customerDocumentNumber",
                      currentTarget.value.replace(/\D/g, "")
                    )
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
                    <SelectValue placeholder="UF">
                      <span className="text-black">{field.value}</span>
                    </SelectValue>
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
                  {...field}
                  onChange={({ currentTarget }) =>
                    form.setValue(
                      "customerBirthDate",
                      currentTarget.value.replace(/\D/g, "")
                    )
                  }
                  value={formatDate(field.value)}
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
          className="w-full uppercase text-sm md:text-base font-bold tracking-widest bg-app-orange-500 hover:bg-app-orange-500 hover:brightness-95 mt-4 md:mt-7 shadow-lg"
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
