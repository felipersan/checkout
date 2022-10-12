import * as yup from "yup";

export const yupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  streetAdress: yup.string().required(),
  province: yup.string().required(),
  city: yup.string().required(),
  zip: yup.string().required(),
  phone: yup.string().required(),
});

