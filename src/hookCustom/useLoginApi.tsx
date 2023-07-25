import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.predict.app.br"
})

export const useLoginApi = () => ({ 
    login: async (email: string, senha: string) => {
        const response = await api.post(`/central/autenticacao/login`, {
            email, 
            senha,
            }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });        
        const data = response.data
        localStorage.setItem("token", data.token);
        return data
    },
    loggedInUser: async () => {
        const token = localStorage.getItem('token') || ""
        const response = await api.get(`/central/usuario/me`, {
            headers:{
                'Content-Type': 'application/json',
                'X-TENANT-ID': 'arnia',
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data
    }
})