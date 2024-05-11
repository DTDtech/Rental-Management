'use server'

import client_DB from '@/app/config/db.config';
import { unstable_noStore as noStore } from 'next/cache'

const FetchOrders = async () => {
    noStore();
    try {
        const fetch_Orders = client_DB.collection('orders').find();
        const data = await fetch_Orders.toArray();
        for (const i in data) {
            data[i]._id = data[i]._id.toHexString();
        }
        return data;
    }
    catch (error) {
        console.log('Database error: ', error);
        throw new Error('Failed to fetch orders data.');
    }
}

export default FetchOrders;