// src/api/registerAPI.ts
import api from "./axiosInstance";

export const registerUser = async (formData: { name: string; email: string; password: string }) => {
    try {
        const response = await api.post("/register", formData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Registration failed");
    }
};
