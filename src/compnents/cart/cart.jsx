import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SelectProduct from "../selet-product/select-product";
import { Grid2 } from "@mui/material";
import formatter from "../../utils/currenscy-format";
const Cart = () => {
  const { products } = useSelector((state) => state.product);
  const { price } = useSelector((state) => state.product);
  console.log(price);
  return (
    <>
      <Grid2 padding={2} container spacing={2} direction="column">
        {products.map((item) => (
          <Grid2 key={item.id}>
            <SelectProduct {...item} />
          </Grid2>
        ))}
      </Grid2>
      <Typography textAlign={"center"}>
        Total price: {formatter(price)}sum
      </Typography>
    </>
  );
};

export default Cart;
