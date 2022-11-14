import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import accountsReducer from './features/account/accountSlice';
import transactionsReducer from './features/transaction/transactionSlice';
import rolesReducer from './features/roles/rolesSlice';

const store = configureStore({
    reducer:{
      users: usersReducer,
      accounts: accountsReducer,
      transactions: transactionsReducer,
      roles: rolesReducer,
    }
});

export default store;