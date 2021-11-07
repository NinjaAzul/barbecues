import * as yup from "yup";

export const signInFormSchema = yup.object().shape({
  email: yup.string().email("e-mail invalido").required("e-mail obrigatorio"),
  password: yup
    .string()
    .required("senha obrigatoria")
    .min(6, "minimo seis digitos"),
});
