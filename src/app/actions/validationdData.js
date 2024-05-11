import { z } from 'zod'

export const OrdersFormSchema = z.object({
    name: z.string(),
    contract_id: z.string(),
    status: z.enum(['Delivering-Unpaid', 'Received-Paid', 'Received-Unpaid', '']),
    note: z.string(),
});

export const AssetsFormSchema = z.object({
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

const phoneRegex = new RegExp(/^([0-9]{10})+$/);

export const PhoneNumberSchema = z.string().regex(phoneRegex, {message: "Invalid phone number"});

export const DateSchema = z.coerce.date({message: "Invalid date"});

export const NumericSchema = z.coerce.number({message: "Invalid number"});
