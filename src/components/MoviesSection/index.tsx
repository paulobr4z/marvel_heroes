import React from 'react';
import { FlatList, Text } from 'react-native';
import { 
  MoviesSectionContainer,
  Poster,
  SectionTitle,
} from './styles';

interface IMoviesSection {
  movies: string[];
}

export function MoviesSection({
  movies
}: IMoviesSection) {
  return (
    <MoviesSectionContainer>
      <SectionTitle>
        Filmes
      </SectionTitle>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item }
        renderItem={({ item }) => (
          <Poster
            source={{ uri: item }}
          />
        )}
      />
    </MoviesSectionContainer>
  );
}