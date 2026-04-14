import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_c2tj75l",
        "template_1oobrm5",
        form.current,
        "ijEU4sFkcIrzfoRvk"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-6 md:px-10 lg:px-16"
    >
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-gray-400 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
        <p className="text-gray-500 mt-3 text-sm">
          Email: rutvikmore2004@gmail.com | Phone: +91 9373963036 | Nanded, Maharashtra
        </p>
      </div>

      {/* Form Card */}
      <div className="mt-8 w-full max-w-md bg-[#121418] p-6 rounded-xl shadow-lg border border-gray-500/35">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-[#1b1f26] text-white border border-gray-600 focus:outline-none focus:border-gray-400"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-[#1b1f26] text-white border border-gray-600 focus:outline-none focus:border-gray-400"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-3 rounded-md bg-[#1b1f26] text-white border border-gray-600 focus:outline-none focus:border-gray-400"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="p-3 rounded-md bg-[#1b1f26] text-white border border-gray-600 focus:outline-none focus:border-gray-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-gray-700 to-gray-400 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
