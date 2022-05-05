import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TableState {
  arrStrings: string[];
  searchString: string;
}

const initialState: TableState = {
  arrStrings: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Laudantium porro dolores minima unde?',
  ],
  searchString: '',
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addString(state, action: PayloadAction<string>) {
      state.arrStrings.push(action.payload);
    },
    changeSearchString(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
    },
  },
});

export default tableSlice.reducer;
