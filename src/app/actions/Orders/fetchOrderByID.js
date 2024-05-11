'use server'

import client_DB from '@/app/config/db.config';
import { ObjectId } from 'mongodb';
import { unstable_noStore as noStore } from 'next/cache'

const FetchOrderByID = async (id) => {
    noStore();
    const filter = {
        _id: new ObjectId(id)
    }
    try {
        const data = await client_DB.collection('orders').findOne(filter);
        data._id = data._id.toHexString();
        return data;
    }
    catch (error) {
        console.log('Database error: ', error);
        throw new Error('Failed to fetch full order data.');
    }
}

export default FetchOrderByID;