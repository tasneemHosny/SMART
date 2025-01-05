import { useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "./../../assets/images/contact.png";
import "./../../App.css";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validationSchema = yup.object().shape({
      name: yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters long"),
      email: yup
        .string()
        .required("Email is required")
        .email("Enter a valid email address"),
      phone: yup
        .string()
        .required("Phone number is required")
        .matches(/^[+]?[\d\s()-]{6,}$/, "Enter a valid phone number"),
      message: yup
        .string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters long"),
      interest: yup
        .string()
        .required("Please select an area of interest"),
    });
  
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        setIsSubmitting(true);
        try {
          console.log("Form submitted:", values);
          // Simulate success or API integration here
        } catch (error) {
          console.error("Error submitting the form:", error);
        } finally {
          setIsSubmitting(false);
        }
      },
    });
  
    return (
      <div className="min-h-screen bg-[#f5f5f5] px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-3xl font-bold text-[#127DF5]">Let's Talk</h1>
  
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full rounded-lg border-0 bg-white px-4 pt-6 pb-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)] outline-none focus:ring-2 focus:ring-[#127DF5]"
                    placeholder=" "
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                  >
                    Name
                  </label>
                  {formik.errors.name && formik.touched.name && (
                    <p className="text-red-500 text-sm mt-2">{formik.errors.name}</p>
                  )}
                </div>
  
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="peer w-full rounded-lg border-0 bg-white px-4 pt-6 pb-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)] outline-none focus:ring-2 focus:ring-[#127DF5]"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                    >
                      Your Email
                    </label>
                    {formik.errors.email && formik.touched.email && (
                      <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
                    )}
                  </div>
  
                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      className="peer w-full rounded-lg border-0 bg-white px-4 pt-6 pb-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)] outline-none focus:ring-2 focus:ring-[#127DF5]"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                    >
                      Your Phone Number
                    </label>
                    {formik.errors.phone && formik.touched.phone && (
                      <p className="text-red-500 text-sm mt-2">{formik.errors.phone}</p>
                    )}
                  </div>
                </div>
  
                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    rows={3}
                    className="peer resize-none w-full rounded-lg bg-white px-4 pt-6 pb-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)] outline-none focus:ring-2 focus:ring-[#127DF5]"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                  >
                    Message
                  </label>
                  {formik.errors.message && formik.touched.message && (
                    <p className="text-red-500 text-sm mt-2">{formik.errors.message}</p>
                  )}
                </div>
                <div className="relative">
                <select
                  id="interest"
                  className="peer w-full appearance-none rounded-lg border-0 bg-white px-4 pt-6 pb-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)] outline-none focus:ring-2 focus:ring-[#127DF5]"
                >
                  <option value="" disabled></option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="ai">AI Solutions</option>
                  <option value="consulting">Consulting</option>
                </select>
                <label
                  htmlFor="interest"
                  className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                >
                  I'm interested in
                </label>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
  
                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-48 rounded-full bg-[#127DF5] px-8 py-3 font-semibold text-white hover:bg-[#125ef5]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>

          {/* Contact Info & Illustration */}
          <div className="rounded-xl bg-gradient-to-b from-[#127DF5] to-[#0B498F] p-8 text-white transition-colors hover:bg-[#125ef5]">
            <h2 className="mb-8 text-2xl font-semibold">Feel free to contact us</h2>

            <div className="mb-12 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>smart@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <div>
                  <p>Sales consultant: 0000000</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-80 relative">
                <img src={Image} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
