export function formatCurrency(value: string): string {
  const cleanedValue = value?.replace(/\D/g, "");

  const numberValue = parseFloat(cleanedValue) / 100;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numberValue);
}
