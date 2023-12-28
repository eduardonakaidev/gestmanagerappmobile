import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSabe } from "../storage/storageAuthToken";


export type AuthContextDataProps = {
    signOut: () => Promise<void>;
    singIn: (email: string, password: string) => Promise<void>;
    isLoadingUserStorageData: boolean;

}
type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [isLoadingTokenStorageData, setIsLoadingTokenStorageData] = useState(true);

    async function userAndTokenUpdate(token: string) {
        
         
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            await storageAuthTokenSabe(token);

        
    }
    async function  signIn(email:string,password:string) {
        try{
            const {data} = await api.post('/store/auth',{email,password});

            if(data.token){
                await storageAuthTokenSabe(data.token);
                setIsLoadingTokenStorageData(true);
                
            }
        }catch(error){

        }finally{
            setIsLoadingTokenStorageData(false);
        }
        
    }
    async function  signUp(cnpj:string,name:string,email:string,password:string) {
        try{
            const {data} = await api.post('/store/register',{cnpj,name,email,password});

            if(data.token){
                await storageAuthTokenSabe(data.token);
                setIsLoadingTokenStorageData(true);
                
            }
        }catch(error){

        }finally{
            setIsLoadingTokenStorageData(false);
        }
        
    }
    async function loadUserData(){
        try{
            setIsLoadingTokenStorageData(true);
            const token = await storageAuthTokenGet();
            if(token){
                userAndTokenUpdate(token());
            }
        }catch(error){
            throw error;
        }finally{
            setIsLoadingTokenStorageData(false);
        }
    }
    async function  signOut() {
        try{
            setIsLoadingTokenStorageData(true);
            await storageAuthTokenRemove();
        }catch(error){
            throw error;

        }finally{
            setIsLoadingTokenStorageData(false);
        }
    }
}
