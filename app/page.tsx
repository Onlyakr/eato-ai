import AppLayout from "@/components/layout/AppLayout";
import DishGenerator from "@/components/DishGenerator";
import SuggestedDishes from "@/components/SuggestedDishes";

const HomePage = () => {
  return (
    <AppLayout>
      {/* Hero */}
      {/* <section className="py-20 pt-10">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-8">
          <h1 className="text-4xl font-bold">Eato</h1>
          <p className="text-muted-foreground text-sm">
            Discover and save your favorite recipes with Eato, your AI-powered
            food companion.
          </p>
        </div>
      </section> */}

      {/*  User Prompt */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-8">
          <h1 className="text-3xl font-bold md:text-6xl">What should I eat?</h1>
          <p className="text-muted-foreground md:text-md max-w-2xl text-center text-sm">
            Get personalized food suggestions powered by AI. Tell us your
            cravings, dietary preferences, or cuisine type, and we&apos;ll
            recommend the perfect meal.
          </p>

          <DishGenerator />
        </div>
      </section>

      {/* Suggested Food */}
      <SuggestedDishes />
    </AppLayout>
  );
};

export default HomePage;
