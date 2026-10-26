
import { NavLink, Link } from "react-router-dom";
import { RiLuggageCartFill, RiIdCardFill } from "react-icons/ri";

function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-2xl font-extrabold text-gray-900 transition duration-300 hover:scale-105 sm:text-3xl"
        >
          ShopZone<span className="text-gray-400">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4 lg:gap-5">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-xl px-2 py-2 text-sm font-semibold transition-all duration-300 sm:px-4 sm:text-base ${
                isActive
                  ? "bg-white text-gray-900 shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff]"
                  : "text-gray-600 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff]"
              }`
            }
          >
            Home
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-xl px-2 py-2 text-sm font-semibold transition-all duration-300 sm:px-4 sm:text-base ${
                isActive
                  ? "bg-white text-gray-900 shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff]"
                  : "text-gray-600 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff]"
              }`
            }
          >
            About
          </NavLink>

          {/* Product */}
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `rounded-xl px-2 py-2 text-sm font-semibold transition-all duration-300 sm:px-4 sm:text-base ${
                isActive
                  ? "bg-white text-gray-900 shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff]"
                  : "text-gray-600 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff]"
              }`
            }
          >
            Product
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-xl px-2 py-2 text-sm font-semibold transition-all duration-300 sm:px-4 sm:text-base ${
                isActive
                  ? "bg-white text-gray-900 shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff]"
                  : "text-gray-600 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff]"
              }`
            }
          >
            Contact
          </NavLink>

          {/* Logged In */}
          {localStorage.getItem("token") ? (
            <>
              {/* Profile */}
              <NavLink
                to="/profile"
                title="Profile"
                aria-label="Profile"
                className={({ isActive }) =>
                  `flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-100 bg-white text-xl transition-all duration-300 hover:-translate-y-1 sm:h-11 sm:w-11 ${
                    isActive
                      ? "text-gray-900 shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff]"
                      : "text-gray-600 shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff] hover:text-gray-900"
                  }`
                }
              >
                <RiIdCardFill />
              </NavLink>

              {/* Cart */}
              <NavLink
                to="/cardpage"
                title="Shopping Cart"
                aria-label="Shopping Cart"
                className={({ isActive }) =>
                  `flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-100 bg-white text-xl transition-all duration-300 hover:-translate-y-1 sm:h-11 sm:w-11 ${
                    isActive
                      ? "text-gray-900 shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff]"
                      : "text-gray-600 shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff] hover:text-gray-900"
                  }`
                }
              >
                <RiLuggageCartFill />
              </NavLink>
            </>
          ) : (
            <>
              {/* Login */}
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `hidden rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 sm:inline-block sm:px-4 sm:text-base ${
                    isActive
                      ? "text-gray-900 shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff]"
                      : "text-gray-600 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff]"
                  }`
                }
              >
                Login
              </NavLink>

              {/* Register */}
              <Link
                to="/register"
                className="rounded-xl border border-gray-100 bg-white px-3 py-2.5 text-sm font-bold text-gray-900 shadow-[4px_4px_8px_#d9d9d9,-4px_-4px_8px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff] active:scale-95 sm:px-5"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;