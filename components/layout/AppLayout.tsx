import { ReactNode } from "react";
import Header from "../header/Header";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-svh flex-col px-4 py-2 md:px-8">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-2 md:px-8">
        {children}
      </main>
    </div>
  );
};
export default AppLayout;
