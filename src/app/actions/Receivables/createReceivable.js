'use server'

import { revalidatePath } from 'next/cache'
import connectionPool from '@/app/config/db.config'
import { CreateReceivableSchema, ZodEmptyStringOrDate, ZodEmptyStringOrNumber } from './validationdData'

const CreateReceivable = async (formData) => {

    const rawFormData = {
        name: formData.get('name'),
        date: formData.get('date'),
        contract_id: formData.get('contract_id'),
        phone_number: formData.get('phone_number'),
        debt: formData.get('debt'),
        paid: formData.get('paid'),
        status: formData.get('status'),
        note: formData.get('note'),
    }

    const { name, contract_id, status, note } = CreateReceivableSchema.parse({
        name: rawFormData.name,
        contract_id: rawFormData.contract_id,
        status: rawFormData.status,
        note: rawFormData.note,
    });

    const date = ZodEmptyStringOrDate.parse(rawFormData.date);
    const phone_number = ZodEmptyStringOrNumber.parse(rawFormData.phone_number);
    const debt = ZodEmptyStringOrNumber.parse(rawFormData.debt);
    const paid = ZodEmptyStringOrNumber.parse(rawFormData.paid);
    
    const text = `INSERT INTO receivables(name, date, contract_id, phone_number, debt, paid, status, note)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const values = [name, date, contract_id, phone_number, debt, paid, status, note];
    try {
        await connectionPool.query(text, values);
    }
    catch (error) {
        console.log(error);
        throw new Error("Unable to create receivable.");
    }
    revalidatePath('/protected/receivables');
}

export default CreateReceivable;