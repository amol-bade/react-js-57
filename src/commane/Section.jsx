
import { Link } from "react-router-dom";

function Section(props) {
  return (
    <Link to={`/product_det/${props.data.product_tbl_id}`} >
      {/* Product Image */}
      <div
        className="overflow-hidden rounded-[24px] bg-white p-2
        shadow-[inset_4px_4px_8px_#e0e0e0,inset_-4px_-4px_8px_#ffffff]"
      >
        <img
          src={props.data.product_img}
          alt={props.data.product_name}
          className="h-56 w-full rounded-[18px] object-cover
          transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-2 pt-5">
        {/* Product Name */}
        <h3
          className="line-clamp-1 text-lg font-extrabold text-gray-900
          transition-colors duration-300 group-hover:text-gray-600"
        >
          {props.data.product_name}
        </h3>

        {/* Product Description */}
        <p className="mt-2 line-clamp-2 min-h-[48px] text-sm leading-6 text-gray-500">
          {props.data.product_description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-gray-100"></div>

        {/* Product Price */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[2px] text-gray-400">
              Price
            </p>

            <p className="mt-1 text-2xl font-extrabold text-gray-900">
              ₹{props.data.price}
            </p>
          </div>

          {/* View Product */}
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl
            border border-white bg-white text-xl font-bold text-gray-800
            shadow-[5px_5px_10px_#dedede,-5px_-5px_10px_#ffffff]
            transition-all duration-300
            group-hover:shadow-[inset_4px_4px_8px_#dedede,inset_-4px_-4px_8px_#ffffff]"
          >
            →
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Section;
