interface LoanInfoItemProps {
  description: string;
  value: string;
}

export function LoanInfoItem({ description, value }: LoanInfoItemProps) {
  return (
    <li className="flex flex-col gap-2">
      <strong className="text-sm uppercase text-app-gray-700 text-nowrap">
        {description}
      </strong>
      <strong className="text-xl text-app-gray-800">{value}</strong>
    </li>
  );
}
