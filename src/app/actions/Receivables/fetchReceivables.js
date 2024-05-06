'use server'

import connectionPool from '@/app/config/db.config'
import { unstable_noStore as noStore } from 'next/cache'

const FetchReceivables = async () => {
    noStore();
    try {
        const text = 'SELECT * FROM receivables ORDER BY id ASC';
        const data = await connectionPool.query(text);
        return data.rows;
    }
    catch (error) {
        console.log('Database error: ', error);
        throw new Error('Failed to fetch receivables data.');
    }
}

export default FetchReceivables;