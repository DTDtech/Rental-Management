'use server'

import connectionPool from "@/app/config/db.config"
import { revalidatePath } from "next/cache"

const DeleteReceivable = async (id) => {
    const text = `DELETE FROM receivables WHERE id=$1`;
    const value = [id];
    try {
        await connectionPool.query(text, value);
    }
    catch(error) {
        console.log(error);
        throw new Error("Unable to delete receivable.");
    }
    revalidatePath('/protected/receivables');
}

export default DeleteReceivable;