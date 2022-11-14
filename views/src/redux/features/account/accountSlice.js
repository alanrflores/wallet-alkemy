import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    accountsList: [],
    account: {},
    error: ""
};

const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {
        updateAccount: (state) => {
            return {
              ...state
            };
        },
        addAccount: (state, action) => {
          state.accountsList.push(action.payload);
        },

        accountId: (state, action) => {
            return {
                ...state,
                loading: false,
                account: action.payload
            }
        }
    }
});

export const { updateAccount, addAccount, accountId } = accountsSlice.actions;

export default accountsSlice.reducer;


