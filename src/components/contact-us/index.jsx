import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Section from "../section";
import InputField from "../input-field";
import contactUsSvg from "/contactUs.svg";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(30, "Message can't be less than 30 characters long.")
    .required("Message is required"),
  contactMethod: Yup.string().required("Please select a contact method"),
});

export default function ContactUs() {
  const sectionContent = {
    title: "Contact Us",
    subText: "Connect with Us: Let's Discuss Your Digital Marketing Needs",
  };

  return (
    <Section {...sectionContent} marginTop="mt-[150px]">
      <div className="border rounded-[45px] flex flex-row  lg:justify-between bg-[#F3F3F3] px-6 pt-4 lg:ps-24 lg:pt-16 ">
        <div className="flex flex-col gap-4 lg:w-2/5  ">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
              contactMethod: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(false);
              console.log(values);
              resetForm();
            }}
          >
            {({
              isSubmitting,
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
            }) => (
              <Form className="mt-5 text-left text-black mb-20">
                <div className="flex justify-center text-base gap-8 w-full">
                  <div className="flex items-center  gap-x-3">
                    <Field
                      id="say-hi"
                      name="contactMethod"
                      type="radio"
                      value="say-hi"
                      className="h-4 w-4 border-black focus:ring-custom-green"
                    />
                    <label
                      htmlFor="say-hi"
                      className="block  font-medium leading-6 text-black"
                    >
                      Say Hi
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <Field
                      id="get-quote"
                      name="contactMethod"
                      type="radio"
                      value="get-quote"
                      className="h-4 w-4 border-black focus:ring-custom-green"
                    />
                    <label
                      htmlFor="get-quote"
                      className="block font-medium leading-6 text-black"
                    >
                      Get a Quote
                    </label>
                  </div>
                </div>
                {errors.contactMethod && touched.contactMethod && (
                  <div className="text-red-500 text-sm">
                    {errors.contactMethod}
                  </div>
                )}
                <InputField
                  id="name"
                  label="Name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your name"
                  required
                  error={errors.name}
                  touched={touched.name}
                />
                <InputField
                  id="email"
                  label="Your email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@flowbite.com"
                  required
                  error={errors.email}
                  touched={touched.email}
                />
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    cols={100}
                    rows={10}
                    className={`border ${
                      errors.message && touched.message
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-custom-green focus:border-custom-green block w-full p-2.5`}
                    placeholder="Your message"
                    required
                  />
                  {errors.message && touched.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white hover:bg-stone-700 hover:text-stone-200 px-8 py-4 rounded-lg text-[20px] font-thin w-full mt-10"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="hidden lg:flex justify-between w-fit">
          <img
            src={contactUsSvg}
            className="absolute right-[-283px]"
            alt="Contact Us"
          />
        </div>
      </div>
    </Section>
  );
}
