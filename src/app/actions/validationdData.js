import { z } from 'zod'

export const OrdersFormSchema = z.object({
    id: z.number(),
    name: z.string(),
    contract_id: z.string(),
    status: z.enum(['Delivering-Unpaid', 'Received-Paid', 'Received-Unpaid', '']),
    note: z.string(),
});

export const AssetsFormSchema = z.object({
    id: z.number(),
    type: z.enum(['Camera', 'Lighting', '']),
    name: z.string(),
    description: z.string(),
});

export const CreateOrderSchema = OrdersFormSchema.omit({ id: true });
export const CreateAssetSchema = AssetsFormSchema.omit({ id: true });

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
