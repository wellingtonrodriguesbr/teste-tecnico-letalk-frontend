import { Skeleton } from "../ui/skeleton";

export function LoanInstallmentsLoading() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-[4.5rem]">
      <Skeleton className="w-80 h-6" />
      <Skeleton className="w-full md:w-[967px] h-96" />
    </div>
  );
}
