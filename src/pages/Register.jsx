import { Link } from "react-router-dom";
import Headar from "../commane/headar";
import Footer from "../commane/footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user_name, setName] = useState("");
  const [user_mobile, setMobile] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const navigetion = useNavigate();

  function Register(e) {
    e.preventDefault();
    var obj = {
      user_name,
      user_email,
      user_mobile,
      user_password,
    };

    axios
      .post("https://a2zithub.org/dairy/abi/user_register", obj)
      .then((res) => {});
    navigetion("/login");
  }

  return (
    <>
      <Headar />

      <section className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
        <div className="w-full max-w-lg rounded-[30px] border border-gray-100 bg-white p-8 shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff]">
          {/* Heading */}
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            Create Account
          </h1>

          <p className="mb-8 mt-2 text-center text-gray-500">
            Register to get started
          </p>

          <form className="space-y-6" onSubmit={Register}>
            {/* Name */}
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Full Name
              </label>

              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Email Address
              </label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Phone Number
              </label>

              <input
                onChange={(e) => setMobile(e.target.value)}
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
                required
                className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Password
              </label>

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Create a password"
                minLength={8}
                required
                className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full rounded-2xl border border-gray-100 bg-white py-4 font-bold text-gray-900 shadow-[6px_6px_12px_#d9d9d9,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] active:scale-95"
            >
              Create Account →
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-7 text-center text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-gray-900 transition hover:text-gray-500"
            >
              Login
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
