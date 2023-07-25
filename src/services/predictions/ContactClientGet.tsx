import Api from "../axiosConfig";

export const ContactClient = async (id: string) =>{
    const response = await Api.get(`/app/cliente/${id}`);
    return response.data
}
