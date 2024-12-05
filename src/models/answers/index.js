import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { start, reject, finish } from "../reducers";
import { defaultState } from "@/lib/defaultState";
import insert from "@/lib/insert";

export const answersAdapter = createEntityAdapter();

const answersSlice = createSlice({
  name: "answers",
  initialState: { ...defaultState.answers },
  reducers: {
    start,
    reject,
    finish,
    setAnswers: answersAdapter.setAll,
    createAnswer: (state) => state,
    addAnswer: answersAdapter.addOne,
    editAnswer: answersAdapter.updateOne,
    deleteAnswer: answersAdapter.removeOne,
    insertAnswer: (state, { payload }) => {
      state.ids = insert(
        state.ids,
        payload.from,
        payload.position
      );
    },
  },
});

export const answersActions = answersSlice.actions;

export default answersSlice.reducer;
