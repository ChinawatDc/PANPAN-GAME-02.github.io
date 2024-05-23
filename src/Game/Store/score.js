import { create } from "zustand";

export const useScore = create((set) => ({
  score: 0,
  addPoints: (payload) => set((state) => ({ score: state.score + payload })),
}));
