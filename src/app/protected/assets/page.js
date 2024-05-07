'use server'

import AssetsSection from "@/app/containers/assets-page/assets-section.js"
import FetchAssets from "@/app/actions/Assets/fetchAssets";

const AssetsPage = async () => {
    const data = await FetchAssets();

    return (
        <div className="w-11/12">
            <div className="flex flex-col">
                <div className="my-5">
                    <h1 className="text-3xl font-semibold">Assets</h1>
                </div>
                <div className="">
                    <AssetsSection assets={data} />
                </div>
            </div>
        </div>
    )
}

export default AssetsPage;