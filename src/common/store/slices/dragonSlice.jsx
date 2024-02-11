import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDragonAPI,
  deleteDragonAPI,
  editDragonAPI,
  findDragonAPI,
  getDragonAPI,
  getRankAPI,
} from "../../api/dragon";

export const getDragonsThunk = createAsyncThunk("getDragonsThunk", async () => {
  const res = await getDragonAPI();
  return res.data;
});

export const addDragonsThunk = createAsyncThunk(
  "addDragonsThunk",
  async (payload) => {
    const res = await addDragonAPI(payload);
    return res.data;
  }
);

export const findDragonThunk = createAsyncThunk(
  "findDragonThunk",
  async (id) => {
    const res = await findDragonAPI(id);
    return res.data;
  }
);

export const editDragonThunk = createAsyncThunk(
  "editDragonThunk",
  async (payload) => {
    const res = await editDragonAPI(payload);
    return res;
  }
);

export const getRankThunk = createAsyncThunk("getRankThunk", async () => {
  const res = await getRankAPI();
  return res.data;
});


export const deleteDragonThunk = createAsyncThunk('deleteDragonThunk',async (id) => {
  const res = await deleteDragonAPI(id)
  return res.data;
})


const DragonSlices = createSlice({
  name: "DragonSlices",
  initialState: {
    dragons: [],
    loading: false,
    error: null,
    dragon: {},
    dragonFull: {},
    notification: false,
    rank: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDragonsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDragonsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dragons = action.payload;
      })
      .addCase(getDragonsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addDragonsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDragonsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dragons.push(action.payload);
      })
      .addCase(addDragonsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(findDragonThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(findDragonThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dragon = action.payload;
      })
      .addCase(findDragonThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editDragonThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(editDragonThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        state.dragonFull = action.payload.data;
      })
      .addCase(editDragonThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getRankThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRankThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.rank = action.payload;
      })
      .addCase(getRankThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteDragonThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteDragonThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dragons = action.payload;
      })
      .addCase(deleteDragonThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {} = DragonSlices.actions;

export default DragonSlices.reducer;
