import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../../theme";

export const Container = styled(SafeAreaView)`
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: ${theme.COLORS.WHITE_400};
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;