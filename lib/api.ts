export const API_URL = "https://jsonplaceholder.typicode.com";

export async function login(email: string, password: string) {
  if (email === "admin@email.com" && password === "123456") {
    return { token: "fake-token" };
  }
  throw new Error("Credenciais inválidas");
}
