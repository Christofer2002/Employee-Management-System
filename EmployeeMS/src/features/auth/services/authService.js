import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

const login = async (values) => {
    return axios.post(`${API_URL}/login`, values);
};

const register = async (values) => {
    return axios.post(`${API_URL}/register`, values);
}

const authService = {
    login,
    register
    // Puedes agregar más métodos relacionados con la autenticación aquí
};

export default authService;
