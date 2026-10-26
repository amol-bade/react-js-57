import { useEffect, useState } from "react";
import Headar from "../commane/headar";
import Footer from "../commane/footer";
import Section from "../commane/Section";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [images, setImages] = useState([]);
  const [feature_prod, setFeature] = useState([]);
  const [new_product, setNewProduct] = useState([]);
  const [best_selling_product, setBest_Selling_Product] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get("https://a2zithub.org/dairy/abi/slider_det").then((res) => {
      setImages(res.data);
    });
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    axios.get("https://a2zithub.org/dairy/abi/feature_product").then((res) => {
      setFeature(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://a2zithub.org/dairy/abi/new_product").then((res) => {
      setNewProduct(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://a2zithub.org/dairy/abi/best_selling_product")
      .then((res) => {
        setBest_Selling_Product(res.data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Headar />

      {/* Image Slider */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div
          className="relative overflow-hidden border border-gray-100 bg-white shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff]"
        >
          {images.length > 0 && images[current] && (
            <img
              src={images[current].slider_img}
              alt="Slider image"
              className="h-64 w-full  object-cover md:h-96"
            />
          )}
        </div>
      </div>

      {/* Our Products */}
      <section className="w-full bg-white px-6 py-14">
        <div className="mx-auto mb-10 flex max-w-7xl items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            Our Products
          </h2>

          <Link
            to="/product"
            className="rounded-2xl border border-gray-100 bg-white px-5 py-3
            font-semibold text-gray-900
            shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]
            transition-all duration-300
            hover:shadow-[inset_4px_4px_8px_#d9d9d9,inset_-4px_-4px_8px_#ffffff]
            active:scale-95"
          >
            View All →
          </Link>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {feature_prod.map((item, index) => (
            <div
              key={item.id ?? index}
              className="rounded-[28px] border border-gray-100 bg-white p-4
              shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[12px_12px_22px_#d9d9d9,-12px_-12px_22px_#ffffff]"
            >
              <Section data={item} />
            </div>
          ))}
        </div>
      </section>

      {/* New Products */}
      <section className="w-full border-y border-gray-100 bg-white px-6 py-14">
        <div className="mx-auto mb-10 flex max-w-7xl items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            New Products
          </h2>

          <Link
            to="/product"
            className="rounded-2xl border border-gray-100 bg-white px-5 py-3
            font-semibold text-gray-900
            shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]
            transition-all duration-300
            hover:shadow-[inset_4px_4px_8px_#d9d9d9,inset_-4px_-4px_8px_#ffffff]
            active:scale-95"
          >
            View All →
          </Link>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {new_product.map((item, index) => (
            <div
              key={item.id ?? index}
              className="rounded-[28px] border border-gray-100 bg-white p-4
              shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[12px_12px_22px_#d9d9d9,-12px_-12px_22px_#ffffff]"
            >
              <Section data={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="w-full bg-white px-6 py-14">
        <div className="mx-auto mb-10 flex max-w-7xl items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            Best Selling Products
          </h2>

          <Link
            to="/product"
            className="rounded-2xl border border-gray-100 bg-white px-5 py-3
            font-semibold text-gray-900
            shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]
            transition-all duration-300
            hover:shadow-[inset_4px_4px_8px_#d9d9d9,inset_-4px_-4px_8px_#ffffff]
            active:scale-95"
          >
            View All →
          </Link>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {best_selling_product.map((item, index) => (
            <div
              key={item.id ?? index}
              className="rounded-[28px] border border-gray-100 bg-white p-4
              shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[12px_12px_22px_#d9d9d9,-12px_-12px_22px_#ffffff]"
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

export default Home;
