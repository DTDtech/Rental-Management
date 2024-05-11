'use server'

import client_DB from "@/app/config/db.config"
import { revalidatePath } from "next/cache"

const DeleteOrder = async (id) => {
    const order = {
        _id: new ObjectId(id)
    }
    try {
        await client_DB.collection('orders').deleteOne(order);
    }
    catch(error) {
        console.log(error);
        throw new Error("Unable to delete order.");
    }
    revalidatePath('/protected/orders');
}

export default DeleteOrder;