import { useState } from "react";
import Headar from "../commane/headar";
import Footer from "../commane/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();
  const [user_password, setPassword] = useState("");
  const [user_mobile, setMobile] = useState("");
  const [invalid_user, setUser] = useState("");

  function Login(e) {
    e.preventDefault();
    var obj = {
      user_mobile,
      user_password,
    };

    axios.post("https://a2zithub.org/dairy/abi/user_login", obj).then((res) => {
      console.log(res);
      if (res.data.status == "success") {
        localStorage.setItem("token", res.data.token);
        navigation("/product");
      } else {
        setUser("Invalid UserID & Password");
      }
    });
  }

  return (
    <>
      <Headar />

      <section className="flex min-h-[80vh] items-center justify-center bg-white px-4 py-12">
        <div className="w-full max-w-md rounded-[30px] border border-gray-100 bg-white p-8 shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff]">
          {/* Heading */}
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h1>

          <p className="mb-8 mt-2 text-center text-gray-500">
            Login to your account
          </p>

          {/* Error Message */}
          {invalid_user && (
            <p className="mb-5 rounded-xl border border-gray-100 bg-white p-3 text-center font-medium text-red-600 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
              {invalid_user}
            </p>
          )}

          {/* Login Form */}
          <form className="space-y-6" onSubmit={Login}>
            {/* Phone Number */}
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
                placeholder="Enter your password"
                required
                className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-gray-700 transition hover:text-black"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-2xl border border-gray-100 bg-white py-4 font-bold text-gray-900 shadow-[6px_6px_12px_#d9d9d9,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] active:scale-95"
            >
              Login →
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-7 text-center text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-gray-900 transition hover:text-gray-500"
            >
              Register
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
