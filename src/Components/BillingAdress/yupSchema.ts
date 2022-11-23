import * as yup from "yup";

export const yupSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3)
    .required()
    .matches(/^[a-z/A-Z]+$/, "*Não é permitido números nem símbolos"),
  lastName: yup
    .string()
    .min(3)
    .required()
    .matches(/^[a-z/A-Z/\s]+$/, "*Não é permitido números nem símbolos"),
  email: yup.string().email().required(),
  streetAdress: yup
    .string()
    .min(3)
    .required()
    .matches(/^[a-z/A-Z/\s]+$/, "*Não é permitido números nem símbolos"),
  province: yup.string().required(),
  city: yup.string().required(),
  zip: yup.string().required(),
  phone: yup.string().min(10).max(11).required(),
});

