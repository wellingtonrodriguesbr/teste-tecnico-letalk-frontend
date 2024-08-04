import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

export function LoansTableLoading() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-24 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-56 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-12 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-48 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-52 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-52 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-48 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-36 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-40 h-6" />
          </TableHead>
          <TableHead className="font-bold text-base text-app-gray-800 uppercase text-nowrap">
            <Skeleton className="w-32 h-6" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-36 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-32 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-12 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-36 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-64 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-12 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-28 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-32 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-52 h-6" />
            </TableCell>
            <TableCell className="text-app-gray-800 font-normal text-base text-nowrap">
              <Skeleton className="w-52 h-6" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
