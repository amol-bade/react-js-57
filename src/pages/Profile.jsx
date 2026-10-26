
import Footer from "../commane/footer";
import Headar from "../commane/headar";
import { useNavigate } from "react-router-dom";
import {
  FaUserEdit,
  FaEnvelope,
  FaPhone,
  FaSignOutAlt,
  FaShoppingBag,
  FaHeart,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { RiEmpathizeFill, RiKeyFill } from "react-icons/ri";

function Profile() {
  const navigation = useNavigate();
  const [profile, setProfile] = useState([]);

  function Logout() {
    localStorage.removeItem("token");
    navigation("/login");
  }

  useEffect(() => {
    var obj = {
      token: localStorage.getItem("token"),
    };
    axios
      .post("https://a2zithub.org/dairy/abi/user_profile", obj)
      .then((res) => {
        setProfile(res.data.data[0]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Headar />

      <main className="px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Main Profile Card */}
          <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-[12px_12px_30px_#d9d9d9,-12px_-12px_30px_#ffffff]">
            {/* Cover Banner */}
            <div className="h-44 bg-gradient-to-r from-slate-200 via-white to-blue-100 sm:h-56"></div>
            <div className="px-5 pb-10 sm:px-10">
              <div className="-mt-16 flex flex-col items-center sm:-mt-20">
                <div className="rounded-full border border-gray-100 bg-white p-2 shadow-[6px_6px_14px_#d9d9d9,-6px_-6px_14px_#ffffff]">
                  <img
                    src={profile.profile}
                    alt="Profile"
                    className="h-28 w-28 rounded-full border-4 border-white object-cover sm:h-36 sm:w-36"
                  />
                </div>

                <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
                  {profile.user_name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Full Stack Developer
                </p>

                <span className="mt-3 rounded-full border border-gray-100 bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-[inset_3px_3px_7px_#e5e5e5,inset_-3px_-3px_7px_#ffffff]">
                  ● Active
                </span>
              </div>

              {/* Details Grid */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[6px_6px_12px_#d9d9d9,-6px_-6px_12px_#ffffff] transition duration-300 hover:-translate-y-1">
                  <div className="rounded-xl border border-gray-100 bg-white p-4 text-xl text-gray-700 shadow-[inset_3px_3px_6px_#e5e5e5,inset_-3px_-3px_6px_#ffffff]">
                    <RiEmpathizeFill />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="break-all font-semibold text-gray-900">
                      {profile.user_name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[6px_6px_12px_#d9d9d9,-6px_-6px_12px_#ffffff] transition duration-300 hover:-translate-y-1">
                  <div className="rounded-xl border border-gray-100 bg-white p-4 text-xl text-gray-700 shadow-[inset_3px_3px_6px_#e5e5e5,inset_-3px_-3px_6px_#ffffff]">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="font-semibold text-gray-900">
                      {profile.user_mobile}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[6px_6px_12px_#d9d9d9,-6px_-6px_12px_#ffffff] transition duration-300 hover:-translate-y-1">
                  <div className="rounded-xl border border-gray-100 bg-white p-4 text-xl text-gray-700 shadow-[inset_3px_3px_6px_#e5e5e5,inset_-3px_-3px_6px_#ffffff]">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="break-all font-semibold text-gray-900">
                      {profile.user_email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[6px_6px_12px_#d9d9d9,-6px_-6px_12px_#ffffff] transition duration-300 hover:-translate-y-1">
                  <div className="rounded-xl border border-gray-100 bg-white p-4 text-xl text-gray-700 shadow-[inset_3px_3px_6px_#e5e5e5,inset_-3px_-3px_6px_#ffffff]">
                    <RiKeyFill />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Password</p>
                    <p className="font-semibold text-gray-900">
                      {profile.user_password}
                    </p>
                  </div>
                </div>
              </div>

              {/* Order History & Wishlist */}
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-[7px_7px_15px_#d9d9d9,-7px_-7px_15px_#ffffff] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="rounded-2xl border border-gray-100 bg-white p-4 text-2xl text-gray-700 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
                    <FaShoppingBag />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Order History
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      View your previous orders
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-[7px_7px_15px_#d9d9d9,-7px_-7px_15px_#ffffff] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="rounded-2xl border border-gray-100 bg-white p-4 text-2xl text-gray-700 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
                    <FaHeart />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      My Wishlist
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      View your liked products
                    </p>
                  </div>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-5">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-8 py-3.5 font-semibold text-gray-800 shadow-[6px_6px_14px_#d9d9d9,-6px_-6px_14px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] active:scale-95"
                >
                  <FaUserEdit className="text-lg" />
                  Edit Profile
                </button>

                <button
                  onClick={Logout}
                  type="button"
                  className="flex items-center gap-3 rounded-2xl border border-red-100 bg-white px-8 py-3.5 font-semibold text-red-600 shadow-[6px_6px_14px_#d9d9d9,-6px_-6px_14px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:bg-red-50 active:scale-95"
                >
                  <FaSignOutAlt className="text-lg" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
