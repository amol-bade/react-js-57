import { useEffect, useState } from "react";
import Headar from "../commane/headar";
import Footer from "../commane/footer";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [grand_total, setGrand_total] = useState()
  console.log(grand_total);


  // console.log(cart);

  const obj = {
    token: localStorage.getItem("token"),
  };

  useEffect(() => {
    axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {
      setCart(res.data);

      let sum = 0;

      for (var i = 0; i < res.data.length; i++) {
        // console.log(res.data[i].price);
        // console.log(res.data[i].qty);

        sum += Number(res.data[i].price) * Number(res.data[i].qty)
      }

      setGrand_total(sum)
    });
  }, [remove]);

  function remove(product_econ_cart_id) {
    var obj = {
      product_econ_cart_id: product_econ_cart_id,
      token: localStorage.getItem("token"),
    };

    axios
      .post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj)
      .then((res) => {
        // console.log("Response", res.data);
      });
  }

  function increment(product_econ_cart_id) {
    var obj = {
      product_econ_cart_id: product_econ_cart_id,
      token: localStorage.getItem("token"),
    };

    axios
      .post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj)
      .then((res) => {
        // console.log("Response", res.data);
      });
  }

  function decrement(product_econ_cart_id) {
    var obj = {
      product_econ_cart_id: product_econ_cart_id,
      token: localStorage.getItem("token"),
    };

    axios
      .post("https://a2zithub.org/dairy/abi/dec_cart_qty", obj)
      .then((res) => {
        // console.log("Response", res.data);
      });
  }

  return (
    <>
      <Headar />

      <section className="min-h-screen bg-white px-4 py-12 text-gray-900 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900">
            Shopping Cart
          </h1>

          <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white p-5 shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff]">
            <table className="w-full min-w-[800px] border-separate border-spacing-y-4 text-left">
              <thead>
                <tr className="text-sm uppercase tracking-wider text-gray-500">
                  <th className="px-5 py-4">Image</th>
                  <th className="px-5 py-4">Product</th>
                  <th className="px-5 py-4">Price</th>
                  <th className="px-5 py-4 text-center">Quantity</th>
                  <th className="px-5 py-4">Total</th>
                  <th className="px-5 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((val, index) => (
                  <tr
                    key={val.product_tbl_id || index}
                    className="bg-white text-gray-800 shadow-[5px_5px_12px_#d9d9d9,-5px_-5px_12px_#ffffff]"
                  >
                    <td className="rounded-l-2xl border-y border-l border-gray-100 px-5 py-5">
                      <div className="flex h-20 w-20 items-center justify-center  border border-gray-100 bg-white shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
                        <img
                          src={val.product_img}
                          alt={val.product_name}
                        // className="h-16 w-16 rounded-xl object-contain"
                        />
                      </div>
                    </td>

                    <td className="border-y border-gray-100 px-5 py-5">
                      <h3 className="font-bold text-gray-900">
                        {val.product_name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {val.details}
                      </p>
                    </td>

                    <td className="border-y border-gray-100 px-5 py-5 font-semibold text-gray-700">
                      ₹{val.price}
                    </td>

                    <td className="border-y border-gray-100 px-5 py-5 text-center">
                      <div className="inline-flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-4 py-2 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
                        <button
                          onClick={() => decrement(val.product_econ_cart_id)}
                          className="font-bold text-gray-700 transition hover:text-black"
                        >
                          −
                        </button>

                        <span className="font-bold text-gray-900">
                          {val.qty}
                        </span>

                        <button
                          onClick={() => increment(val.product_econ_cart_id)}
                          className="font-bold text-gray-700 transition hover:text-black"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="border-y border-gray-100 px-5 py-5 font-bold text-gray-900">
                      ₹{val.price * val.qty}
                    </td>

                    <td className="rounded-r-2xl border-y border-r border-gray-100 px-5 py-5 text-center">
                      <button
                        onClick={() => remove(val.product_econ_cart_id)}
                        className="rounded-xl border border-gray-100 bg-white px-4 py-2 font-semibold text-red-500 shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff] transition hover:bg-red-500 hover:text-white active:scale-95"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cart Total & Checkout - White Claymorphism */}
            <div className="mt-8 flex flex-col gap-6 rounded-[30px] border border-white bg-white p-7 shadow-[12px_12px_28px_#dedede,-12px_-12px_28px_#ffffff] sm:flex-row sm:items-center sm:justify-between sm:p-9">

              <div>
                <p className="text-xs font-bold uppercase tracking-[3px] text-gray-400">
                  Order Summary
                </p>

                <div className="mt-5 flex items-center gap-4">

                  <div className="flex h-14 items-center justify-center rounded-[20px] border border-white bg-white px-5 shadow-[6px_6px_12px_#e0e0e0,-6px_-6px_12px_#ffffff]">
                    <span className="text-2xl font-extrabold text-gray-800">
                      ₹{grand_total}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Grand Total
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Including all products
                    </p>
                  </div>

                </div>

                <p className="mt-4 text-xs text-gray-400">
                  Your shopping, made simple.
                </p>
              </div>

              <Link to="/checkout"
                className="group flex items-center justify-center gap-3 rounded-[20px] border border-white bg-white px-8 py-4 font-bold text-gray-800 shadow-[7px_7px_16px_#dedede,-7px_-7px_16px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_5px_5px_10px_#e0e0e0,inset_-5px_-5px_10px_#ffffff] active:scale-95 sm:min-w-[240px]"
              >
                Proceed to Checkout

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Cart;
