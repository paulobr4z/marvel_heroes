import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { height, width } = Dimensions.get('window');

export const CharacterInfoContainer = styled.ScrollView`
  flex: 1;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: ${({ theme }) => theme.size.description};
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.profile_title};
  font-size: ${({ theme }) => theme.size.profile_title};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
  z-index: 2;
`;

export const CharacterImage = styled.ImageBackground`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: ${`${height / 1.2}px`};
  width: ${`${width}px`};
  padding: 12px;
`;

export const CaracteristicsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 0 24px;
  margin-bottom: 40px;
  z-index: 2;
`;

export const CaracteristicWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CaracteristicsText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.caracteristic};
  font-size: ${({ theme }) => theme.size.caracteristic};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 12px;
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

export const AbilitiesSection = styled.View`
  width: 100%;
`;

export const AbilitieWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const AbilitieTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.ability};
  font-size: ${({ theme }) => theme.size.ability};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 20px;
`;

export const FilmsSection = styled.View`
  width: 100%;
`;

export const Section = styled.View`
  flex: 1;
  width: 100%;
  background: black;
`;