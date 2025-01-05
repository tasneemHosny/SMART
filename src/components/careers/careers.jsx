import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

export default function CareersPage() {
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
    jobTitle: yup
      .string()
      .required("Job title is required")
      .min(2, "Job title must be at least 2 characters long"),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters long"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      jobTitle: "",
      message: "",
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
    <div className="min-h-screen bg-[#f5f5f5] pt-8">
      <div className="mb-12 rounded-xl bg-gradient-to-b from-[#127DF5] to-[#0B498F] py-16 text-center mx-auto max-w-4xl sm-[w-2xl] px-4">
        <h1 className="text-4xl font-bold text-white">Careers</h1>
      </div>

      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-[#127DF5]">Join Us</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/** Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="peer w-full rounded-lg bg-white px-4 pt-7 pb-2 shadow-sm focus:ring-2 focus:ring-[#127DF5] outline-none"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
            >
              Name
            </label>
            {formik.errors.name && formik.touched.name && (
              <div className="text-sm text-red-600 mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          {/** Email, Phone, Job Title */}
          <div className="grid gap-6 md:grid-cols-3">
            {/** Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="peer w-full rounded-lg bg-white px-4 pt-7 pb-2 shadow-sm focus:ring-2 focus:ring-[#127DF5] outline-none"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
              >
                Your Email
              </label>
              {formik.errors.email && formik.touched.email && (
                <div className="text-sm text-red-600 mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/** Phone Field */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="peer w-full rounded-lg bg-white px-4 pt-7 pb-2 shadow-sm focus:ring-2 focus:ring-[#127DF5] outline-none"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
              >
                Phone
              </label>
              {formik.errors.phone && formik.touched.phone && (
                <div className="text-sm text-red-600 mt-1">
                  {formik.errors.phone}
                </div>
              )}
            </div>

            {/** Job Title Field */}
            <div className="relative">
              <input
                type="text"
                name="jobTitle"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="peer w-full rounded-lg bg-white px-4 pt-7 pb-2 shadow-sm focus:ring-2 focus:ring-[#127DF5] outline-none"
                placeholder=" "
              />
              <label  className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75">
                Job Title
              </label>
              {formik.errors.jobTitle && formik.touched.jobTitle && (
                <div className="text-sm text-red-600 mt-1">
                  {formik.errors.jobTitle}
                </div>
              )}
            </div>
          </div>

          {/** Message Field */}
          <div className="relative">
            <textarea
              name="message"
              rows={3}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="peer resize-none w-full rounded-lg bg-white px-4 pt-7 pb-2 shadow-sm focus:ring-2 focus:ring-[#127DF5] outline-none"
              placeholder=" "
            />
            <label  className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75">
              Message
            </label>
            {formik.errors.message && formik.touched.message && (
              <div className="text-sm text-red-600 mt-1">
                {formik.errors.message}
              </div>
            )}
          </div>

          {/** Submit Button */}
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
    </div>
  );
}
