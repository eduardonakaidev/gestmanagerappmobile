import { useNavigation } from "@react-navigation/native";
import { ButtonLogin } from "../../components/ButtonLogin";
import { Input } from "../../components/Inputs";
import { Container, ContainerInputs, ContainerTextButton, TextBottom, TouchableButtonText } from "./styles";


export function SignIn() {
    const navigation = useNavigation();
    function handleSignUpScreen() {
        navigation.navigate('signup');
    }
    interface RequestAuthSingIn {
        email: String;
        password: String;
    }
    interface ReponseAuthSingIn {

    }
    function RegisterAuthSingIn(RequestAuthSingIn) {

    }
    return (
        <>
            <Container>
                <ContainerInputs>
                    <Input placeholder="Email" keyboardType="email-address" />
                    <Input placeholder="Password" secureTextEntry />
                    <ButtonLogin title="Login" />
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