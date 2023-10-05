import * as z from 'zod';

export const CourseSchema = z.object({
  title: z.string().nonempty('Поле обязательное').min(3),
  description: z.string().nonempty('Поле обязательное').min(6),
});
