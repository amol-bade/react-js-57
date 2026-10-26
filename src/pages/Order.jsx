
import Headar from "../commane/headar";
import Footer from "../commane/footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Order() {
    const [data, setData] = useState([]);

    useEffect(() => {
        var obj = {
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/order_list", obj).then((res) => {
            console.log("Response:", res.data);
            setData(res.data.order_det);
        });
    }, []);
    return (


        <div className="min-h-screen bg-[#f5f7f6] text-[#18332d]">
            <Headar />

            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-10">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#71968a]">
                        ShopZone / My Account
                    </p>

                    <h1 className="text-3xl font-extrabold sm:text-4xl">
                        My Orders
                    </h1>

                    <p className="mt-3 text-gray-500">
                        View and manage all your orders in one place.
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-3xl bg-[#f5f7f6] p-7 shadow-[8px_8px_18px_#dce2df,-8px_-8px_18px_#ffffff]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Total Orders</p>
                                <h2 className="mt-3 text-3xl font-bold">My Orders</h2>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5eee9] text-2xl shadow-[4px_4px_9px_#dce2df,-4px_-4px_9px_#ffffff]">
                                📦
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-[#f5f7f6] p-7 shadow-[8px_8px_18px_#dce2df,-8px_-8px_18px_#ffffff]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Order Support</p>
                                <h2 className="mt-3 text-2xl font-bold">Here to Help</h2>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5eee9] text-2xl shadow-[4px_4px_9px_#dce2df,-4px_-4px_9px_#ffffff]">
                                🎧
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-[#f5f7f6] p-7 shadow-[8px_8px_18px_#dce2df,-8px_-8px_18px_#ffffff]">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Shopping</p>
                                <h2 className="mt-3 text-2xl font-bold">ShopZone</h2>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5eee9] text-2xl shadow-[4px_4px_9px_#dce2df,-4px_-4px_9px_#ffffff]">
                                🛍️
                            </div>
                        </div>
                    </div>

                </div>

                {/* Order List */}
                <div className="rounded-3xl bg-[#f5f7f6] p-5 shadow-[8px_8px_18px_#dce2df,-8px_-8px_18px_#ffffff] sm:p-8">

                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold">Recent Orders</h2>
                            <p className="mt-2 text-sm text-gray-500">
                                Your order details will appear here.
                            </p>
                        </div>

                        <span className="rounded-xl bg-[#e5eee9] px-4 py-2 text-sm font-semibold text-[#356453] shadow-[4px_4px_8px_#dce2df,-4px_-4px_8px_#ffffff]">
                            Order History
                        </span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-2xl shadow-[inset_4px_4px_8px_#dce2df,inset_-4px_-4px_8px_#ffffff]">
                        <table className="w-full min-w-[700px] text-left">
                            <thead>
                                <tr className="border-b border-[#dfe7e2] text-xs uppercase tracking-wider text-gray-500">
                                    <th className="px-6 py-5 font-semibold">Order ID</th>
                                    <th className="px-6 py-5 font-semibold">Date</th>
                                    <th className="px-6 py-5 font-semibold">Amount</th>
                                    <th className="px-6 py-5 font-semibold">Payment</th>
                                    <th className="px-6 py-5 font-semibold">Status</th>
                                    <th className="px-6 py-5 font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((val, index) => (
                                        <tr key={val.product_order_id || index}
                                            className="border-b border-[#dfe7e2] transition hover:bg-[#edf3ef]">
                                            <td className="px-6 py-5 font-semibold">
                                                #{val.product_order_id}
                                            </td>

                                            <td className="px-6 py-5 text-gray-500">
                                                {val.entry_date}
                                            </td>

                                            <td className="px-6 py-5 font-bold text-[#285343]">
                                                ₹{val.ttl_amount}
                                            </td>

                                            <td className="px-6 py-5 text-gray-500">
                                                {val.payment_type}
                                            </td>

                                            <td className="px-6 py-5">
                                                <span className="rounded-full bg-[#e2eee6] px-3 py-2 text-xs font-semibold text-[#356453]">
                                                    {val.order_status}
                                                </span>
                                            </td>

                                            <td className="px-6 py-5">
                                                <button className="rounded-xl bg-[#e5eee9] px-4 py-2 text-sm font-semibold text-[#285343] shadow-[3px_3px_7px_#dce2df,-3px_-3px_7px_#ffffff]">
                                                    View Order
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Order;
