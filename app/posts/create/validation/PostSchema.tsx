'use client';

import * as yup from 'yup';

export const postSchema = yup.object().shape({

  userId: yup.number({}, '', '', '', '').required('Este campo es requerido.'),
  id: yup.number({}, '', '', '', ''),
  title: yup.string().required('Este campo es requerido.'),
  body: yup.string().required('Este campo es requerido.'),

  // title: Yup.string().required('Este campo es requerido'),
  // description: Yup.string().required('Este campo es requerido'),
  // userId: Yup.number().positive().integer().required(),
  // userId: Yup.number({}, '', '', '', '').positive('Debe ser un número positivo').integer('Debe ser un número entero').required('Este campo es requerido'),

});
