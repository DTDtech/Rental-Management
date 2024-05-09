'use server'

import connectionPool from '@/app/config/db.config'
import { unstable_noStore as noStore } from 'next/cache'

const FetchOrderByID = async (id) => {
    noStore();
    try {
        const text = 'SELECT * FROM orders WHERE id=$1';
        const value = [id];
        const data = await connectionPool.query(text, value);
        return data.rows[0];
    }
    catch (error) {
        console.log('Database error: ', error);
        throw new Error('Failed to fetch full order data.');
    }
}

export default FetchOrderByID;