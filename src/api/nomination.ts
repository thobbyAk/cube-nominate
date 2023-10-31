import { apiClient } from ".";
import { NominationPayload } from "../Utils/types";

export const createNomination = async (payload: NominationPayload) => {
    const response = await apiClient.post("/nomination", payload);
    return response.data;
};


export const getAllNominations = async () => {
    const response = await apiClient.get("/nomination");
    return response.data;
};

export const getAllNominees = async () => {
    const response = await apiClient.get("/nominee");
    return response.data;
};


export const getNominationById = async (nomination_id: string) => {
    const response = await apiClient.get(`/nomination/${nomination_id}`);
    return response.data;
};

export const fetchUpdateNomination = async (nomination_id: string, payload: NominationPayload) => {
    const response = await apiClient.put(`/nomination/${nomination_id}`, payload);
    return response.data;
};


export const fetchDeleteNomination = async (nomination_id: string) => {
    const response = await apiClient.delete(`/nomination/${nomination_id}`);
    return response.data;
};
