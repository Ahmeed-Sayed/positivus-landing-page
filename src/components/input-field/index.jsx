import React from "react";

export default function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  touched,
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#B9FF66] focus:border-[#B9FF66] block w-full p-2.5  "
        placeholder={placeholder}
        required={required}
      />
      {error && touched && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
