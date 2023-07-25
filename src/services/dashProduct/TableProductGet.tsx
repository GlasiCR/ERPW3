import Api from "../axiosConfig";

export const ClientUpPerProduct = async (id: string) =>{
    const response = await Api.get(`/app/produto/${id}/clientes?classificacao=EM_ALTA`);
    return response.data
}

export const ClientDownPerProduct = async (id: string) =>{
    const response = await Api.get(`/app/produto/${id}/clientes?classificacao=EM_BAIXA`);
    return response.data
}