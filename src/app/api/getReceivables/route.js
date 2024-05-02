'use server'

import connectionPool from '@/app/config/db.config'
import { revalidateTag } from 'next/cache'

export async function GET(request) {
    try {
        const text = 'SELECT * FROM receivables ORDER BY id ASC';
        const result = await connectionPool.query(text);
        if (result.rows != []) {
            revalidateTag("receivables");
            const responseData = result.rows;
            return Response.json({ responseData });
        }
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

