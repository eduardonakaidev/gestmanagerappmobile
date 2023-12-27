import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import theme from "../../theme";

export const Container = styled(TextInput)`
  

  min-height: 56px;
  max-height: 56px;
  min-width: 344px;
  max-width: 344px;
 
    color: ${theme.COLORS.BLACK};
    background-color: #F8F8F8;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  border-radius: 6px;
  padding: 16px;
  margin-top: 16px;
`;