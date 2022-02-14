import { FlatList, Text, View } from 'react-native';
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
import { useEffect, useLayoutEffect, useState } from 'react';

const charactersObj: any = CharactersData;
const typesCharacters = [
  { type: 'heroes', text: 'Heróis' },
  { type: 'villains', text: 'Vilões' },
  { type: 'antiHeroes', text: 'Anti-heróis' },
  { type: 'aliens', text: 'Alienígenas' },
  { type: 'humans', text: 'Humanos' },
]

export function Home() {
  const imagePath = [] as any; 

  function teste() {
    typesCharacters.forEach(character => {
      charactersObj[character.type].map((teste: any) => (
        imagePath.push(teste.imagePath)
      ))
    })    
  }

  useEffect(() => {
    teste()
  }, [])

  return (
    <HomeContainer>
      <HeaderHome />
      <TitleContainer>
        <SubTitle>Bem vindo ao Marvel Heroes</SubTitle>
        <Title>Escolha o seu personagem</Title>
      </TitleContainer>
      <TypesCharactersIconContainer>
        <HeroIcon width={60} height={60} />
        <VillainIcon width={60} height={60} />
        <AntiheroIcon width={60} height={60} />
        <AlienIcon width={60} height={60} />
        <HumanIcon width={60} height={60} />
      </TypesCharactersIconContainer>
      <FlatList
        data={typesCharacters}
        keyExtractor={ item => item.type }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TypesCharactersContainer>
            <TypesCharactersTitleContainer>
              <TypesCharactersTitle>
                {item.text}
              </TypesCharactersTitle>
              <SeeAll>
                Ver todo
              </SeeAll>
            </TypesCharactersTitleContainer>
            <FlatList
              data={charactersObj[item.type]}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={ item => item.name }
              renderItem={({ item }) => (
                <CharacterContainer activeOpacity={0.9}>
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
        )}
      />
    </HomeContainer>
  );
}
