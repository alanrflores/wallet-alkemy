import React from "react";
import { useField } from "formik";

const FormItem = ({
  labelText,
  classLabel,
  classInput,
  disabled,
  ...props
}) => {
  // hook de formik para usar sus propiedades
  const [field, meta] = useField(props);
  return (
    <>
      <label className={classLabel}>{labelText}</label>
      <input
        // propiedades onBlur, onChange, value
        {...field}
        // propiedades propias del input name, type, placeholder
        {...props}
        className={`${classInput} ${
          meta.touched && meta.error ? "border-red-700 border-2" : ""
        }`}
        disabled={disabled}
      />
      {meta.touched && meta.error && (
        <div className="text-red-700">{meta.error}</div>
      )}
    </>
  );
};

export default FormItem;
