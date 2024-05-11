'use server'

import { revalidatePath } from 'next/cache'
import { EqualityCheck } from '../utils'
import { AssetsFormSchema, NumericSchema } from '@/app/actions/validationdData'
import { ObjectId } from 'mongodb'
import client_DB from '@/app/config/db.config'

const UpdateAsset = async (placeholderData, formData) => {

    const rawFormData = {
        _id: placeholderData._id,
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
        const { name, type, description } = AssetsFormSchema.parse({
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

        const filter = { _id: new ObjectId(placeholderData._id) }
        const assetChange = {
            $set: {
                "name": name,
                "type": type,
                "in_stock": in_stock,
                "description": description,
                "price_per_hour": price_per_hour,
                "price_per_day": price_per_day
            }
        }
        try {
            await client_DB.collection('assets').updateOne(filter, assetChange);
        }
        catch (error) {
            console.log(error);
            throw new Error("Unable to update orders.");
        }
    }
    revalidatePath('/protected/assets');
}

export default UpdateAsset;