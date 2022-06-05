import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ProductCard = ({ product, setAllDataResults }) => {
  let price = new Intl.NumberFormat('es-CO', {currency: 'COP', style: 'currency', minimumFractionDigits: 0}).format(parseInt(product.price));

  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${product.thumbnail}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="inherit" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
};
