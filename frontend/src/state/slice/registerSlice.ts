import { Register } from "../../type/Register";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../../api/registerAPI";

const initialState: Register = {
    loading: false,
    success: false,
    error: null,
};

export const registerAsync = createAsyncThunk(
    "register/registerUser", 
    async (formData: { name: string; email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await registerUser(formData);
            return response; 
        } catch (error: any) {
            return rejectWithValue(error.message || "Registration failed");
        }
    }
);

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAsync.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        });
        builder.addCase(registerAsync.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
            state.error = null;
        });
        builder.addCase(registerAsync.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload as string;
        });
    },
});

export default registerSlice.reducer;
