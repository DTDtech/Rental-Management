'use server'

import OrdersSection from "@/app/containers/orders-page/orders-section.js"
import FetchOrders from "@/app/actions/Orders/fetchOrders"

const OrdersPage = async () => {
    const data = await FetchOrders();

    return (
        <div className="w-11/12">
            <div className="flex flex-col">
                <div className="my-5">
                    <h1 className="text-3xl font-semibold">Orders</h1>
                </div>
                <div className="">
                    <OrdersSection orders={data} />
                </div>
            </div>
        </div>
    )
}

export default OrdersPage;