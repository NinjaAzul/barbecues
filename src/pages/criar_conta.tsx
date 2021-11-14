import { Header } from "components/Header";
import { Layout } from "components/layout";
import * as Styles from "styles/pages/HomeStyles";
import type { NextPage } from "next";
import { Input } from "components/Form/Input";
import { Button } from "components/Form/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { signUpFormSchema } from "shared/validators/index";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { api, setAuthentication } from "services/client";
import { withSSRGuest } from "utils/withSSRGuest";
import { setAuthCookies } from "services/AuthService";
import { useAuth } from "contexts/AuthContext";
import { Error500 } from "shared/errors";
import { AxiosError } from "axios";

const CreateAccount: NextPage = () => {
  const { push } = useRouter();
  const { setUser } = useAuth();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(signUpFormSchema),
  });
  const { isSubmitting, errors } = formState;

  type SignInFormData = {
    email: string;
    password: string;
  };

  const handleSignUp: SubmitHandler<SignInFormData> = async (values, event) => {
    event.preventDefault();

    try {
      const { data } = await api.post("/user/register", values);
      setAuthentication(data.token);
      setAuthCookies({ accessToken: data.token, user: data.user });
      setUser(data.user);
      reset();
      toast.success("Usuário criado com sucesso!");
      push("/agendamentos");
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 400:
            toast.error("E-mail já utilizado.");
            throw new Error("E-mail já utilizado.");
          case 500:
            toast.error("Ops... algo deu errado!");
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  };

  return (
    <>
      <Layout title="Sign up | Barbecues">
        <Header title="Cadastrar" />
        <Styles.Container>
          <Styles.Content>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <Input
                name="email"
                label="E-mail"
                placeholder="E-mail"
                mb="1rem"
                error={errors.email}
                {...register("email")}
              />
              <Input
                name="password"
                label="Senha"
                placeholder="Senha"
                mb="1rem"
                type="password"
                error={errors.password}
                {...register("password")}
              />

              <Input
                name="confirm"
                label="Confirme"
                placeholder="Confirme"
                mb="2.5rem"
                type="password"
                error={errors.confirm}
                {...register("confirm")}
              />
              <Button
                disabled={isSubmitting}
                loading={isSubmitting}
                loadingSize={20}
                type="submit"
              >
                Criar
              </Button>
            </form>
          </Styles.Content>
        </Styles.Container>
      </Layout>
    </>
  );
};

export default CreateAccount;

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
