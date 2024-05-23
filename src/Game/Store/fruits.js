import { create } from "zustand";

export const useFruits = create((set) => ({
  fruits: [],
  addFruit(payload) {
    set((state) => ({
      fruits: [...state.fruits, { id: Date.now(), ...payload }],
    }));
  },
  setFruits(payload) {
    set(() => ({
      fruits: payload,
    }));
  },
}));
