'use server'

import { revalidatePath } from 'next/cache'
import connectionPool from '@/app/config/db.config'
import { EqualityCheck } from '../utils'
import { FormSchema, DateSchema, NumericSchema } from './validationdData'

const UpdateReceivable = async (placeholderData, formData) => {

    const rawFormData = {
        id: placeholderData.id,
        name: formData.get('name'),
        date: formData.get('date'),
        contract_id: formData.get('contract_id'),
        phone_number: formData.get('phone_number'),
        debt: formData.get('debt'),
        paid: formData.get('paid'),
        status: formData.get('status'),
        note: formData.get('note'),
    }

    /*check if form data is the same as placeholder data, 
    if not then update*/
    if (!EqualityCheck(rawFormData, placeholderData)) {
        const { id, name, contract_id, status, note } = FormSchema.parse({
            id: rawFormData.id,
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

        const text = `UPDATE receivables SET name=$1, date=$2, contract_id=$3, phone_number=$4, 
        debt=$5, paid=$6, status=$7, note=$8 WHERE id=$9`;
        const values = [name, date, contract_id, phone_number, debt, paid, status, note, id];
        try {
            await connectionPool.query(text, values);
        }
        catch (error) {
            console.log(error);
            throw new Error("Unable to update receivable.");
        }
    }
    revalidatePath('/protected/receivables');
}

export default UpdateReceivable;