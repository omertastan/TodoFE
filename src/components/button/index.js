import styled from "styled-components";

const BUTTON_VARIANTS = {
  primary: {
    color: "#fff",
    backgroundColor: "#7777eb",
  },
  secondary: {
    color: "#fff",
    backgroundColor: "#87a581",
    border: "1px solid #87a581",
  },
  danger: {
    color: "#fff",
    backgroundColor: "#d0a6a6",
    border: "1px solid #d0a6a6",
  },
};

export const Button = styled.button((props) => ({
  cursor: "pointer",
  border: "none",
  fontSize: "12px",
  minWidth: props.minWidth || "80px",
  padding: props.padding || "5px 10px",
  borderRadius: props.borderRadius || "20px",
  ":hover": {
    opacity: "50%",
  },
  transition: "all .3s linear",
  marginLeft: props.ml || 0,
  "@media (min-width: 650px)": {
    fontSize: "16px",
    minWidth: props.minWidth || "120px",
  },
  ...BUTTON_VARIANTS[props.variant],
}));

export const ButtonContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-around",
}));
