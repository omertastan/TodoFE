import React from "react";
import { FormFieldContainer, FormField } from "./styled";

const FormikField = ({
  stretch,
  title,
  errors,
  touched,
  name,
  isActive,
  hideTitle,
  ml,
  ...props
}) => {
  const errorMessage =
    errors && touched && errors[name] && touched[name] ? errors[name] : null;

  return (
    <FormFieldContainer stretch={stretch} ml={ml}>
      {!hideTitle && (
        <label htmlFor={name} style={{ fontSize: "12px", opacity: "50%" }}>
          {title}
        </label>
      )}
      <FormField
        name={name}
        bordercolor={
          errorMessage ? "red" : isActive ? "#3D393E" : "rgba(57, 61, 67, 0.3)"
        }
        {...props}
      />
      {errorMessage && (
        <span style={{ fontSize: "12px", color: "red" }}>{errors[name]}</span>
      )}
    </FormFieldContainer>
  );
};

export default FormikField;
