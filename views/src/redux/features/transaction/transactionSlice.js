import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    transactionsList: [],
    transaction: {},
    errors: ""
};

const transactionsSlice = createSlice({
 name: "transactions",
 initialState,
 reducers: {
    getTransactionsStart: (state) => {
        return {
            ...state,
            loading: true
        };
    },
    getTransactionsSuccess: (state, action) => {
        return {
            ...state,
            loading: false,
            transactionsList: action.payload,
        };
    },
    getTransactionsFailed: (state, action) => {
        return {
            ...state,
            loading: false,
            errors: action.payload
        };
    },

    transactionId: (state, action) => {
        return {
            ...state,
            loading: false,
            transaction: action.payload
        };
    },
    addTransaction: (state, action) => {
        state.transactionsList.push(action.payload)
    },
    updateTransaction: (state) => {
        return {
            ...state,
        };
    }
 }

});

export const { getTransactionsFailed, getTransactionsStart, getTransactionsSuccess, transactionId, addTransaction, updateTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;