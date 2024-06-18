import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBasket {
  products: IProduct[];
}

interface IProduct {
  imageUrl: string;
  price: number;
  title: string;
}

const initialState: IBasket = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    removeBasket(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product) => product.title !== action.payload
      );
    },
    clearBasket(state) {
      state.products = [];
    },
  },
});

export const { addBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
