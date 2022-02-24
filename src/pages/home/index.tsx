import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { HeaderHome } from '../../components/HeaderHome';

import CharactersData from "../../assets/application.json"

import HeroIcon from "../../assets/icons/hero.svg"
import VillainIcon from "../../assets/icons/villain.svg"
import AntiheroIcon from "../../assets/icons/antihero.svg"
import AlienIcon from "../../assets/icons/alien.svg"
import HumanIcon from "../../assets/icons/human.svg"

import { 
  CharacterContainer,
  CharacterImage,
  HomeContainer, 
  HomeContent, 
  SeeAll, 
  SubTitle, 
  SubtitleCharacterImage, 
  Title,
  TitleCharacterImage,
  TitleContainer,
  TypesCharactersContainer,
  TypesCharactersIconContainer,
  TypesCharactersTitle,
  TypesCharactersTitleContainer,
} from './styles';

const typesCharacters = [
  { type: 'heroes', text: 'Heróis' },
  { type: 'villains', text: 'Vilões' },
  { type: 'antiHeroes', text: 'Anti-heróis' },
  { type: 'aliens', text: 'Alienígenas' },
  { type: 'humans', text: 'Humanos' },
]

export function Home({ navigation }: any) {
  return (
    <HomeContainer>
      <StatusBar barStyle='dark-content' backgroundColor="white" />
      <HomeContent 
        showsVerticalScrollIndicator={false} 
      >
        <HeaderHome />
        <TitleContainer>
          <SubTitle>Bem vindo ao Marvel Heroes</SubTitle>
          <Title>Escolha o seu personagem</Title>
        </TitleContainer>
        <TypesCharactersIconContainer>
          <HeroIcon width={70} height={70} />
          <VillainIcon width={70} height={70} />
          <AntiheroIcon width={70} height={70} />
          <AlienIcon width={70} height={70} />
          <HumanIcon width={70} height={70} />
        </TypesCharactersIconContainer>
        <TypesCharactersContainer>
          <TypesCharactersTitleContainer>
            <TypesCharactersTitle>
              {typesCharacters[0].text}
            </TypesCharactersTitle>
            <SeeAll>
              Ver todo
            </SeeAll>
          </TypesCharactersTitleContainer>
          <FlatList
            data={CharactersData.heroes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.name }
            renderItem={({ item, index }) => (
              <CharacterContainer 
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Info', {
                  character: CharactersData.heroes[index]
                })}
              >
                <CharacterImage
                  source={{ uri: item.imagePath }}
                  resizeMode="cover"
                >
                  <SubtitleCharacterImage>
                    {item.alterEgo}
                  </SubtitleCharacterImage>
                  <TitleCharacterImage>
                    {item.name}
                  </TitleCharacterImage>
                </CharacterImage>
              </CharacterContainer>
            )}
          />
        </TypesCharactersContainer>
        <TypesCharactersContainer>
          <TypesCharactersTitleContainer>
            <TypesCharactersTitle>
              {typesCharacters[1].text}
            </TypesCharactersTitle>
            <SeeAll>
              Ver todo
            </SeeAll>
          </TypesCharactersTitleContainer>
          <FlatList
            data={CharactersData.villains}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.name }
            renderItem={({ item, index }) => (
              <CharacterContainer 
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Info', {
                  character: CharactersData.villains[index]
                })}
              >
                <CharacterImage
                  source={{ uri: item.imagePath }}
                  resizeMode="cover"
                >
                  <SubtitleCharacterImage>
                    {item.alterEgo}
                  </SubtitleCharacterImage>
                  <TitleCharacterImage>
                    {item.name}
                  </TitleCharacterImage>
                </CharacterImage>
              </CharacterContainer>
            )}
          />
        </TypesCharactersContainer>
        <TypesCharactersContainer>
          <TypesCharactersTitleContainer>
            <TypesCharactersTitle>
              {typesCharacters[2].text}
            </TypesCharactersTitle>
            <SeeAll>
              Ver todo
            </SeeAll>
          </TypesCharactersTitleContainer>
          <FlatList
            data={CharactersData.antiHeroes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.name }
            renderItem={({ item, index }) => (
              <CharacterContainer
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Info', {
                  character: CharactersData.antiHeroes[index]
                })}
              >
                <CharacterImage
                  source={{ uri: item.imagePath }}
                  resizeMode="cover"
                >
                  <SubtitleCharacterImage>
                    {item.alterEgo}
                  </SubtitleCharacterImage>
                  <TitleCharacterImage>
                    {item.name}
                  </TitleCharacterImage>
                </CharacterImage>
              </CharacterContainer>
            )}
          />
        </TypesCharactersContainer>
        <TypesCharactersContainer>
          <TypesCharactersTitleContainer>
            <TypesCharactersTitle>
              {typesCharacters[3].text}
            </TypesCharactersTitle>
            <SeeAll>
              Ver todo
            </SeeAll>
          </TypesCharactersTitleContainer>
          <FlatList
            data={CharactersData.aliens}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.name }
            renderItem={({ item, index }) => (
              <CharacterContainer
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Info', {
                  character: CharactersData.aliens[index]
                })}
              >
                <CharacterImage
                  source={{ uri: item.imagePath }}
                  resizeMode="cover"
                >
                  <SubtitleCharacterImage>
                    {item.alterEgo}
                  </SubtitleCharacterImage>
                  <TitleCharacterImage>
                    {item.name}
                  </TitleCharacterImage>
                </CharacterImage>
              </CharacterContainer>
            )}
          />
        </TypesCharactersContainer>
        <TypesCharactersContainer>
          <TypesCharactersTitleContainer>
            <TypesCharactersTitle>
              {typesCharacters[4].text}
            </TypesCharactersTitle>
            <SeeAll>
              Ver todo
            </SeeAll>
          </TypesCharactersTitleContainer>
          <FlatList
            data={CharactersData.humans}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.name }
            renderItem={({ item, index }) => (
              <CharacterContainer
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Info', {
                  character: CharactersData.humans[index]
                })}
              >
                <CharacterImage
                  source={{ uri: item.imagePath }}
                  resizeMode="cover"
                >
                  <SubtitleCharacterImage>
                    {item.alterEgo}
                  </SubtitleCharacterImage>
                  <TitleCharacterImage>
                    {item.name}
                  </TitleCharacterImage>
                </CharacterImage>
              </CharacterContainer>
            )}
          />
        </TypesCharactersContainer>
      </HomeContent>
    </HomeContainer>
  );
}
