import { isAxiosError } from "axios";
import Api from "../axiosConfig";

export const ProductsUp = async () =>{
    try{
        const response = await Api.get(`/app/produto?classificacao=EM_ALTA`);
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


export const ProductsDown = async () =>{
    try{
        const response = await Api.get(`/app/produto?classificacao=EM_BAIXA`);
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