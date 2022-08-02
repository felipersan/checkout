import * as Yup from 'yup'

export default Yup.object().shape({
    firstName: Yup.string().min(3).required(),
    lastName: Yup.string().min(3).required(),
    email: Yup.string().email().required(),
    adress: Yup.string().min(3).required(),
    state: Yup.string().required(),
    city: Yup.string().required()
})