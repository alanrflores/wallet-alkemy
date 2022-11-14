import { updateAccount, addAccount, accountId } from './accountSlice';
import axios from 'axios';
import { getUserById, getUsers } from '../users/usersGetSlice';


export const getUpdateAccount = (id, mount) => {
    return async (dispatch) => {      
        try {
          const res = await axios.put(`http://localhost:3001/account/${id}/${mount}`);
          if(res){
              dispatch(updateAccount(res.data));  
              dispatch(getUserById())
          }
        } catch (err) {
            console.log(err)
        };
    };
};

export const createAccount = (value) => {
    return async (dispatch) => {      
        try {
          const res = await axios.post('http://localhost:3001/account/create', value);
          dispatch(addAccount(res.data));
          dispatch(getUsers());
        } catch (err) {
            console.log(err)
        };
    };
};


export const getAccountById = (userId, id) => {
    return async (dispatch) => {      
        try {
          const res = await axios.get(`/account/${userId}/${id}`);
              dispatch(accountId(res.data));  
        } catch (err) {
            console.log(err)
        };
    };
};
