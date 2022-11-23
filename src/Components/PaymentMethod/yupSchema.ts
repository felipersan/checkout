import * as yup from "yup";

export const yupSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required()
    .matches(/^[a-z/A-Z/\s]+$/, "*Não é permitido números nem símbolos"),
  expiry: yup
    .string()
    .min(4)
    .max(7)
    .required()
    .matches(/\D/g, "*Não é permitido letras nem símbolos"),
  cardNumber: yup.string().min(19).max(19).required(),
  cvv: yup.string().min(3).max(6).required(),
});
