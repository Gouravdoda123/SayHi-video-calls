import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("sayhi-theme") || "aqua",
  setTheme: (theme) => {
    localStorage.setItem("sayhi-theme", theme);
    set({ theme });
  },
}));