import axios from "axios"

const token = localStorage.getItem('token') || ""

const api = axios.create({    
    baseURL: "https://api.predict.app.br",
    headers: {
        'Content-Type': 'application/json',
        'X-TENANT-ID': 'arnia',
        'Authorization': `Bearer ${token}`,
    }
})
export default api