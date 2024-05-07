'use server'

import { revalidatePath } from 'next/cache'
import connectionPool from '@/app/config/db.config'
import { EqualityCheck } from '../utils'
import { AssetsFormSchema, NumericSchema } from '@/app/actions/validationdData'

const UpdateAsset = async (placeholderData, formData) => {

    const rawFormData = {
        id: placeholderData.id,
        name: formData.get('name'),
        type: formData.get('type'),
        in_stock: formData.get('in_stock'),
        description: formData.get('description'),
        price_per_hour: formData.get('price_per_hour').replace(/,/g, ''),
        price_per_day: formData.get('price_per_day').replace(/,/g, ''),
    }

    /*check if form data is the same as placeholder data, 
    if not then update*/
    if (!EqualityCheck(rawFormData, placeholderData)) {
        const { id, name, type, description } = AssetsFormSchema.parse({
            id: rawFormData.id,
            type: rawFormData.type,
            description: rawFormData.description,
            name: rawFormData.name
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

        const text = `UPDATE assets SET name=$1, type=$2, in_stock=$3, description=$4, price_per_hour=$5, price_per_day=$6 WHERE id=$7`;
        const values = [name, type, in_stock, description, price_per_hour, price_per_day, id];
        try {
            await connectionPool.query(text, values);
        }
        catch (error) {
            console.log(error);
            throw new Error("Unable to update orders.");
        }
    }
    revalidatePath('/protected/assets');
}

export default UpdateAsset;