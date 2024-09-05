import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8080', // Base URL do backend
    baseURL:'http://192.168.1.100:8080',
    headers: {
        'Content-Type': 'application/json', // Tipo de conteúdo esperado
    }
});

// Adiciona o token em todas as requisições
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;


