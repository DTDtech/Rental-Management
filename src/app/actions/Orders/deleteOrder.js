'use server'

import connectionPool from "@/app/config/db.config"
import { revalidatePath } from "next/cache"

const DeleteOrder = async (id) => {
    const text = `DELETE FROM orders WHERE id=$1`;
    const value = [id];
    try {
        await connectionPool.query(text, value);
    }
    catch(error) {
        console.log(error);
        throw new Error("Unable to delete order.");
    }
    revalidatePath('/protected/orders');
}

export default DeleteOrder;