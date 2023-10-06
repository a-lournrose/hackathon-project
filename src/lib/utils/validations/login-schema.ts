import * as z from 'zod';

export const LoginSchema = z.object({
  username: z
    .string()
    .nonempty('validation:error.field_required')
    .email('validation:error.wrong_email')
    .min(6, 'Длина логина должна быть не меньше 6'),
  password: z
    .string()
    .nonempty('validation:error.field_required')
    .min(6, 'validation:error.min_char_number'),
});
