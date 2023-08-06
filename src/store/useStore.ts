import { create } from "zustand";

type State = {
  consonants: string;
  vowels: string;
};

type Action = {
  updateText: (consonants: State["consonants"]) => void;
  updateRemovedVowels: (vowels: State["vowels"]) => void;
};

// create store
export const useStore = create<State & Action>((set) => ({
  consonants: "",
  vowels: "",
  updateText: (consonants) => set(() => ({ consonants: consonants })),
  updateRemovedVowels: (vowels) => set(() => ({ vowels: vowels })),
}));
