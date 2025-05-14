import axios from "axios";

const BaseUrl = process.env.REACT_APP_API_BASE_URL;

const API = axios.create();

export const PostAPI = async ({ url, data }) => {
    try {
        const response = await API.post(BaseUrl + url, data);
        if (response.data.status === 'success') {
            return { error: false, data: response?.data };
        }
    } catch (error) {
        return { error: true, data: error.response.data }
    }
};

export const GetAPI = async ({ url }) => {
    try {
        const response = await API.get(BaseUrl + url);

        if (response.data.status === 'success' || url.includes('.json')) {
            return { error: false, data: response?.data };
        }
    } catch (error) {
        return { error: false, data: error.response.data }
    }
}