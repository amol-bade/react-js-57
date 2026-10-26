
import Headar from "../commane/Header";
import Footer from "../commane/footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Product_det() {
  const { product_id } = useParams();
  const Navigation = useNavigate();
  const [Product_det, setProduct_det] = useState({});
  console.log(Product_det);

  const obj = {
    product_id: product_id,
    token: localStorage.getItem("token"),
  };

  useEffect(() => {
    axios
      .post("https://a2zithub.org/dairy/abi/product_by_id", obj)
      .then((res) => {
        setProduct_det(res.data);
      });
  }, [addToCard]);

  function addToCard() {
    if (!localStorage.getItem("token"))
      Navigation("/login");

    axios.post("https://a2zithub.org/dairy/abi/addtocart", obj).then((res) => {
      console.log("response", res.data);
      toast.success("Add To Card");
    });
  }

  return (
    <>
      <Headar />
      <ToastContainer />

      {/* Product Details Section */}
      <section className="min-h-screen bg-white px-4 py-16 text-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 rounded-[35px] border border-gray-100 bg-white p-6 shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff] md:grid-cols-2 md:p-10">

            {/* Product Image */}
            <div className="flex items-center justify-center rounded-[30px] border border-gray-100 bg-white p-5 shadow-[inset_6px_6px_14px_#e5e5e5,inset_-6px_-6px_14px_#ffffff]">
              <img
                src={Product_det.product_img}
                alt={Product_det.product_name}
                className="max-h-[450px] w-full rounded-2xl object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center p-3">
              <span className="inline-block w-fit rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-gray-600 shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]">
                Product Details
              </span>

              <h1 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">
                {Product_det.product_name}
              </h1>

              <p className="mt-5 leading-7 text-gray-600">
                {Product_det.details}
              </p>

              <p className="mt-6 text-4xl font-extrabold text-gray-900">
                ₹{Product_det.price}
              </p>

              {/* Add To Cart and Buy Now Buttons */}
              <div className="mt-6 flex flex-row gap-5">

                {/* Add To Cart Button */}
                {Product_det.cart == "Yes" ? (
                  <Link
                    to="/cardpage"
                    type="button"
                    className="flex-1 rounded-2xl border border-gray-100 bg-white px-3 py-4 text-center font-bold text-gray-800 shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:scale-95 hover:shadow-[inset_5px_5px_10px_#e0e0e0,inset_-5px_-5px_10px_#ffffff] active:scale-90"
                  >
                    Go To Cart
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={addToCard}
                    className="flex-1 rounded-2xl border border-gray-100 bg-white px-3 py-4 font-bold text-gray-800 shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:scale-95 hover:shadow-[inset_5px_5px_10px_#e0e0e0,inset_-5px_-5px_10px_#ffffff] active:scale-90"
                  >
                    Add To Cart
                  </button>
                )}

                {/* Buy Now Button */}
                <button
                  type="button"
                  className="flex-1 rounded-2xl border border-gray-100 bg-white px-3 py-4 font-bold text-gray-800 shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:scale-95 hover:shadow-[inset_5px_5px_10px_#e0e0e0,inset_-5px_-5px_10px_#ffffff] active:scale-90"
                >
                  Buy Now
                </button>
              </div>

              {/* Back to Products */}
              <Link
                to="/product"
                className="mt-6 w-fit font-semibold text-gray-600 transition-colors hover:text-gray-900"
              >
                ← Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Product_det;
