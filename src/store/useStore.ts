import { create } from "zustand";

type State = {
  consonants: string;
  vowels: string;
  symbols: string;
};

type Action = {
  updateConsonants: (consonants: State["consonants"]) => void;
  updateVowels: (vowels: State["vowels"]) => void;
  updateSymbols: (symbols: State["symbols"]) => void;
};

export const useStore = create<State & Action>((set) => ({
  consonants: "",
  vowels: "",
  symbols: "",
  updateConsonants: (consonants) => set(() => ({ consonants: consonants })),
  updateVowels: (vowels) => set(() => ({ vowels: vowels })),
  updateSymbols: (symbols) => set(() => ({ symbols: symbols })),
}));
