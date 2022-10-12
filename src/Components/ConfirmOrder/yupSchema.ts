import * as yup from "yup";

export const yupSchema = yup.object().shape({
  check: yup.boolean().required().oneOf([true], '*Você deve concordar com os termos'),
});
