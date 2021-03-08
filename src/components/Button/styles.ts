import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ContainerProps {
  type?: 'primary' | 'secondary';
}

export const Container = styled(RectButton) <ContainerProps>`
  height: 47px;
  background: ${props => props.type === 'secondary' 
    ? props.theme.colors.secondary
    : props.theme.colors.primary };
  width: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #FEFEFE; 
`;
