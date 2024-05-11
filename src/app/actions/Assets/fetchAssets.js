'use server'

import client_DB from '@/app/config/db.config';
import { unstable_noStore as noStore } from 'next/cache'

const FetchAssets = async () => {
    noStore();
    try {
        const fetch_Debts = client_DB.collection('assets').find();
        const data = await fetch_Debts.toArray();
        for (const i in data) {
            data[i]._id = data[i]._id.toHexString();
        }
        return data;
    }
    catch (error) {
        console.log('Database error: ', error);
        throw new Error('Failed to fetch assets data.');
    }
}

export default FetchAssets;