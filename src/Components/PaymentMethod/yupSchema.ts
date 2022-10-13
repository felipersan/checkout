import * as yup from "yup";

export const yupSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required()
    .matches(/^[a-z]+$/, "*Não é permitido números nem símbolos"),
  expiry: yup
    .string()
    .min(4)
    .max(5)
    .required()
    .matches(/\D/g, "*Não é permitido letras nem símbolos"),
  cardNumber: yup.string().min(19).required(),
  cvv: yup.string().min(3).required(),
});
