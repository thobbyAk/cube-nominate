import axios from "axios";
import toast from "react-hot-toast";

export const apiClient = axios.create({
    baseURL: "https://cube-academy-api.cubeapis.com/api",
});
let ACCESS_TOKEN: string;

interface AxiosConfigProps {
    accessToken?: string;
}

export function configureAxios({ accessToken }: AxiosConfigProps) {
    ACCESS_TOKEN = accessToken ?? sessionStorage.getItem("accessToken") ?? "";
    apiClient.interceptors.request.use(
        (req) => {
            if (ACCESS_TOKEN) {
                req.headers.authorization = `Bearer ${ACCESS_TOKEN}`;
            }

            return req;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    apiClient.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 401) {
                window.location.href = "/";
                sessionStorage.clear()
                toast.error("Unauthorized request, please login and try again.")
            } else if (error.response) {
                console.log('error reponse', error)
                toast.error(error.response.data.data.error ?? "An error occurred while processing your request.")
            }

        }
    )
}