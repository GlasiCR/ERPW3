import Api from "../axiosConfig";

export const ResumeClient = async (id: string) =>{
    const response = await Api.get(`/app/cliente/${id}/resumo`);
    return response.data
}