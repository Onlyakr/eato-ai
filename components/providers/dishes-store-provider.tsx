"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type DishesStore, createDishesStore } from "@/stores/dishesStore";

export type DishesStoreApi = ReturnType<typeof createDishesStore>;

export const DishesStoreContext = createContext<DishesStoreApi | undefined>(
  undefined,
);

export const DishesStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<DishesStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createDishesStore();
  }

  return (
    <DishesStoreContext.Provider value={storeRef.current}>
      {children}
    </DishesStoreContext.Provider>
  );
};

export const useDishesStore = <T,>(selector: (store: DishesStore) => T): T => {
  const dishesStoreContext = useContext(DishesStoreContext);

  if (!dishesStoreContext) {
    throw new Error(`useDishesStore must be used within DishesStoreProvider`);
  }

  return useStore(dishesStoreContext, selector);
};
