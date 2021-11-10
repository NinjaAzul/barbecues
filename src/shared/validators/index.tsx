import * as yup from "yup";

export const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Minimo seis dígitos"),
});

export const signUpFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Minimo seis dígitos"),
  confirm: yup
    .string()
    .required("Confirmar senha obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas não coincidem"),
});
