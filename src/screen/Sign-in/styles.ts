import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../../theme";

export const Container = styled(SafeAreaView)`
    
    width: 100%;
    height: 90%;
    background-color: ${theme.COLORS.WHITE_400};
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const ContainerInputs = styled.View`
    
`;
export const ContainerTextButton = styled.View`
    width: 100%;
    height: 10%;
    
    background-color: ${theme.COLORS.BLUE_700};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;


export const TextBottom = styled.Text`
     color: ${theme.COLORS.WHITE_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;
export const TouchableButtonText = styled.TouchableOpacity`
    
`;
