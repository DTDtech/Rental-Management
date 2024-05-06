'use server'

import { revalidatePath } from 'next/cache'
import connectionPool from '@/app/config/db.config'
import { CreateReceivableSchema, DateSchema, NumericSchema } from '@/app/actions/validationdData'

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

    let date, phone_number, debt, paid;

    if (rawFormData.date != '') {
        date = DateSchema.parse(rawFormData.date);
    }
    else {
        date = null;
    }

    if (rawFormData.phone_number != '') {
        phone_number = NumericSchema.parse(rawFormData.phone_number);
    }
    else {
        phone_number = null;
    }

    if (rawFormData.debt != '') {
        debt = NumericSchema.parse(rawFormData.debt);
    }
    else {
        debt = null;
    }

    if (rawFormData.paid != '') {
        paid = NumericSchema.parse(rawFormData.paid);
    }
    else {
        paid = null;
    }

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