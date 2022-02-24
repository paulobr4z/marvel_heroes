import { StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  CaracteristicsContainer,
  CaracteristicsText,
  CaracteristicWrapper,
  CharacterImage,
  CharacterInfoContainer,
  Section,
  SubTitle,
  Title,
} from "./styles";

import AgeIcon from "../../assets/icons/age.svg"
import WeightIcon from "../../assets/icons/weight.svg"
import HeightIcon from "../../assets/icons/height.svg"
import UniverseIcon from "../../assets/icons/universe.svg"
import { AbilitiesSection } from "../../components/AbilitiesSection";
import { MoviesSection } from "../../components/MoviesSection";

interface ICharacter {
  character: {
    name: string;
    alterEgo: string;
    imagePath: string;
    biography: string;
    caracteristics: {
      birth: string;
      weight: {
        value: number;
      },
      height: {
        value: number;
      },
      universe: string;
    },
    abilities: {
      force: number,
      intelligence: number,
      agility: number,
      endurance: number,
      velocity: number
    },
    movies: string[];
  }
}

export function CharacterInfo({ route }: any) {
  const { character } = route.params as ICharacter;
  return (
    <CharacterInfoContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <CharacterImage
        source={{ uri: character.imagePath }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.9)', 'transparent']}
          style={styles.linearGradientTop}
        />
        <SubTitle>{character.alterEgo}</SubTitle>
        <Title>{character.name}</Title>
        <CaracteristicsContainer>
          <CaracteristicWrapper>
            <AgeIcon height={24} width={24} />
            <CaracteristicsText>
              {`${2022 - Number(character.caracteristics.birth)} anos`}
            </CaracteristicsText>
          </CaracteristicWrapper>
          <CaracteristicWrapper>
            <WeightIcon height={24} width={24} />
            <CaracteristicsText>
              {`${character.caracteristics.weight.value} kg`}
            </CaracteristicsText>
          </CaracteristicWrapper>
          <CaracteristicWrapper>
            <HeightIcon height={24} width={24} />
            <CaracteristicsText>
            {`${character.caracteristics.height.value.toFixed(2)} m`}
            </CaracteristicsText>
          </CaracteristicWrapper>
          <CaracteristicWrapper>
            <UniverseIcon height={24} width={24} />
            <CaracteristicsText>
              {character.caracteristics.universe}
            </CaracteristicsText>
          </CaracteristicWrapper>
        </CaracteristicsContainer>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1)']}
          style={styles.linearGradientBottom}
        />
      </CharacterImage>
      <Section>
        <AbilitiesSection abilities={character.abilities} />
        <MoviesSection movies={character.movies} />
      </Section>
    </CharacterInfoContainer>
  );
}

const styles = StyleSheet.create({
  linearGradientTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 100,
  },
  linearGradientBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
    zIndex: 1
  },
});