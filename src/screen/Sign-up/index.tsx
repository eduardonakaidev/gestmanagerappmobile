import { useNavigation } from "@react-navigation/native";
import {  ButtonSignUp} from "../../components/ButtonSignUp";
import { Input } from "../../components/Inputs";
import { Container, ContainerInputs, ContainerTextButton, ContainerTitle, TextBottom, TextTitleScreen, TouchableButtonText } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import { Alert } from "react-native";
import { AuthContextProvider } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { AppError } from "../../utils/AppError";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export function SignUp(){

   type FormDataProps = {
    cnpj : string;
    name: string;
    email : string;
    password: string;
   }
   const signUpSchema = yup.object({
    cnpj: yup.string().required('informe o cnpj'),
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
    
  });
    

    
      const [isLoading, setIsLoading] = useState(false);
    
      
      const { singIn } = useAuth();
      
      const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema),
      });
    const navigation = useNavigation();
    
    async function handleSignUp({cnpj, name, email, password }: FormDataProps) {
      try {
        setIsLoading(true)
  
        await api.post('/store/register', {cnpj, name, email, password });
        await singIn(email, password)
      } catch (error) {
        setIsLoading(false);
  
        const isAppError = error instanceof AppError;
  
        const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde';
        Alert.alert(title);
       
      }
    }
  

    function handleLogIn(){
        
    navigation.navigate('login');
}

    return(
        <>
        <Container>
            <ContainerInputs>
                <ContainerTitle>
                <TextTitleScreen>Registre-se para utilizar a aplicação</TextTitleScreen>
                </ContainerTitle>
                 <Controller
                   control={control}
                   name="cnpj"
                   render={({ field: { onChange, value } }) => (
                <Input placeholder="cnpj"  onChangeText={onChange} value={value}/>
                )}
                />
                 <Controller
                   control={control}
                   name="name"
                   render={({ field: { onChange, value } }) => (
                <Input placeholder="name" keyboardType="default" autoCorrect={false} onChangeText={onChange} value={value}/>
                )}
                />
                <Controller
                   control={control}
                   name="email"
                   render={({ field: { onChange, value } }) => (
                <Input placeholder="Email" keyboardType="email-address" onChangeText={onChange} value={value}/>
                )}
                />
                 <Controller
                   control={control}
                   name="password"
                   render={({ field: { onChange, value } }) => (
                <Input placeholder="senha" secureTextEntry onChangeText={onChange} value={value}/>
                )}
                />
            <ButtonSignUp title="registrar-se" onPress={handleSubmit(handleSignUp)}/>
            </ContainerInputs>
           
        </Container>
        <ContainerTextButton>
            <TouchableButtonText onPress={handleLogIn}>
        <TextBottom> já tem uma conta? Conecte-se</TextBottom>
        </TouchableButtonText>
        </ContainerTextButton>
        </>
    )
}