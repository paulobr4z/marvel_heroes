import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { height, width } = Dimensions.get('window');

interface IStatusAbilities {
  status: number
}

export const AbilitiesSectionContainer = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const BiographyText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: ${({ theme }) => theme.size.description};
  color: ${({ theme }) => theme.colors.white};
  line-height: 18px;
  margin-bottom: 32px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.section_title};
  font-size: ${({ theme }) => theme.size.section_title};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`;

export const AbilityWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

export const AbilityTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.ability};
  font-size: ${({ theme }) => theme.size.ability};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 20px;
`;

export const AbilityStatusWrapper = styled.View`
  height: 12px;
  width: 250px;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 100px;
`;

export const AbilityStatus = styled.View<IStatusAbilities>`
  height: 12px;
  width: ${({ status }) => status && `${status}%`};
  background: white;
  border-radius: 100px;
`;