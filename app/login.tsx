import { useLoginForm } from "@/hooks/useLoginForm";
import { useLoginMutation } from "@/hooks/useLoginMutation";
import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useLoginForm();
  const mutation = useLoginMutation();

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <View className="flex-1 justify-center px-4">
      <Text className="text-xl font-bold mb-4">Login</Text>

      <TextInput
        className="border p-2 mb-2 rounded border-gray-400 text-white"
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setValue("email", text)}
      />
      {errors.email && (
        <Text className="text-red-500">{errors.email.message}</Text>
      )}

      <TextInput
        className="border p-2 mb-2 rounded border-gray-400 text-white"
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setValue("password", text)}
      />
      {errors.password && (
        <Text className="text-red-500">{errors.password.message}</Text>
      )}

      <Button
        title={mutation.isPending ? "Entrando..." : "Entrar"}
        onPress={handleSubmit(onSubmit)}
        disabled={mutation.isPending}
      />
    </View>
  );
}
