import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ProductSearch = ({ productSearch }) => {
  const [textValue, setTextValue] = useState("");

  const onChange = (e) => {
    if (e.nativeEvent.code === "Enter") {
      productSearch(e.target.value);
    }
    setTextValue(e.target.value);
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
