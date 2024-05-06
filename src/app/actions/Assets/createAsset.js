'use server'

import { revalidatePath } from 'next/cache'
import connectionPool from '@/app/config/db.config'
import { CreateAssetSchema, NumericSchema } from '@/app/actions/validationdData'

const CreateAsset = async (formData) => {

    const rawFormData = {
        name: formData.get('name'),
        type: formData.get('type'),
        in_stock: formData.get('in_stock'),
        description: formData.get('description'),
        price_per_hour: formData.get('price_per_hour').replace(/,/g, ''),
        price_per_day: formData.get('price_per_day').replace(/,/g, ''),
    }

    const { name, type, description } = CreateAssetSchema.parse({
        name: rawFormData.name,
        type: rawFormData.type,
        description: rawFormData.description,
    });

    let in_stock, price_per_hour, price_per_day;

    if (rawFormData.in_stock != '') {
        in_stock = NumericSchema.parse(rawFormData.in_stock);
    }
    else {
        in_stock = null;
    }

    if (rawFormData.price_per_hour != '') {
        price_per_hour = NumericSchema.parse(rawFormData.price_per_hour);
    }
    else {
        price_per_hour = null;
    }

    if (rawFormData.price_per_day != '') {
        price_per_day = NumericSchema.parse(rawFormData.price_per_day);
    }
    else {
        price_per_day = null;
    }

    const text = `INSERT INTO assets(name, type, in_stock, description, price_per_hour, price_per_day)
    VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [name, type, in_stock, description, price_per_hour, price_per_day];
    try {
        await connectionPool.query(text, values);
    }
    catch (error) {
        console.log(error);
        throw new Error("Unable to create asset.");
    }
    revalidatePath('/protected/assets');
}

export default CreateAsset;