import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  items: Array<any>;
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CounterState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newItem = action.payload.product;
      //   console.log("newItem", newItem);
      //   console.log("state.items", state.items);
      console.log("items", state.items);
      const existingItem = state.items.find((item) => item._id === newItem._id);
      //   console.log("existingItem", existingItem);
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =
        state.totalAmount + action.payload.quantity * action.payload.price;

      if (!existingItem) {
        // console.log("state.items.quantity", state.items);
        // console.log("action.payload.quantity", action.payload.quantity);
        const totalPrice = newItem.Dprice * action.payload.quantity;
        console.log("existingItem", existingItem);
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.Dprice * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
        //   console.log(action);
        //   }
      }
    },
    decrement: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newItem = action.payload.product;
      //   console.log("newItem", newItem);
      //   console.log("state.items", state.items);
      console.log("items", state.items);
      const existingItem = state.items.find((item) => item._id === newItem._id);
      //   console.log("existingItem", existingItem);
      state.totalQuantity = state.totalQuantity - action.payload.quantity;
      state.totalAmount =
        state.totalAmount -
        action.payload.quantity * action.payload.product.price;
      if (!existingItem) {
        // console.log("state.items.quantity", state.items);
        // console.log("action.payload.quantity", action.payload.quantity);
        const totalPrice = newItem.Dprice * action.payload.quantity;
        console.log("existingItem", existingItem);
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice -
          existingItem.Dprice * action.payload.quantity;
        existingItem.quantity -= action.payload.quantity;
        existingItem.totalPrice = totalPrice;
        //   console.log(action);
        //   }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions;

export default counterSlice.reducer;
