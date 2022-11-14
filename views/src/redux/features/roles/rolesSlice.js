import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rolesList: [],
};

const rolesSlice = createSlice({
    name: "roles",
    initialState,
    reducers: {
        addRoles: (state, action) => {
            state.rolesList.push(action.payload);
        }
    }
});

export const { addRoles } = rolesSlice.actions;

export default rolesSlice.reducer;