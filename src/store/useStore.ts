import { create } from "zustand";

type State = {
  text: string;
};

type Action = {
  updateText: (text: State["text"]) => void;
};

// create store

export const useStore = create<State & Action>((set) => ({
  text: "",
  updateText: (text) => set(() => ({ text: text })),
}));
