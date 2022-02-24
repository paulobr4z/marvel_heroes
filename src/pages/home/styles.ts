import styled from 'styled-components/native';

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 0 24px 24px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 32px;
`;

export const HomeContent = styled.ScrollView`
  flex: 1;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: ${({ theme }) => theme.size.description};
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.home_title};
  font-size: ${({ theme }) => theme.size.home_title};
  color: ${({ theme }) => theme.colors.dark};
`;

export const TypesCharactersIconContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

export const TypesCharactersContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TypesCharactersTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

export const TypesCharactersTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.section_title};
  font-size: ${({ theme }) => theme.size.section_title};
  color: ${({ theme }) => theme.colors.red};
`;

export const SeeAll = styled.Text`
  font-family: ${({ theme }) => theme.fonts.profile_subtitle};
  font-size: ${({ theme }) => theme.size.profile_subtitle};
  color: ${({ theme }) => theme.colors.grey};
  margin-right: 24px;
`;

export const CharacterContainer = styled.TouchableOpacity`
  height: 230px;
  width: 140px;
  margin-right: 16px;
  margin-bottom: 40px;
  border-radius: 16px;
  overflow: hidden;
`;

export const CharacterImage = styled.ImageBackground`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 230px;
  width: 140px;
  padding: 12px;
`;

export const SubtitleCharacterImage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.card_subtitle};
  font-size: ${({ theme }) => theme.size.card_subtitle};
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleCharacterImage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.card_title};
  font-size: ${({ theme }) => theme.size.card_title};
  color: ${({ theme }) => theme.colors.white};
`;
