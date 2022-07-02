import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import usePokemons from '../hooks/usePokemons';
import { PokemonType } from '../types/pokemon.type';
import Badge from '../components/Badge';

const Pokemons = () => {
  const pokemons = usePokemons().pokemons;

  const goToPokemonDetails = (pokemon: any) => {
    console.log(pokemon)
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pokemonsList}>
        {pokemons && pokemons.map((pokemon: PokemonType, index: number) =>
          <Pressable
            style={styles.PokemonCard}
            key={index}
            onPress={() => goToPokemonDetails(pokemon)}
          >
            <Image
              style={styles.PokemonImage}
              source={{uri: pokemon.sprites.front_default}}
            />
            <View style={styles.PokemonCardInfo}>
              <Text style={styles.PokemonCardName}>{pokemon.name}</Text>
              <Text style={styles.PokemonCardNumber}>{pokemon.id}</Text>
              <View style={styles.PokemonCardTypesContainer}>
                {pokemon && pokemon.types.map((type: any, index: number) => <Badge key={index} text={type.type.name} />)}
              </View>
            </View>
          </Pressable>
        )}
      </View>
    </ScrollView>
  )
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
    paddingBottom: 13,
  },
  pokemonsList: {
    marginLeft: 13,
    marginRight: 13,
  },
  PokemonCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  PokemonImage: {
    display: 'flex',
    width: 96,
    height: 96,
  },
  PokemonCardInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  PokemonCardName: {
    color: '#060506',
    fontWeight: '700',
    fontSize: 30,
    textTransform: 'capitalize',
  },
  PokemonCardNumber: {
    marginTop: 10,
    marginBottom: 10,
    color: '#060506',
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  PokemonCardTypesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
