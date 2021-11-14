import { Header } from "components/Header";
import { Layout } from "components/layout";
import * as Styles from "styles/pages/HomeStyles";
import type { NextPage } from "next";
import { Input } from "components/Form/Input";
import { Button } from "components/Form/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { signInFormSchema } from "shared/validators/index";
import { useRouter } from "next/router";
import { useAuth } from "contexts/AuthContext";
import Link from "next/link";
import { useEffect } from "react";
import { withSSRGuest } from "utils/withSSRGuest";

const Home: NextPage = () => {
  const { push } = useRouter();
  const { signIn } = useAuth();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { isSubmitting, errors } = formState;

  type SignInFormData = {
    email: string;
    password: string;
  };

  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
    event.preventDefault();
    await signIn(data);
  };

  return (
    <>
      <Layout title="Sign in | Barbecues">
        <Header title="Agenda de Churras" />
        <Styles.Container>
          <Styles.Content>
            <form className="form" onSubmit={handleSubmit(handleSignIn)}>
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

              <Link href="/criar_conta">
                <a className="link">Criar nova conta?</a>
              </Link>
            </form>
          </Styles.Content>
        </Styles.Container>
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps = withSSRGuest(
  async (ctx) => {
    return {
      props: {
       
      },
    };
  }
);