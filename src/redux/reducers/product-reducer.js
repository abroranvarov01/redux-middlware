import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    count: 0,
    price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              user_price: action.payload.price,
              user_count: 1,
            },
          ],
        };
      }
    },
    toggleAmount: (state, action) => {
      state.products = state.products.map((item) => {
        if (
          action.payload.type == "increment" &&
          item.id === action.payload.id
        ) {
          return {
            ...item,
            user_count: item.user_count + 1,
            user_price: (item.user_count + 1) * item.price,
          };
        } else if (
          action.payload.type == "decrement" &&
          item.id === action.payload.id &&
          item.user_count > 1
        ) {
          return {
            ...item,
            user_count: item.user_count - 1,
            user_price: (item.user_count - 1) * item.price,
          };
        } else {
          return item;
        }
      });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    totalCount: (state) => {
      let newCount = 0;
      for (let i of state.products) {
        newCount++;
      }
      return { ...state, count: newCount };
    },
    totalPrice: (state) => {
      state.price = state.products.reduce(
        (acc, item) => acc + item.user_price,
        0
      );
    },
    isProductExists: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        return true;
      } else {
        return false;
      }
    },
  },
});

export const {
  addProduct,
  toggleAmount,
  removeProduct,
  totalCount,
  totalPrice,
  isProductExists,
} = productReducer.actions;
export default productReducer.reducer;
