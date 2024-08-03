import { Outlet } from "react-router-dom";

export function HomeLayout() {
  return (
    <main className="w-full min-h-screen antialiased bg-app-gray-100 pt-[4.81rem] pb-24">
      <Outlet />
    </main>
  );
}
