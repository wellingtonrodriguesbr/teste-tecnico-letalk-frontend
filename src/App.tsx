import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { router } from "./router";
import { Toaster } from "sonner";
import { LoanContextProvider } from "./contexts/loan-context";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoanContextProvider>
        <RouterProvider router={router} />
        <Toaster richColors position="bottom-center" />
      </LoanContextProvider>
    </QueryClientProvider>
  );
}
