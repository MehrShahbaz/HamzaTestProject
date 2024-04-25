import * as yup from 'yup';

export const formSchema = yup.object({
  firstName: yup.string().min(2).required('First Name is Required'),
  lastName: yup.string().min(2).required('Last Name is Required'),
  emial: yup.string().email(),
  phoneNumber: yup.string(),
  supervisor: yup.object({
    label: yup.string().required(),
  }),
});
