import axios from "axios";

export const api = axios.create({
    baseURL: 'https://gest-manager-api.onrender.com'
});