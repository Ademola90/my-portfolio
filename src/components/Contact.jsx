import React, { useState } from "react";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Submit to your form endpoint
      const response = await fetch(
        "https://getform.io/f/9e7c1b91-02d6-4049-ba46-1e6616dc2012",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-indigo-500 py-20 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Contact
          </p>
          <p className="py-6 text-lg">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full bg-transparent p-3 rounded-md border-2 focus:outline-none focus:border-white transition-colors ${
                  errors.name ? "border-red-400" : "border-gray-400"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full bg-transparent p-3 rounded-md border-2 focus:outline-none focus:border-white transition-colors ${
                  errors.email ? "border-red-400" : "border-gray-400"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="6"
                className={`w-full rounded-md p-3 bg-transparent border-2 focus:outline-none focus:border-white transition-colors ${
                  errors.message ? "border-red-400" : "border-gray-400"
                }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white rounded-md px-6 py-3 text-indigo-600 font-bold mt-6 mx-auto flex items-center gap-2 hover:bg-indigo-100 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Submit
                </>
              )}
            </button>

            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-md text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full h-100vh bg-indigo-500 p-4 text-white pt-24"
//     >
//       <div className="flex flex-col p-4 max-w-screen-lg justify-center mx-auto h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>

//         <div className="flex justify-center items-center">
//           <form
//             action="https://getform.io/f/9e7c1b91-02d6-4049-ba46-1e6616dc2012"
//             method="POST"
//             className="flex flex-col w-full md:w-1/2"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="bg-transparent p-2 rounded-md border-2 focus:outline-none text-white"
//             />

//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email"
//               className="bg-transparent my-4 p-2 rounded-md border-2 focus:outline-none text-white"
//             />

//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               rows="10"
//               className="rounded-md px-2 bg-transparent border-2 text-white focus:outline-none"
//             ></textarea>

//             <button className="bg-white rounded-md px-6 py-3 text-indigo-500 font-bold my-8 mx-auto flex items-center hover:scale-110 duration-300">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
