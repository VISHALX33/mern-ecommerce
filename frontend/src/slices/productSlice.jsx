import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axios";

export const fetchProducts = createAsyncThunk("product/fetchAll", async () => {
  const { data } = await API.get("/products");
  return data;
});

export const fetchProductById = createAsyncThunk("product/fetchById", async (id) => {
  const { data } = await API.get(`/products/${id}`);
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: { products: [], product: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (s) => { s.status = "loading"; })
      .addCase(fetchProducts.fulfilled, (s, a) => { s.status = "succeeded"; s.products = a.payload; })
      .addCase(fetchProducts.rejected, (s, a) => { s.status = "failed"; s.error = a.error.message; })

      .addCase(fetchProductById.pending, (s) => { s.product = null; s.status = "loading"; })
      .addCase(fetchProductById.fulfilled, (s, a) => { s.status = "succeeded"; s.product = a.payload; })
      .addCase(fetchProductById.rejected, (s, a) => { s.status = "failed"; s.error = a.error.message; });
  },
});

export default productSlice.reducer;
