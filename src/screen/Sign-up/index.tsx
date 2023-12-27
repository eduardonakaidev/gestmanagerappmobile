import { useNavigation } from "@react-navigation/native";
import {  ButtonSignUp} from "../../components/ButtonSignUp";
import { Input } from "../../components/Inputs";
import { Container, ContainerInputs, ContainerTextButton, ContainerTitle, TextBottom, TextTitleScreen, TouchableButtonText } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";



export function SignUp(){

    interface RequestRegisterSignUp {
        cnpj: string;
        name: string;
        email: string;
        password: string;
    }
interface ReponseRegisterSignUp {
    
}
    const [name,setName] = useState<string>('');
    
    const [cnpj,setCnpj] = useState<string>('');
    const [email,setEmail]= useState<string>('');
    const [password,setPassword] = useState<string>('');
    const navigation = useNavigation();
    async function handlerSignUpActivate(){
        
             await handlerSignUp({email,name,password,cnpj});
       
    }

    function handleLogIn(){
        
    navigation.navigate('login');
}


 async function handlerSignUp({cnpj,name,email,password}:RequestRegisterSignUp){
    // const response = await fetch('http://192.168.0.115:8080/store/register',{
    //     method: 'POST',
    //     headers:{
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({cnpj,name,email,password})
    // });

    // const data = await response.json();
    // console.log(data);
    const response = await api.post('/store/register',{cnpj,name,email,password});
    console.log(response.data);

}
    return(
        <>
        <Container>
            <ContainerInputs>
                <ContainerTitle>
                <TextTitleScreen>Registre-se para utilizar a aplicação</TextTitleScreen>
                </ContainerTitle>
                <Input placeholder="cnpj" keyboardType="numeric" onChangeText={setCnpj} value={cnpj}/>
                <Input placeholder="name" keyboardType="default" autoCorrect={false} onChangeText={setName} value={name}/>
                <Input placeholder="Email" keyboardType="email-address" onChangeText={setEmail} value={email}/>
                <Input placeholder="senha" secureTextEntry onChangeText={setPassword} value={password}/>
            <ButtonSignUp title="registrar-se" />
            </ContainerInputs>
           
        </Container>
        <ContainerTextButton>
            <TouchableButtonText onPress={handlerSignUpActivate}>
        <TextBottom> já tem uma conta? Conecte-se</TextBottom>
        </TouchableButtonText>
        </ContainerTextButton>
        </>
    )
}