import { useMutation } from "@tanstack/react-query";
import { login } from "../lib/api";
import { LoginSchema } from "../lib/validation";
import { useAuthStore } from "../store/auth";

export const useLoginMutation = () => {
  const setToken = useAuthStore((s) => s.login);

  return useMutation({
    mutationFn: ({ email, password }: LoginSchema) => login(email, password),
    onSuccess: (data) => {
      console.log("data", data);
      setToken(data.token);
    },
    onError: (error: any) => {
      alert(error.message || "Erro ao logar");
    },
  });
};
