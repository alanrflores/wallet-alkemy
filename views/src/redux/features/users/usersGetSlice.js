import {
  getUsersFailed,
  getUsersSuccess,
  getUsersStart,
  getById,
  addUsers,
  deleteUsers,
  cleanUser,
} from './usersSlice';
import { instance } from '../../instance';
import axios from 'axios';

export const getUsers = (token) => {
    return async (dispatch) => {
        dispatch(getUsersStart());
        try {
            const res = await instance(token).get('/user')
            dispatch(getUsersSuccess(res.data));

        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const getAllUsers = () => {
    return async (dispatch) => {
        dispatch(getUsersStart());
        try {
            const res = await instance.get('/user/all')
            dispatch(getUsersSuccess(res.data));

        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const getUserById = (id) => {
    return async (dispatch) => {
        dispatch(getUsersStart());
        try {
            const res = await instance().get(`/user/${id}`)
            dispatch(getById(res.data));
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const createUser = (value) => {

    return async (dispatch) => {
        dispatch(getUsersStart());
        try {
            const res = await axios.post('http://localhost:3001/user', value)
            dispatch(addUsers(res.data));
            dispatch(getUsers());
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const updateUser = (newValue, img) => {
  return async (dispatch) => {
    try {
      if (typeof img !== 'string') {
        if (img === undefined)
          return await instance().put('http://localhost:3001/user', {
            newValue,
          });
        let res = await axios.post(
          'https://api.cloudinary.com/v1_1/leo-echenique/image/upload',
          img
        );
        await instance().put('http://localhost:3001/user', {
          newValue,
          img: res.data.url,
        });
      } else await instance().put('http://localhost:3001/user', { newValue });
      //  dispatch(addUsers(res.data)); assuming that getUsers() makes a query on the db, should return the modified user
      dispatch(getUsers());
    } catch (err) {
      dispatch(getUsersFailed(err));
    }
  };
};

export const deleteByUsers = (id) => {
    return async (dispatch) => {
        dispatch(getUsersStart())
        try {
            const res = await instance().delete(`/user/${id}`)
            dispatch(deleteUsers(res.data));
            dispatch(getUsers());
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const cleanUserState = () => {
  return async (dispatch) => {
    try {
      dispatch(cleanUser());
    } catch (err) {
      console.log(err);
    }
  };
};
