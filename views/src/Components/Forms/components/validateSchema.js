import * as yup from 'yup';

export const inputSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .required('Required'),
  lastName: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .required('Required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  password: yup
    .string()
    .min(4, 'Must be at least 4 characters')
    .required('Required'),
});

export const inputLogin = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  password: yup
    .string()
    .min(4, 'Must be at least 4 characters')
    .required('Required'),
});

export const inputTransaction = yup.object().shape({
  amount: yup
    .number()
    .positive('Debe ser un monto positivo')
    .required('Campo requerido'),
  concept: yup
    .string(),
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Campo requerido'),
});

export const updateSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Campo requerido'),
  lastName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Campo requerido'),
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Campo requerido'),
  password: yup
    .string()
    .test(
      'len',
      'can be empty or with string of at least 4 characters',
      (val) => {
        if (val == undefined) {
          return true;
        }
        return ((val.length == 0 || (val.length >= 4 && val.length <= 130)))
      }
    ),
});
