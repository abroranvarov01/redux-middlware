import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import {
  toggleAmount,
  removeProduct,
} from "../../redux/reducers/product-reducer";
import formatter from "../../utils/currenscy-format";
import { useDispatch } from "react-redux";
const SelectProduct = (props) => {
  const dispatch = useDispatch();
  return (
    <Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <div className="w-[100px]">
          <img
            style={{ width: "90px", height: "90px" }}
            src={props.img}
            alt="img"
          />
        </div>
        <Stack>
          <Typography>{props.title}</Typography>
          <Typography>{formatter(props.price)}</Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton
              onClick={() =>
                dispatch(toggleAmount({ type: "increment", id: props.id }))
              }
            >
              +
            </IconButton>
            <Typography>{props.user_count}</Typography>
            {props.user_count > 1 ? (
              <IconButton
                onClick={() =>
                  dispatch(toggleAmount({ type: "decrement", id: props.id }))
                }
              >
                -
              </IconButton>
            ) : (
              <IconButton
                onClick={() => dispatch(removeProduct({ id: props.id }))}
              >
                x
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SelectProduct;
