import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import formatter from "../../utils/currenscy-format";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
} from "../../redux/reducers/product-reducer";

// Assuming isProductExists is a selector
const isProductExists = (state, productId) =>
  state.product.products.some((product) => product.id === productId);

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const exists = useSelector((state) => isProductExists(state, props.id)); // Use useSelector to check if product exists

  return (
    <Box textAlign={"center"}>
      <img
        style={{ width: "100%", height: "300px" }}
        src={props.img}
        alt={props.name}
      />

      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="h5">{formatter(props.price)}</Typography>
      <Typography variant="h6">{props.color}</Typography>
      <Typography variant="h6">{props.brand}</Typography>
      <Typography variant="h6">{props.rame}</Typography>
      {exists ? (
        <Button
          style={{
            backgroundColor: "red",
            transition: "all 0.5s ease",
          }}
          onClick={() => dispatch(removeProduct(props))}
          fullWidth
          variant="contained"
        >
          Delete Card
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(addProduct(props))}
          fullWidth
          variant="contained"
        >
          Add to cart
        </Button>
      )}
    </Box>
  );
};

export default ProductCard;
