import { create } from "zustand";
import fruits from "../Utils/fruits";

const getRandomFruit = () => {
  const fruit = fruits[Math.floor(Math.random() * 5)];
  return fruit;
};

export const useSpawner = create((set) => ({
  currentFruit: fruits[0],
  nextFruit: getRandomFruit(),
  changeFruits() {
    set((state) => ({
      currentFruit: state.nextFruit,
      nextFruit: getRandomFruit(),
    }));
  },
}));
