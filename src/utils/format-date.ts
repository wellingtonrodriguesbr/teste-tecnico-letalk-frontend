export function formatDate(date: string): string {
  const cleanedDate = date.replace(/\D/g, "");

  const formattedDate = cleanedDate.replace(
    /(\d{2})(\d{2})(\d{4})/,
    "$1/$2/$3"
  );

  return formattedDate;
}
