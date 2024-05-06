'use server'

import connectionPool from "@/app/config/db.config"
import { revalidatePath } from "next/cache"

const DeleteAsset = async (id) => {
    const text = `DELETE FROM assets WHERE id=$1`;
    const value = [id];
    try {
        await connectionPool.query(text, value);
    }
    catch(error) {
        console.log(error);
        throw new Error("Unable to delete asset.");
    }
    revalidatePath('/protected/assets');
}

export default DeleteAsset;