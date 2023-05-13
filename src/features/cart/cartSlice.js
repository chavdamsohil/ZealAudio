import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  count: 0,
  cartItems: [],
};
console.log(initialStateValues.cartItems);

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateValues,
  reducers: {
    increment: (state, action) => {
      let updatedItem = [...state.cartItems];
      updatedItem[action.payload] = {
        ...updatedItem[action.payload],
        itemCount: updatedItem[action.payload].itemCount + 1,
      };

      state.cartItems = [...updatedItem];
    },
    decrement: (state, action) => {
      let updatedItem = [...state.cartItems];
      updatedItem[action.payload] = {
        ...updatedItem[action.payload],
        itemCount:
          updatedItem[action.payload].itemCount === 1
            ? 1
            : updatedItem[action.payload].itemCount - 1,
      };

      state.cartItems = [...updatedItem];
    },
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

export const { increment, decrement, addToCart, removeCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
