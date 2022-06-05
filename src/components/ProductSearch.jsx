import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ProductSearch = ({ productSearch }) => {
  const [textValue, setTextValue] = useState("undefined");

  const onChange = (e) => {
      const value = e.target.value === "" ? "undefined" : e.target.value
    if (e.nativeEvent.code === "Enter") {
      productSearch(value);
    }
    setTextValue(value);
  };
  return (
    <div>
      <TextField
        type="text"
        label="Buscar"
        color="primary"
        focused
        onChange={onChange}
        onKeyDown={onChange}
        placeholder="Buscar..."
      />
      <Button
        style={{ margin: 8 }}
        variant="contained"
        onClick={() => productSearch(textValue)}
      >
        Buscar
      </Button>
    </div>
  );
};
