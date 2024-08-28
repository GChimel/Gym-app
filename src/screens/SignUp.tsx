import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";

import BackGroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/input";
import { Button } from "@components/button";

import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Tipagem de formulário
type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const FormDataSchema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: Yup.string()
    .min(6, "No mínimo 6 dígitos")
    .required("Senha obrigatória"),
  confirmPassword: Yup.string()
    .required("Confirme a senha")
    .oneOf([Yup.ref("password")], "As senhas precisam ser iguais"),
});

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(FormDataSchema),
  });

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp(data: FormData) {}

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackGroundImg}
          alt="background"
          w="$full"
          h={624}
          defaultSource={BackGroundImg}
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e o seu corpo.
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirme sua senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />

            <Button
              title="Criar e acessar"
              onPress={handleSubmit(handleSignUp)}
            />
          </Center>

          <Button
            title="Voltar para o login"
            variant="outline"
            mt="$12"
            onPress={handleGoBack}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
