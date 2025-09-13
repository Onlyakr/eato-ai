import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";

import AppLayout from "@/components/layout/AppLayout";
import * as motion from "motion/react-client";

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
            cravings, dietary preferences, or cuisine type, and we'll recommend
            the perfect meal.
          </p>

          <form className="flex w-full flex-col items-center gap-6">
            <div className="relative w-full max-w-2xl">
              <Search className="text-muted-foreground/80 absolute top-1/2 left-3 size-5 -translate-y-1/2" />
              <Input
                className="h-10 pl-10 placeholder:text-sm md:h-12 md:placeholder:text-lg"
                placeholder="I want some healthy food."
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.8, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="cursor-pointer"
            >
              <Button className="h-9 text-sm md:h-10 md:text-base">
                <Sparkles className="size-4" />
                <span>Get Suggestions</span>
              </Button>
            </motion.div>
          </form>
        </div>
      </section>

      {/* Suggested Food */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-8">
          <h2 className="text-2xl font-bold">Suggested Food</h2>
        </div>
      </section>
    </AppLayout>
  );
};

export default HomePage;
