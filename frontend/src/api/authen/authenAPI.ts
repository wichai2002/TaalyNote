
import api from "../api";
import ILogin from "../../interfaces/login";
import IRegister from "../../interfaces/register";


export default function authenAPI(){
    const login = async (payload: ILogin) => {
        try{
            const res = await api.post("/user/authen/", payload)
            return res
        }catch (error) {
            console.error('Error during login:', error);
            throw error;
        }

    };

    const register = async (payload: IRegister) => {
        const res = await api.post("/user/", payload)
        return res
    }

    return { login, register }
}
