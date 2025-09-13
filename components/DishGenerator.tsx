"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search, Sparkles } from "lucide-react";
import { getSuggestions } from "@/app/action";
import { toast } from "sonner";
import { useDishesStore } from "@/components/providers/dishes-store-provider";

import * as motion from "motion/react-client";

const DishGenerator = () => {
  const setDishes = useDishesStore((state) => state.setDishes);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const prompt = formData.get("prompt") as string;

    try {
      setIsLoading(true);
      const data = await getSuggestions(prompt);
      setDishes(data.dishes.dishes);
      toast.success("Suggestions fetched successfully");
    } catch (error) {
      const e = error as Error;
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center gap-6"
      >
        <div className="relative w-full max-w-2xl">
          <Search className="text-muted-foreground/80 absolute top-1/2 left-3 size-5 -translate-y-1/2" />
          <Input
            className="h-10 pl-10 placeholder:text-sm md:h-12 md:placeholder:text-lg"
            placeholder="I want some healthy food."
            name="prompt"
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.8, rotate: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {isLoading ? (
            <Button
              className="h-9 cursor-not-allowed text-sm md:h-10 md:text-base"
              disabled
            >
              <Loader2 className="size-4 animate-spin" />
              <span>Getting Suggestions</span>
            </Button>
          ) : (
            <Button className="h-9 cursor-pointer text-sm md:h-10 md:text-base">
              <Sparkles className="size-4" />
              <span>Get Suggestions</span>
            </Button>
          )}
        </motion.div>
      </form>
    </>
  );
};
export default DishGenerator;
