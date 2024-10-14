import { configureStore } from '@reduxjs/toolkit';
import AddToCartReducer from '../Slices/slices';

const store = configureStore({
  reducer: {
    AddToCart: AddToCartReducer,
  },
});

export default store;
