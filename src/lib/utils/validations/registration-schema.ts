import * as z from 'zod';

export const RegistrationSchema = z
  .object({
    firstName: z
      .string()
      .nonempty('validation:error.field_required')
      .min(3, 'validation:error.min_char_number'),
    secondName: z
      .string()
      .nonempty('validation:error.field_required')
      .min(3, 'validation:error.min_char_number'),
    thirdName: z
      .string()
      .nonempty('validation:error.field_required')
      .min(3, 'validation:error.min_char_number'),
    username: z
      .string()
      .nonempty('validation:error.field_required')
      .min(6, 'Длина логина должна быть не меньше 6'),
    password: z
      .string()
      .nonempty('validation:error.field_required')
      .min(6, 'validation:error.min_char_number'),
    passwordConfirm: z
      .string()
      .nonempty('validation:error.field_required')
      .min(6, 'validation:error.min_char_number'),
  })
  .refine(data => data.password == data.passwordConfirm, {
    message: 'validation:error.passwords_no_match',
    path: ['passwordConfirm'],
  });
