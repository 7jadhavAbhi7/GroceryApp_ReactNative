const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name == actions.payload.name
      );
      if (isAvailable) {
        actions.payload["quantity"] += 1; // increase quantity by one
      } else {
        state.push({ ...actions.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, actions) => {
      const newList = state.filter(
        (value) => value.name != actions.payload.name
      );
      return (state = newList);
    },
    incrementQuantity: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name == actions.payload.name
      );

      if (isAvailable) {
        isAvailable.quantity++;
      } else {
        console.log("not available");
      }
    },
    decrementQuantity: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name == actions.payload.name
      );

      if (isAvailable.quantity == 1) {
        isAvailable.quantity = 1;
      } else {
        isAvailable.quantity--;
      }
    },
  },
});

export const{
    
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
    } = cartSlice.actions;

    export default cartSlice.reducer
