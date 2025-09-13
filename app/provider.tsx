import { ThemeProvider } from "@/components/providers/theme-provider";
import { DishesStoreProvider } from "@/components/providers/dishes-store-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DishesStoreProvider>{children}</DishesStoreProvider>
    </ThemeProvider>
  );
};
export default Provider;
