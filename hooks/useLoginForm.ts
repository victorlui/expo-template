import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "../lib/validation";

export const useLoginForm = () => {
  return useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
};
