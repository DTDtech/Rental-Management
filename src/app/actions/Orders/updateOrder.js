'use server'

import { revalidatePath } from 'next/cache'
import { EqualityCheck } from '../utils'
import { OrdersFormSchema, DateSchema, NumericSchema, PhoneNumberSchema } from '@/app/actions/validationdData'
import { ObjectId } from 'mongodb'
import client_DB from '@/app/config/db.config'
import { redirect } from 'next/navigation'

const UpdateOrder = async (placeholderData, formData) => {

    const rawFormData = {
        _id: placeholderData._id,
        name: formData.get('name'),
        pick_up_date: new Date(formData.get('pick_up_date')),
        return_date: new Date(formData.get('return_date')),
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
        const { name, contract_id, status, note } = OrdersFormSchema.parse({
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
            phone_number = PhoneNumberSchema.parse(rawFormData.phone_number);
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

        const filter = { _id: new ObjectId(placeholderData._id) }
        const orderChange = {
            $set: {
                "name": name,
                "pick_up_date": pick_up_date,
                "return_date": return_date,
                "contract_id": contract_id,
                "phone_number": phone_number,
                "debt": debt,
                "paid": paid,
                "status": status,
                "note": note
            }
        }
        try {
            await client_DB.collection('orders').updateOne(filter, orderChange);
        }
        catch (error) {
            console.log(error);
            throw new Error("Unable to update order.");
        }
    }
    revalidatePath('/protected/orders');
    redirect('/protected/orders');
}

export default UpdateOrder;