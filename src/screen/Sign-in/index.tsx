import { useNavigation } from "@react-navigation/native";
import { ButtonLogin } from "../../components/ButtonLogin";
import { Input } from "../../components/Inputs";
import { Container, ContainerInputs, ContainerTextButton, TextBottom, TouchableButtonText } from "./styles";
import { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../../services/api";



export function SignIn() {

    const navigation = useNavigation();
    function handleSignUpScreen() {
        navigation.navigate('signup');
    }
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        try {
          
          // Substitua 'sua_url_da_api' pela URL real da sua API de autenticação
          const response = await api.post('/store/auth', {
            email: email,
            password: password,
          });
    
          const token = response.data.token;
          // Faça algo com o token, como armazená-lo no AsyncStorage
          await AsyncStorage.setItem('userToken', token);

          // Exemplo: exibir o token em um alerta
          Alert.alert('Login bem-sucedido', `Token: ${token}`);
        } catch (error) {
          console.error('Erro no login:', error.message);
          Alert.alert('Erro no login', 'Verifique suas credenciais e tente novamente.');
        }
      };
    return (
        <>
            <Container>
                <ContainerInputs>
                    <Input placeholder="Email" keyboardType="email-address" value={email} onChangeText={(text)=> setEmail(text)}/>
                    <Input placeholder="Password" secureTextEntry value={password} onChangeText={(text)=> setPassword(text)}/>
                    <ButtonLogin title="Login" onPress={handleLogin}/>
                </ContainerInputs>

            </Container>
            <ContainerTextButton>
                <TouchableButtonText onPress={handleSignUpScreen}>
                    <TextBottom> Não tem uma conta? Registre-se</TextBottom>
                </TouchableButtonText>
            </ContainerTextButton>
        </>
    )
}