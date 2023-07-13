import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface CartState {
//   items: [];
// }

const initialState: any = {
  items: [],
};

export const cartSlice: any = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: (state: any, action: PayloadAction) => {
      state.items = [...state.items, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemsToCart } = cartSlice.actions;

export default cartSlice.reducer;
