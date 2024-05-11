'use server'

import client_DB from '@/app/config/db.config'
import { revalidatePath } from 'next/cache'
import { CreateOrderSchema, DateSchema, NumericSchema } from '@/app/actions/validationdData'

const CreateOrder = async (formData) => {

    const rawFormData = {
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

    const { name, contract_id, status, note } = CreateOrderSchema.parse({
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

    const order = {
        "name": name,
        "pick_up_date": pick_up_date,
        "return_date": return_date,
        "contract_id": contract_id,
        "phone_number": phone_number,
        "debt": debt,
        "paid": paid,
        "status": status,
        "note": note 
    };
    try {
        await client_DB.collection('orders').insertOne(order);
    }
    catch (error) {
        console.log(error);
        throw new Error("Unable to create order.");
    }
    revalidatePath('/protected/orders');
}

export default CreateOrder;