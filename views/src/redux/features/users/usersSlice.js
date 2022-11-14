import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  usersList: [],
  user: {},
  errors: ""
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersStart: (state) => {
      return {
        ...state,
        loading: true,
      }
    },
    getUsersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        usersList: action.payload
      }
    },
    getUsersFailed: (state, action) => {
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    },
    getById: (state, action) => {
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    },
    addUsers: (state, action) => {
      state.usersList.push(action.payload)
    },

    deleteUsers: (state) => {
      return {
        ...state,
      };
    },
    cleanUser: (state) => {
      return {
        ...state,
        usersList: []
      }
    },
  }
})

export const { getUsersFailed, getUsersStart, getUsersSuccess, getById, addUsers, deleteUsers, cleanUser } = usersSlice.actions;

export default usersSlice.reducer;