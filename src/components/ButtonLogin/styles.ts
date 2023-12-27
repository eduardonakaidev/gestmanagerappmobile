import styled from 'styled-components/native';
import theme from '../../theme';
export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  margin-top: 24px;
  background-color: ${theme.COLORS.BLUE_SUCESS};
`;

export const Title = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Loading = styled.ActivityIndicator.attrs(({}) => ({
  color: theme.COLORS.WHITE
}))``;