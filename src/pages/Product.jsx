
import { useEffect, useState } from "react";
import Footer from "../commane/footer";
import Headar from "../commane/Header";
import Section from "../commane/Section";
import axios from "axios";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://a2zithub.org/dairy/abi/product_det").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Headar />

      <section className="w-full bg-white px-6 py-14">
        <div className="mx-auto mb-10 flex max-w-7xl items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            Our Products
          </h2>

          <span className="rounded-2xl border border-gray-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]">
            {data.length} Products
          </span>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={item.product_tbl_id ?? index}
              className="rounded-[28px] border border-gray-100 bg-white p-4 shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_22px_#d9d9d9,-12px_-12px_22px_#ffffff]"
            >
              <Section data={item} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Product;
