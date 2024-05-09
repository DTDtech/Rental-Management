'use server'

import FetchOrderByID from "@/app/actions/Orders/fetchOrderByID";
import FullOrderForm from "@/app/containers/full-order-page/full-order-form";

const FullOrderPage = async ({ params }) => {
    const id = params.id;
    const fullOrder = await FetchOrderByID(id);

    return (
        <div className="w-11/12">
            <div className="flex flex-col">
                <div className="my-5">
                    <h1 className="text-3xl font-semibold">View Full Order #{id}</h1>
                </div>
                <div>
                    <FullOrderForm placeholderData={fullOrder} />
                </div>
            </div>
        </div>
    )
}

export default FullOrderPage;