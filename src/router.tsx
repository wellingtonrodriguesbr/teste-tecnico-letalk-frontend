import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./pages/_layouts/home-layout";
import { Home } from "./pages/app/home";
import { SuccessLayout } from "./pages/_layouts/success-layout";
import { Success } from "./pages/app/success";
import { LoansLayout } from "./pages/_layouts/loans-layout";
import { Loans } from "./pages/app/loans";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <SuccessLayout />,
    children: [
      {
        path: "/sucesso",
        element: <Success />,
      },
    ],
  },
  {
    path: "/",
    element: <LoansLayout />,
    children: [
      {
        path: "/emprestimos",
        element: <Loans />,
      },
    ],
  },
]);
