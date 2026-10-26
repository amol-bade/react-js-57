import { useState } from "react";
import Headar from "../commane/Header";
import Footer from "../commane/footer";

function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Headar />

      {/* Hero Section */}
      <section className="bg-white px-6 py-12 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-[10px_10px_20px_#d9d9d9,-10px_-10px_20px_#ffffff] md:p-12">
          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-[30px] border border-gray-100 bg-white p-8 shadow-[8px_8px_20px_#d9d9d9,-8px_-8px_20px_#ffffff]">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mb-8 leading-7 text-gray-600">
              Have any questions about our products or services? Send us a
              message and we will get back to you.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-[5px_5px_12px_#d9d9d9,-5px_-5px_12px_#ffffff]">
                <div className="rounded-2xl border border-gray-100 bg-white p-4 text-xl shadow-[inset_3px_3px_6px_#e5e5e5,inset_-3px_-3px_6px_#ffffff]">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@example.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-[5px_5px_12px_#d9d9d9,-5px_-5px_12px_#ffffff]">
                <div className="rounded-2xl border border-gray-100 bg-white p-4 text-xl shadow-[inset_3px_3px_6px_#e5e5e5,inset_-3px_-3px_6px_#ffffff]">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 12345 67890</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-[5px_5px_12px_#d9d9d9,-5px_-5px_12px_#ffffff]">
                <div className="rounded-2xl border border-gray-100 bg-white p-4 text-xl shadow-[inset_3px_3px_6px_#e5e5e5,inset_-3px_-3px_6px_#ffffff]">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Ahilyanagar, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 rounded-[30px] border border-gray-100 bg-white p-8 shadow-[8px_8px_20px_#d9d9d9,-8px_-8px_20px_#ffffff] md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition focus:ring-2 focus:ring-gray-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition focus:ring-2 focus:ring-gray-300"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition focus:ring-2 focus:ring-gray-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full resize-none rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-900 shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] outline-none transition focus:ring-2 focus:ring-gray-300"
            />

            <button
              type="submit"
              className="w-full rounded-2xl border border-gray-100 bg-white py-4 font-bold text-gray-900 shadow-[5px_5px_12px_#d9d9d9,-5px_-5px_12px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff] active:translate-y-0"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>
      {/* Google Map Section */}
      <section className="bg-white px-6 pb-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-gray-100 bg-white p-5 shadow-[8px_8px_20px_#d9d9d9,-8px_-8px_20px_#ffffff] md:p-8">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-gray-900">
              Find Us on Map
            </h2>
            <p className="text-gray-600">
              Visit us in Ahilyanagar, Maharashtra, India.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]">
            <iframe
              title="Ahilyanagar Location Map"
              src="https://maps.google.com/maps?q=Ahilyanagar%2C%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-5 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ahilyanagar%2C+Maharashtra%2C+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border border-gray-100 bg-white px-6 py-3 font-bold text-gray-900 shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] transition hover:shadow-[inset_4px_4px_8px_#e5e5e5,inset_-4px_-4px_8px_#ffffff]"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
