// import { UnknownAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: false,
  reducers: {
    close: () => false,
    open: () => true,
  }
});

export const { open, close } = statusSlice.actions;
export default statusSlice.reducer;
