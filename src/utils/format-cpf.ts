export function formatCPF(cpf: string): string {
  const cleanedCPF = cpf.replace(/\D/g, "");

  const formattedCPF = cleanedCPF.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );

  return formattedCPF;
}
