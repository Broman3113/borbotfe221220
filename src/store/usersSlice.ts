import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import usersData from "../api/initData.json";
import {User} from "../types/types";

type UsersState = {
    users: Array<User>
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const data = usersData;
            dispatch(setUsers(data))
            return data;
        } catch (e: string | any) {
            return rejectWithValue(e.message);
        }
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    } as UsersState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log(action.payload);
        });
    }
})

export const {setUsers} = usersSlice.actions;
export default usersSlice.reducer;
