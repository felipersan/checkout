import * as yup from "yup";

export const yupSchema = yup.object().shape({
  name: yup.string().required(),
  expiry: yup.string().required(),
  cardNumber: yup.number().required(),
  cvv: yup.number().required(),
});
