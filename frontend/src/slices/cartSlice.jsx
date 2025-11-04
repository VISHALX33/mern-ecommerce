import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("auron_cart") || "[]");

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: saved },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cartItems.find((x) => x._id === item._id);
      if (exist) {
        state.cartItems = state.cartItems.map((x) => (x._id === exist._id ? item : x));
      } else {
        state.cartItems.push(item);
      }
      localStorage.setItem("auron_cart", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      localStorage.setItem("auron_cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("auron_cart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
