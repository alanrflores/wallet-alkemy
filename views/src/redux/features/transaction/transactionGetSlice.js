import { getTransactionsFailed, getTransactionsStart, getTransactionsSuccess, transactionId, addTransaction, updateTransaction  } from './transactionSlice';
import { instance } from '../../instance';



export const getTransactions = () => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
        try {
            const res = await instance().get('/transaction');
            dispatch(getTransactionsSuccess(res.data));
        } catch (err) {
            dispatch(getTransactionsFailed(err))
        };

    };
};


export const getTransactionsById = (id) => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
    try {
        const res = await instance().get(`/transaction/${id}`);
        dispatch(transactionId(res.data));
    } catch (err) {
        dispatch(getTransactionsFailed(err))
    };
    };
};

//Deprecated dispatch beacouse it throw an error that I can not catch
export const createTransactions = (value) => {
          //async(dispatch)
    return async() => {
        // dispatch(getTransactionsStart());
        try {
            const rta = await instance().post('/transaction', value);
            // dispatch(getTransactions());
            return rta
        } catch (err) {
            if (err.name === 'AxiosError') {
              return err.response
            }
        };
    };
};

export const getUpdateTransactions = (id) => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
        try {
            const res = await instance().put(`/transaction/${id}`)
            dispatch(addTransaction(res.data));
            dispatch(getTransactions());
        } catch (err) {
            dispatch(getTransactionsFailed(err));
        };
    };
};
