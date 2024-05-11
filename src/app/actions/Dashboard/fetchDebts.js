'use server'

import client_DB from '@/app/config/db.config';
import { unstable_noStore as noStore } from 'next/cache'

const FetchDebts = async () => {
    noStore();
    try {
        const fetch_Debts = client_DB.collection('orders').find().sort({_id: 1});
        const data = await fetch_Debts.toArray();
        return data;
    }
    catch (error) {
        console.log('Database error: ', error);
        throw new Error('Failed to fetch debts data.');
    }
}

export default FetchDebts;