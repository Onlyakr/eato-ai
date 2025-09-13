import { createStore } from "zustand/vanilla";

export type DishesState = {
  dishes: any[];
};

export type DishesActions = {
  setDishes: (dishes: any[]) => void;
};

export type DishesStore = DishesState & DishesActions;

export const defaultInitState: DishesState = {
  dishes: [],
};

export const createDishesStore = (
  initState: DishesState = defaultInitState,
) => {
  return createStore<DishesStore>()((set) => ({
    ...initState,
    setDishes: (dishes: any[]) => set({ dishes }),
  }));
};
