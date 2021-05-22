import styled from "styled-components";
import { Field } from "formik";

export const FormFieldContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  color: `1px solid ${props.theme.colors.text}`,
}));

export const FormField = styled(Field)((props) => ({
  border: "none",
  borderBottom: `1px solid ${props.bordercolor}`,
  padding: "10px 0",

  ":focus": {
    outline: "none",
  },
  ":-internal-autofill-selected": {
    backgroundColor: "transparent !important",
  },
}));
