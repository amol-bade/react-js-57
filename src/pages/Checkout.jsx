
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Headar from "../commane/headar";
import Footer from "../commane/footer";
import axios from "axios";

function Checkout() {
    const navigate = useNavigate();

    const [area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("India");
    const [pincode, setPincode] = useState("");
    const [payment_type, setPayment_type] = useState("COD");
    const [loading, setLoading] = useState(false);

    const [cart, setCart] = useState([]);
    const [grand_total, setGrand_total] = useState(0);

    // Get Cart Data
    useState(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        axios
            .post("https://a2zithub.org/dairy/abi/cart_list", { token })
            .then((res) => {
                console.log("Cart:", res.data);

                if (Array.isArray(res.data)) {
                    setCart(res.data);

                    let sum = 0;

                    for (let i = 0; i < res.data.length; i++) {
                        sum +=
                            Number(res.data[i].price) *
                            Number(res.data[i].qty);
                    }

                    setGrand_total(sum);
                }
            })

    }, []);

    // Place Order
    function placeOrder(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        const obj = {
            area: area,
            city: city,
            district: district,
            state: state,
            country: country,
            pincode: pincode,
            payment_type: payment_type,
            token: token,
        };

        setLoading(true);

        axios
            .post("https://a2zithub.org/dairy/abi/place_order", obj)
            .then((res) => {
                console.log("Order Response:", res.data);

                if (res.data.status === "success") {
                    alert("Order placed successfully!");
                    navigate("/product");
                } else {
                    alert(res.data.msg || "Order place failed");
                }
            })

    }

    return (
        <>
            <Headar />

            <div className="min-h-screen bg-[#f5f5f5] px-4 py-10 sm:px-8">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mb-8 text-center">
                        <p className="text-sm font-bold uppercase tracking-[4px] text-gray-400">
                            ShopZone
                        </p>

                        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Checkout
                        </h1>

                        <p className="mt-2 text-gray-500">
                            Complete your delivery details and place your order.
                        </p>
                    </div>

                    <form
                        onSubmit={placeOrder}
                        className="grid grid-cols-1 gap-8 lg:grid-cols-3"
                    >

                        {/* Delivery Form */}
                        <div className="space-y-6 lg:col-span-2">

                            <div className="rounded-[30px] border border-white bg-white p-6 shadow-[10px_10px_25px_#dedede,-10px_-10px_25px_#ffffff] sm:p-8">

                                <h2 className="text-xl font-extrabold text-gray-900">
                                    Delivery Address
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Enter your complete delivery address.
                                </p>

                                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

                                    {/* Area */}
                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Area / Street Address
                                        </label>

                                        <input
                                            type="text"
                                            value={area}
                                            onChange={(e) => setArea(e.target.value)}
                                            placeholder="Enter area and street"
                                            required
                                            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-gray-500"
                                        />
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            placeholder="Enter city"
                                            required
                                            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-500"
                                        />
                                    </div>

                                    {/* District */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            District
                                        </label>

                                        <input
                                            type="text"
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)}
                                            placeholder="Enter district"
                                            required
                                            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-500"
                                        />
                                    </div>

                                    {/* State */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            State
                                        </label>

                                        <input
                                            type="text"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            placeholder="Enter state"
                                            required
                                            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-500"
                                        />
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Country
                                        </label>

                                        <input
                                            type="text"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            required
                                            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-500"
                                        />
                                    </div>

                                    {/* Pincode */}
                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Pincode
                                        </label>

                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]{6}"
                                            maxLength={6}
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                            placeholder="Enter 6-digit pincode"
                                            required
                                            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-500"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="rounded-[30px] border border-white bg-white p-6 shadow-[10px_10px_25px_#dedede,-10px_-10px_25px_#ffffff] sm:p-8">

                                <h2 className="text-xl font-extrabold text-gray-900">
                                    Payment Method
                                </h2>

                                <div className="mt-5 space-y-4">

                                    <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-gray-400">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="COD"
                                            checked={payment_type === "COD"}
                                            onChange={(e) =>
                                                setPayment_type(e.target.value)
                                            }
                                            className="h-5 w-5 accent-gray-900"
                                        />

                                        <div>
                                            <p className="font-bold text-gray-800">
                                                Cash on Delivery
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Pay when your order arrives.
                                            </p>
                                        </div>
                                    </label>

                                    <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-gray-400">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="ONLINE"
                                            checked={payment_type === "ONLINE"}
                                            onChange={(e) =>
                                                setPayment_type(e.target.value)
                                            }
                                            className="h-5 w-5 accent-gray-900"
                                        />

                                        <div>
                                            <p className="font-bold text-gray-800">
                                                Online Payment
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Select online payment if supported by the API.
                                            </p>
                                        </div>
                                    </label>

                                </div>
                            </div>

                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="sticky top-6 rounded-[30px] border border-white bg-white p-6 shadow-[10px_10px_25px_#dedede,-10px_-10px_25px_#ffffff] sm:p-8">

                                <h2 className="text-xl font-extrabold text-gray-900">
                                    Order Summary
                                </h2>

                                <div className="mt-6 space-y-4">

                                    <div className="flex justify-between gap-3 text-sm text-gray-500">
                                        <span>Total Products</span>
                                        <span className="font-bold text-gray-800">
                                            {cart.length}
                                        </span>
                                    </div>

                                    <div className="flex justify-between gap-3 text-sm text-gray-500">
                                        <span>Payment</span>
                                        <span className="font-bold text-gray-800">
                                            {payment_type}
                                        </span>
                                    </div>

                                    <div className="border-t border-dashed border-gray-300 pt-5">
                                        <p className="text-sm font-medium text-gray-500">
                                            Grand Total
                                        </p>

                                        <h3 className="mt-2 text-3xl font-extrabold text-gray-900">
                                            ₹{grand_total}
                                        </h3>
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    disabled={loading || cart.length === 0}
                                    className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#051F20] px-5 py-4 font-bold text-white transition hover:bg-[#163832] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {loading ? "Processing..." : "Place Order"}
                                    {!loading && <span className="text-xl">→</span>}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => navigate("/cart")}
                                    className="mt-4 w-full rounded-2xl border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                                >
                                    Back to Cart
                                </button>

                                <p className="mt-5 text-center text-xs text-gray-400">
                                    Thank you for shopping with ShopZone.
                                </p>

                            </div>
                        </div>

                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Checkout;
