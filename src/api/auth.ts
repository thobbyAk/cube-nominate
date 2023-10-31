import { apiClient } from ".";
import { LoginPayload, RegisterPayload } from "../Utils/types";



export const createUser = async (payload: RegisterPayload) => {
    const response = await apiClient.post("/register", payload);
    return response.data;
};

export const login = async (payload: LoginPayload) => {
    const response = await apiClient.post("/login", payload);
    return response.data;
};
