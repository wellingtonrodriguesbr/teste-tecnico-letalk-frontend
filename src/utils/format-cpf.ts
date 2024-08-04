export function formatCPF(cpf: string) {
  const cleanedCPF = cpf.replace(/\D/g, "");

  if (cleanedCPF.length !== 11) {
    return cleanedCPF;
  }

  const formattedCPF = cleanedCPF.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );

  return formattedCPF;
}
