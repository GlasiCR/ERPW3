import Api from "../axiosConfig";

export const ProductsUpPerClient = async (id: string) => {
    try{
        const response = await Api.get(`/app/cliente/${id}/produtos?classificacao=EM_ALTA`);
        return response.data
    } catch(error){
        console.log(error)
    }
}

export const ProductsDownPerClient = async (id: string) =>{
    const response = await Api.get(`/app/cliente/${id}/produtos?classificacao=EM_BAIXA`);
    return response.data
}