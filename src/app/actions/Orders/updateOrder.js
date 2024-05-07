'use server'

import { revalidatePath } from 'next/cache'
import connectionPool from '@/app/config/db.config'
import { EqualityCheck } from '../utils'
import { OrdersFormSchema, DateSchema, NumericSchema } from '@/app/actions/validationdData'

const UpdateOrder = async (placeholderData, formData) => {

    const rawFormData = {
        id: placeholderData.id,
        name: formData.get('name'),
        pick_up_date: formData.get('pick_up_date'),
        return_date: formData.get('return_date'),
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
        const { id, name, contract_id, status, note } = OrdersFormSchema.parse({
            id: rawFormData.id,
            name: rawFormData.name,
            contract_id: rawFormData.contract_id,
            status: rawFormData.status,
            note: rawFormData.note,
        });

        let pick_up_date, return_date, phone_number, debt, paid;

        if (rawFormData.pick_up_date != '') {
            pick_up_date = DateSchema.parse(rawFormData.pick_up_date);
        }
        else {
            pick_up_date = null;
        }

        if (rawFormData.return_date != '') {
            return_date = DateSchema.parse(rawFormData.return_date);
        }
        else {
            return_date = null;
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

        const text = `UPDATE orders SET name=$1, pick_up_date=$2, return_date=$3, contract_id=$4, phone_number=$5, 
        debt=$6, paid=$7, status=$8, note=$9 WHERE id=$10`;
        const values = [name, pick_up_date, return_date, contract_id, phone_number, debt, paid, status, note, id];
        try {
            await connectionPool.query(text, values);
        }
        catch (error) {
            console.log(error);
            throw new Error("Unable to update order.");
        }
    }
    revalidatePath('/protected/orders');
}

export default UpdateOrder;