import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-100 bg-white text-gray-600">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gray-100/70 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gray-100/70 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-3xl font-extrabold text-transparent transition duration-300 hover:scale-105"
            >
              ShopZone<span className="text-gray-400">.</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
              Your one-stop destination for quality products at great prices.
              Shop smart, shop easy!
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-100 bg-white text-gray-700 shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_2px_2px_4px_#e5e5e5,inset_-2px_-2px_4px_#ffffff]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-100 bg-white text-gray-700 shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_2px_2px_4px_#e5e5e5,inset_-2px_-2px_4px_#ffffff]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-gray-900">
              Shop
              <span className="mt-2 block h-1 w-10 rounded-full bg-gray-400 shadow-[2px_2px_4px_#d9d9d9,-2px_-2px_4px_#ffffff]"></span>
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/product"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/best-sellers"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-gray-900">
              Customer Support
              <span className="mt-2 block h-1 w-10 rounded-full bg-gray-400 shadow-[2px_2px_4px_#d9d9d9,-2px_-2px_4px_#ffffff]"></span>
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-gray-900">
              My Account
              <span className="mt-2 block h-1 w-10 rounded-full bg-gray-400 shadow-[2px_2px_4px_#d9d9d9,-2px_-2px_4px_#ffffff]"></span>
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/login"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  Login / Register
                </Link>
              </li>
              <li>
                <Link
                  to="/order_list"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/cardpage"
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-black"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ShopZone. All rights reserved.
          </p>

          {/* Policies */}
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <Link to="/privacy" className="transition hover:text-black">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-black">
              Terms &amp; Conditions
            </Link>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-gray-500">Payments:</span>

            <span className="rounded-xl border border-gray-100 bg-white px-3 py-2 font-bold text-gray-800 shadow-[3px_3px_6px_#d9d9d9,-3px_-3px_6px_#ffffff]">
              UPI
            </span>

            <span className="rounded-xl border border-gray-100 bg-white px-3 py-2 font-bold text-gray-800 shadow-[3px_3px_6px_#d9d9d9,-3px_-3px_6px_#ffffff]">
              VISA
            </span>

            <span className="rounded-xl border border-gray-100 bg-white px-3 py-2 font-bold text-gray-800 shadow-[3px_3px_6px_#d9d9d9,-3px_-3px_6px_#ffffff]">
              COD
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
