import axios from "axios";


// export const API_BASE_URL = 'http://localhost:5000/api'; 
// export const IMG_BASE_URL = 'https://resorts-bucket.s3.ap-south-1.amazonaws.com/';

// Production
export const API_BASE_URL = 'https://api.haatak.com/api'; 
export const IMG_BASE_URL = 'https://haatak-storage-bucket.s3.ap-south-1.amazonaws.com/';

export const config = (req_token) => {
    // console.log("123", req_token)
    if (req_token == null) {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'withCredentials': true
            }

        }
        // console.log("1")
        return headers
    }
    else {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${req_token}`
            }
        }
        // console.log("2")
        return headers
    }
} 



// Axios Instance
const API = axios.create({
    baseURL: API_BASE_URL, // Use your API base URL
    timeout: 5000, // Adjust timeout as needed
});

// Request Interceptor (optional)
API.interceptors.request.use(
    (config) => {
        if (config.headers && config.headers.Authorization) {
            return config; // If Authorization is already set, use it.
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
API.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401 || error.response?.status === 403) {
            console.error("Session expired. Logging out...");
            await signOut({ callbackUrl: '/login' });
        }
        return Promise.reject(error);
    }
);

export default API;