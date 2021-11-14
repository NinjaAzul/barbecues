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

export const createScheduleFormSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório"),
  data: yup.string().required("Data obrigatório"),
  with_drink: yup.string().required("com bebida obrigatório"),
  no_drink: yup.string().required("sem bebida obrigatório"),
});

export const participantFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  contribution: yup.string().required("Valor obrigatório"),
});
