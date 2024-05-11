'use server'


import client_DB from "@/app/config/db.config"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"

const DeleteAsset = async (id) => {
    const asset = {
        _id: new ObjectId(id)
    }
    try {
        await client_DB.collection('assets').deleteOne(asset);
    }
    catch(error) {
        console.log(error);
        throw new Error("Unable to delete asset.");
    }
    revalidatePath('/protected/assets');
}

export default DeleteAsset;