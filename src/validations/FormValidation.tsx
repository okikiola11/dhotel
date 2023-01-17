import * as yup from 'yup';

export const createFormSchema = yup.object().shape({
    name: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    address: yup.string().required(),
});