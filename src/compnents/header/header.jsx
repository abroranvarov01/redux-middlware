import { Box } from "@mui/material";
import React from "react";
import { IconButton, Badge, Drawer } from "@mui/material";
import Cart from "../cart/cart";
import { CartIcon } from "../../assets/cart-icon";
import { useSelector } from "react-redux";
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { count } = useSelector((state) => state.product);
  return (
    <Box paddingY={5} bgcolor={"primary.main"}>
      <Drawer anchor={"left"} onClose={() => setOpen(false)} open={open}>
        <Cart />
      </Drawer>
      <Box width={"1280px"} margin={"auto"}>
        <IconButton onClick={() => setOpen(true)} aria-label="cart">
          <Badge badgeContent={count ? count : "0"} color="error">
            <CartIcon />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
