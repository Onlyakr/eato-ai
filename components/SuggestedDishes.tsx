"use client";

import { useDishesStore } from "@/components/providers/dishes-store-provider";
import { ArrowDown } from "lucide-react";

import DishCard from "@/components/DishCard";
import Link from "next/link";

const SuggestedDishes = () => {
  const dishes = useDishesStore((state) => state.dishes);

  return (
    <>
      {dishes.length > 0 && (
        <>
          <Link
            href="#suggested-dishes"
            className="flex animate-bounce justify-center"
          >
            <ArrowDown />
          </Link>

          <section id="suggested-dishes" className="flex flex-col gap-6 py-25">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-8">
              <h2 className="text-2xl font-bold">Suggested Food</h2>
            </div>

            <DishCard response={dishes} />
          </section>
        </>
      )}
    </>
  );
};
export default SuggestedDishes;
