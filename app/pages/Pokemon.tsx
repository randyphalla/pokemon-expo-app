import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { PokemonType } from '../types/pokemon.type';
import Badge from '../components/Badge';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonType>();
  const [movesTab, setMovesTab] = useState(false);
  const [spritesTab, setSpritesTab] = useState(false);
  const [statsTab, setStatsTab] = useState(false);

  const handleMovesTab = () => {
    resetTabs();
    setMovesTab(!movesTab);
  };

  const handleSpritesTab = () => {
    resetTabs();
    setSpritesTab(!spritesTab);
  };

  const handleStatsTab = () => {
    resetTabs();
    setStatsTab(!statsTab);
  };

  const resetTabs = () => {
    setMovesTab(false);
    setSpritesTab(false);
    setStatsTab(false);
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon/150');
      const json = await data.json();
      console.log(json);
      setPokemon(json);
    };

    fetchPokemon().catch(err => console.error('fetching pokemon ', err));

  }, []);

  if (!pokemon) return <Text>Pokemon is loading!</Text>

  return (
    <ScrollView style={styles.container}>
      <View style={styles.PokemonContainer}>
        <Image
          style={styles.PokemonImage}
          source={pokemon.sprites.front_default}
        />
        <Text style={styles.PokemonCardName}>{pokemon.name}</Text>
        <View style={styles.PokemonCardTypesContainer}>
          {pokemon && pokemon.types.map((type: any, index: number) => <Badge key={index} text={type.type.name} />)}
        </View>
        <View style={styles.PokemonBaseInfo}>
          <View style={styles.PokemonBaseInfoContainer}>
            <Text style={styles.PokemonBaseInfoText}>Number</Text>
            <Text style={styles.PokemonBaseInfoData}>#{pokemon.id}</Text>
          </View>
          <View style={styles.PokemonBaseInfoContainer}>
            <Text style={styles.PokemonBaseInfoText}>Height</Text>
            <Text style={styles.PokemonBaseInfoData}>{pokemon.height}</Text>
          </View>
          <View style={styles.PokemonBaseInfoContainer}>
            <Text style={styles.PokemonBaseInfoText}>Weight</Text>
            <Text style={styles.PokemonBaseInfoData}>{pokemon.weight}</Text>
          </View>
          <View style={styles.PokemonBaseInfoContainer}>
            <Text style={styles.PokemonBaseInfoText}>Base experience</Text>
            <Text style={styles.PokemonBaseInfoData}>{pokemon.base_experience}</Text>
          </View>
          <View style={styles.PokemonBaseInfoContainer}>
            <Text style={styles.PokemonBaseInfoText}>Abilities</Text>
            <View>
              {pokemon.abilities.map((ability: any, index: number) => <Text style={styles.PokemonBaseInfoData} key={index}>{ability.ability.name}</Text>)}
            </View>
          </View>
          <View style={styles.PokemonBaseInfoContainer}>
            <Text style={styles.PokemonBaseInfoText}>Moves</Text>
            <Text style={styles.PokemonBaseInfoData}>{pokemon.moves.length}</Text>
          </View>
        </View>
        <View style={styles.PokemonStats}>
          {pokemon.stats.map((stat: any, index: number) =>
            <View key={index}>
              <Text>{stat.stat.name}- {stat.base_stat}</Text>
            </View>
          )}
        </View>
        <View style={styles.PokemonMoves}>
          {pokemon.moves.map((move: any, index: number) =>
            <View key={index}>
              <Text>{move.move.name}</Text>
              <Text>{move.move.url}</Text>
            </View>
          )}
        </View>
        <View style={styles.PokemonSprites}>
          {pokemon.sprites.back_default && <Image style={styles.PokemonSpritesImage} source={pokemon.sprites.back_default}/>}
          {pokemon.sprites.back_female && <Image style={styles.PokemonSpritesImage} source={pokemon.sprites.back_female}/>}
          {pokemon.sprites.back_shiny && <Image style={styles.PokemonSpritesImage} source={pokemon.sprites.back_shiny}/>}
          {pokemon.sprites.back_shiny_female && <Image style={styles.PokemonSpritesImage} source={pokemon.sprites.back_shiny_female}/>}
          {pokemon.sprites.front_default && <Image style={styles.PokemonSpritesImage} source={pokemon.sprites.front_default}/>}
          {pokemon.sprites.front_female && <Image style={styles.PokemonSpritesImage} source={pokemon.sprites.front_female}/>}
          {pokemon.sprites.front_shiny && <Image style={styles.PokemonSpritesImage} source={pokemon.sprites.front_shiny}/>}
          {pokemon.sprites.front_shiny_female && <Image style={styles.PokemonSpritesImage} source={pokemon.sprites.front_shiny_female}/>}
        </View>
      </View>
    </ScrollView>
  )
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {},
  PokemonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#3E4047',
  },
  PokemonImage: {
    display: 'flex',
    width: '96px',
    height: '96px',
  },
  PokemonCardName: {
    marginBottom: 10,
    color: '#fff',
    fontWeight: '700',
    fontSize: 30,
    textTransform: 'capitalize',
  },
  PokemonCardTypesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PokemonBaseInfo: {
    marginTop: 16,
    marginBottom: 16,
    // margin: 16,
    width: '95%',
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  PokemonBaseInfoContainer: {
    padding: 8,
    margin: 8,
    width: 'calc(33% - 16px)',
    textAlign: 'center',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red',
  },
  PokemonBaseInfoText: {
    marginBottom: 8,
    color: '#fff',
    fontWeight: '400',
    fontSize: 14,
  },
  PokemonBaseInfoData: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'capitalize'
  },
  PokemonStats: {},
  PokemonMoves: {},
  PokemonSprites: {},
  PokemonSpritesImage: {
    width: '96px',
    height: '96px',
  },
});
