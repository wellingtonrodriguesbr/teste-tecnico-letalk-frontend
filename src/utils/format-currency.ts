export function formatCurrency(value: string) {
  const cleanedValue = value?.replace(/\D/g, "");

  if (!value) {
    return;
  }

  const numberValue = parseFloat(cleanedValue) / 100;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numberValue);
}
