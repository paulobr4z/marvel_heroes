import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { height, width } = Dimensions.get('window');

interface IStatusAbilities {
  status: number
}

export const MoviesSectionContainer = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.section_title};
  font-size: ${({ theme }) => theme.size.section_title};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`;

export const Poster = styled.Image`
  height: 230px;
  width: 140px;
  border-radius: 16px;
  margin-right: 16px;
  margin-bottom: 20px;
`;

