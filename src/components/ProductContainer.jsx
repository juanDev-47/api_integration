import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/server";
import { ProductCard } from "./ProductCard";
import { Box, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { ProductSearch } from "./ProductSearch";

export const ProductContainer = () => {
  const [allDataResults, setAllDataResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    productSearch()
  }, [])

  const productSearch = (textValue) => {
    setLoading(true);
    getAllProducts(textValue).then((res) => {
      setLoading(false);
      setAllDataResults(res.data.results);
    });
  };

  return (
    <div>
      <div
        style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}
      >
        <ProductSearch productSearch={productSearch} defaultValue="undefined" />
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {loading ? (
          <Box sx={{ margin: 8 }}>
            <CircularProgress />
          </Box>
        ) : allDataResults.length > 0 ? (
          allDataResults.map((product, index) => (
            <div key={index}>
              <ProductCard
                product={product}
                setAllDataResults={
                  setAllDataResults
                } /* setOnlyProduct={setOnlyProduct} */
              />
            </div>
          ))
        ) : (
          <Typography margin={4} variant="h5">
            ¡No se han encontrado resultados!
          </Typography>
        )}
      </Grid>
    </div>
  );
};
