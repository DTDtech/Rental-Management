import { z } from 'zod'

export const FormSchema = z.object({
    id: z.number(),
    name: z.string(),
    contract_id: z.string(),
    status: z.enum(['Delivering-Unpaid', 'Received-Paid', 'Received-Unpaid', '']),
    note: z.string(),
});

export const CreateReceivableSchema = FormSchema.omit({ id: true });

export const ZodEmptyStringOrNumber = z
    .string()
    .transform((value) => value === '' ? null : value)
    .nullable()
    .refine((value) => value === null || !isNaN(Number(value)), {
        message: 'Invalid number',
    })
    .transform((value) => (value === null ? null : Number(value)));

export const DateSchema = z.coerce.string().date();

export const NumericSchema = z.coerce.number();
