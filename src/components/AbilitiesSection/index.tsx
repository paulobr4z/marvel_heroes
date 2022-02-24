import React from 'react';
import { 
  SectionTitle,
  AbilitiesSectionContainer,
  AbilityWrapper,
  AbilityTitle,
  AbilityStatusWrapper,
  AbilityStatus,
} from './styles';

interface IAbilities {
  abilities: {
    force: number,
    intelligence: number,
    agility: number,
    endurance: number,
    velocity: number
  }
}

export function AbilitiesSection({
  abilities
}: IAbilities) {
  return (
    <AbilitiesSectionContainer>
      <SectionTitle>
        Habilidades
      </SectionTitle>
      <AbilityWrapper>
        <AbilityTitle>
          Força
        </AbilityTitle>
        <AbilityStatusWrapper>
          <AbilityStatus status={abilities.force} />
        </AbilityStatusWrapper>
      </AbilityWrapper>
      <AbilityWrapper>
        <AbilityTitle>
          Inteligência
        </AbilityTitle>
        <AbilityStatusWrapper>
          <AbilityStatus status={abilities.intelligence} />
        </AbilityStatusWrapper>
      </AbilityWrapper>
      <AbilityWrapper>
        <AbilityTitle>
          Agilidade
        </AbilityTitle>
        <AbilityStatusWrapper>
          <AbilityStatus status={abilities.agility} />
        </AbilityStatusWrapper>
      </AbilityWrapper>
      <AbilityWrapper>
        <AbilityTitle>
          Resistência
        </AbilityTitle>
        <AbilityStatusWrapper>
          <AbilityStatus status={abilities.endurance} />
        </AbilityStatusWrapper>
      </AbilityWrapper>
      <AbilityWrapper>
        <AbilityTitle>
          Velocidade
        </AbilityTitle>
        <AbilityStatusWrapper>
          <AbilityStatus status={abilities.velocity} />
        </AbilityStatusWrapper>
      </AbilityWrapper>
    </AbilitiesSectionContainer>
  );
}