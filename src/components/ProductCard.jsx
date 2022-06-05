import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ProductCard = ({ product, setAllDataResults }) => {
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
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
};
