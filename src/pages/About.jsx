import Footer from "../commane/footer";
import Headar from "../commane/headar";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Headar />

      {/* Hero Section */}
      <section className="bg-white px-6 py-12 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-[10px_10px_20px_#d9d9d9,-10px_-10px_20px_#ffffff] md:p-12">
          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            About Us
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Learn more about our company, our mission, and what makes us
            different.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
              alt="Our Team"
              className="h-80 w-full rounded-2xl object-cover"
            />
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff]">
            <h2 className="mb-5 text-3xl font-extrabold text-gray-900">
              Who We Are
            </h2>

            <p className="mb-4 leading-7 text-gray-600">
              Welcome to our website! We are passionate about providing quality
              products and a great shopping experience.
            </p>

            <p className="mb-8 leading-7 text-gray-600">
              Our goal is to make shopping simple, convenient, and enjoyable for
              every customer.
            </p>

            <Link
              to="/product"
              className="inline-block rounded-xl border border-gray-100 bg-white px-7 py-3 font-bold text-gray-900 shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] transition duration-300 hover:shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] hover:text-gray-600"
            >
              Explore Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 md:text-4xl">
            What Makes Us Different?
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Our Mission */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff] transition duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-white text-3xl text-gray-700 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
                🎯
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="leading-7 text-gray-600">
                To provide quality products and excellent customer service.
              </p>
            </div>

            {/* Our Vision */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff] transition duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-white text-3xl text-gray-700 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
                🚀
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Our Vision
              </h3>

              <p className="leading-7 text-gray-600">
                To become a trusted choice for customers everywhere.
              </p>
            </div>

            {/* Our Values */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[8px_8px_18px_#d9d9d9,-8px_-8px_18px_#ffffff] transition duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-white text-3xl text-gray-700 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
                💎
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Our Values
              </h3>

              <p className="leading-7 text-gray-600">
                Quality, honesty, trust, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
