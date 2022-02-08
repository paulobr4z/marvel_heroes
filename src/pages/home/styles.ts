import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.profile_title};
  font-size: ${({ theme }) => theme.size.profile_title};
`;