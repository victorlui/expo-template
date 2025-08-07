import { create } from "zustand";
import { getToken, removeToken, saveToken } from "../lib/authStorage";

type AuthState = {
  token: string | null;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  restoreToken: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isLoading: true,

  login: (token) => {
    saveToken(token);
    set({ token });
  },

  logout: () => {
    removeToken();
    set({ token: null });
  },

  restoreToken: async () => {
    const token = await getToken();
    set({ token, isLoading: false });
  },
}));
