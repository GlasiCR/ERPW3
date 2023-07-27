import { isAxiosError } from "axios";
import Api from "../axiosConfig";

export const History = async (id: string) =>{
    try{
        const response = await Api.get(`/app/predicao/${id}/historico`);
        return response.data.content
    } catch (error) {
        if (isAxiosError(error)) {
            const status = error.response?.status;
            if (status === 401) {
              window.alert("Realize o login com um usário válido para ter acesso as informações");
            } else if (status === 404) {
                window.alert("Não encontrada informações para a solicitação");
            } else if (status === 405) {
                window.alert("Usuário sem autorização");
            } else {
                window.alert(`${error}`);
            }
        }
    } 
}