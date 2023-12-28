import { useNavigation } from "@react-navigation/native";
import {  ButtonSignUp} from "../../components/ButtonSignUp";
import { Input } from "../../components/Inputs";
import { Container, ContainerInputs, ContainerTextButton, ContainerTitle, TextBottom, TextTitleScreen, TouchableButtonText } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import { Alert } from "react-native";



export function SignUp(){

   
    const [name,setName] = useState('');
    const [cnpj,setCnpj] = useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');

    const navigation = useNavigation();
    const handleSignUp = async () => {
        try {
          // Substitua 'sua_url_da_api/signup' pela URL real da sua API de cadastro
          const response = await api.post('/store/register', {
            cnpj: cnpj,
            name: name,
            email: email,
            password: password,
          });
    
          // Verifica se a resposta é 200 (sucesso)
          if (response.status === 200) {
            // Redireciona para a tela de login
            handleLogIn();
            Alert.alert('Cadastro bem-sucedido', 'Você pode fazer login agora.');
          } else {
            // Exibe um alerta em caso de resposta inesperada
            Alert.alert('Erro no cadastro', 'Algo deu errado. Tente novamente.');
          }
        } catch (error) {
          console.error('Erro no cadastro:', error.message);
          Alert.alert('Erro no cadastro', 'Verifique suas informações e tente novamente.');
        }
      };


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
                <Input placeholder="cnpj" keyboardType="numeric" onChangeText={(text)=>setCnpj(text)} value={cnpj}/>
                <Input placeholder="name" keyboardType="default" autoCorrect={false} onChangeText={(text)=>setName(text)} value={name}/>
                <Input placeholder="Email" keyboardType="email-address" onChangeText={(text)=>setEmail(text)} value={email}/>
                <Input placeholder="senha" secureTextEntry onChangeText={(text)=>setPassword(text)} value={password}/>
            <ButtonSignUp title="registrar-se" onPress={handleSignUp}/>
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