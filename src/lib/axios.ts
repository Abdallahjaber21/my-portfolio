import axios from 'axios';

// Ensure the base URL points to your local Laravel development server
const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api/v1';

export const apiClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Assuming the setup accepts the API key in a custom header (usually x-api-key or Authorization)
        // Please verify this based on how the Laravel backend connector middleware reads the token.
        'x-api-key': process.env.REACT_APP_PORTFOLIO_API_KEY || '',
    },
});

// Optionally, add interceptors here
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response || error);
        return Promise.reject(error);
    }
);
