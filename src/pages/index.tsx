import { Header } from "components/Header";
import { Layout } from "components/layout";
import * as Styles from "styles/pages/HomeStyles";
import type { NextPage } from "next";
import { Input } from "components/Form/Input";
import { Button } from "components/Form/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useRouter } from "next/router";
import { signInFormSchema } from "shared/validators/index";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { isSubmitting, isSubmitSuccessful, errors } = formState;

  type SignInFormData = {
    email: string;
    password: string;
  };

  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
    await new Promise((resolve) => setTimeout(resolve, 6000)); // 6sig awaiting.

    // if (isSubmitSuccessful) {
    //   alert("deu bom cuzão");
    // }

    reset();
    push("/agendamentos");
    console.log(data);
  };

  return (
    <>
      <Layout title="Sign in | Barbecues">
        <Header title="Agenda de Churras" />
        <Styles.Container>
          <Styles.Content>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <Input
                name="email"
                label="E-mail"
                placeholder="E-mail"
                mb="1.5rem"
                error={errors.email}
                {...register("email")}
              />
              <Input
                name="password"
                label="Senha"
                placeholder="Senha"
                mb="2.5rem"
                type="password"
                error={errors.password}
                {...register("password")}
              />
              <Button
                disabled={isSubmitting}
                loading={isSubmitting}
                loadingSize={20}
                type="submit"
              >
                Entrar
              </Button>
            </form>
          </Styles.Content>
        </Styles.Container>
      </Layout>
    </>
  );
};

export default Home;
