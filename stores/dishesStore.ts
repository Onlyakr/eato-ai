import { createStore } from "zustand/vanilla";

export type Dish = {
  name: string;
  description: string;
  cuisine: string;
  spiciness: string;
  diet: string;
};

export type DishesState = {
  dishes: Dish[];
};

export type DishesActions = {
  setDishes: (dishes: Dish[]) => void;
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
    setDishes: (dishes: Dish[]) => set({ dishes }),
  }));
};
