import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Section from '../section';
import InputField from '../input-field';
import contactUsSvg from '/contactUs.svg';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().min(30,"Message can't be less than 30 characters long.").required('Message is required'),
});

export default function ContactUs() {
  const sectionContent = {
    title: 'Contact Us',
    subText: "Connect with Us: Let's Discuss Your Digital Marketing Needs",
  };

  return (
    <Section {...sectionContent} marginTop="mt-[150px]">
      <div className="border rounded-[45px] flex flex-row justify-between bg-[#F3F3F3] ps-24 pt-16">
        <div className="flex flex-col gap-4 w-2/5">
          <div className="flex gap-8 w-full">
            <div className="flex items-center gap-x-3">
              <input
                id="say-hi"
                name="contact-us"
                type="radio"
                className="h-4 w-4 border-black text-black focus:ring-[#B9FF66]"
              />
              <label
                htmlFor="say-hi"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Say Hi
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="get-quote"
                name="contact-us"
                type="radio"
                className="h-4 w-4 border-black focus:ring-[#B9FF66]"
              />
              <label
                htmlFor="get-quote"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Get a Quote
              </label>
            </div>
          </div>

          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, values, handleChange, handleBlur, errors, touched }) => (
              <Form className="mt-5 text-left text-black mb-20">
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
                    className={`border ${errors.message && touched.message ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-[#B9FF66] focus:border-[#B9FF66] block w-full p-2.5`}
                    placeholder="Your message"
                    required
                  />
                  {errors.message && touched.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
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
        <div className="flex justify-end">
          <img src={contactUsSvg} className="absolute right-[-134px]" alt="Contact Us" />
        </div>
      </div>
    </Section>
  );
}
