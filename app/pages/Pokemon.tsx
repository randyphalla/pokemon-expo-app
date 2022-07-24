import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, Pressable, Dimensions  } from 'react-native';
import { PokemonType, SpritesType } from '../types/pokemon.type';
import Badge from '../components/Badge';
import { MovesType } from '../types/moves.type';
import { colors } from '../constants/Colors';

const Pokemon = ({ route }: any) => {
  const { pokemonId } = route.params;
  const pokemonSpritesObj: SpritesType = {
    back_default: '',
    back_female: '',
    back_shiny: '',
    back_shiny_female: '',
    front_default: '',
    front_female: '',
    front_shiny: '',
    front_shiny_female: '',
  };
  const pokemonObj: PokemonType = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    past_types: [],
    species: [],
    sprites: pokemonSpritesObj,
    stats: [],
    types: [],
    weight: 0,
  };

  const [pokemon, setPokemon] = useState<PokemonType>(pokemonObj);
  const [movesTab, setMovesTab] = useState(false);
  const [spritesTab, setSpritesTab] = useState(false);
  const [statsTab, setStatsTab] = useState(true);
  const [pokemonMoves, setPokemonMoves] = useState<any[]>([]);

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

  const calculateStat = (num: number) => {
    return Dimensions.get('window').width - num;
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const json = await data.json();
      setPokemon(json);
      const pokemonMoves = json.moves;
      const pokemonMovesArray = [];
      for (const pokemonMove of pokemonMoves) {
        const pokemonMoveUrl = pokemonMove.move.url;
        const pokemonMoveData = await fetch(pokemonMoveUrl);
        const pokemonMoveDataJson = await pokemonMoveData.json();
        pokemonMovesArray.push(pokemonMoveDataJson);
      }
      setPokemonMoves(pokemonMovesArray);
    };
    fetchPokemon().catch(err => console.error('fetching pokemon ', err));
  }, []);


  const isPokemonMoves = pokemonMoves.length > 0;

  if (!pokemon && !isPokemonMoves) return <Text>Pokemon is loading!</Text>

  return (
    <SafeAreaView>
      <ScrollView  style={styles.ScrollViewContainer}>
        <View style={styles.PokemonContainer}>

          <Image
            style={styles.PokemonImage}
            source={{uri: pokemon.sprites.front_default}}
          />

          <Text style={styles.PokemonCardName}>{pokemon.name}</Text>

          <View style={styles.PokemonCardTypesContainer}>
            {pokemon && pokemon.types.map((type: any, index: number) =>
              <Badge
                key={index}
                type={type.type.name}
                text={type.type.name}
              />
            )}
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

          <View style={styles.buttons}>
            <Pressable style={[styles.button, statsTab ? styles.buttonActive : null]} onPress={handleStatsTab}>
              <Text style={styles.buttonText}>Stats</Text>
            </Pressable>
            <Pressable style={[styles.button, movesTab ? styles.buttonActive : null]} onPress={handleMovesTab}>
              <Text style={styles.buttonText}>Moves</Text>
            </Pressable>
            <Pressable style={[styles.button, spritesTab ? styles.buttonActive : null]} onPress={handleSpritesTab}>
              <Text style={styles.buttonText}>Sprites</Text>
            </Pressable>
          </View>

          {/* Stats */}
          {statsTab && (
            <View style={styles.PokemonStats}>
              {pokemon.stats.map((stat: any, index: number) =>
                <View style={styles.PokemonStat} key={index}>
                  <Text style={styles.PokemonStatName}>{stat.stat.name}</Text>
                  <Text style={styles.PokemonStatBaseNumber}>{stat.base_stat}</Text>
                  <View style={styles.PokemonStatBar}>
                    <View style={[
                      styles.PokemonStatBarInner,
                      {width: stat.base_stat}
                    ]} />
                  </View>
                </View>
              )}
            </View>
          )}

          {/* Moves */}
          {movesTab && (
            <View style={styles.PokemonMoves}>
              {pokemonMoves && pokemonMoves.map((pokemonMove: MovesType, index: number) =>
                <View key={index} style={styles.PokemonMove}>
                  <Badge type={pokemonMove.type.name} />
                  <View style={styles.PokemonMoveContent}>
                    <Text style={styles.PokemonMoveName}>{pokemonMove.name}</Text>
                    <Text style={styles.PokemonMoveAccuracy}>Accuracy: {pokemonMove.accuracy}</Text>
                    <Text style={styles.PokemonMoveAccuracy}>Power: {pokemonMove.power ? pokemonMove.power : 0}</Text>
                    <Text style={styles.PokemonMoveAccuracy}>PP: {pokemonMove.pp}</Text>
                    <Text style={styles.PokemonMoveAccuracy}>Type: {pokemonMove.type.name}</Text>
                  </View>
                </View>
              )}
            </View>
          )}

          {/* Sprites */}
          {spritesTab && (
            <View style={styles.PokemonSprites}>
              {pokemon.sprites.front_default && <Image style={styles.PokemonSpritesImage} source={{uri: pokemon.sprites.front_default}} />}
              {pokemon.sprites.back_default && <Image style={styles.PokemonSpritesImage} source={{uri: pokemon.sprites.back_default}} />}
              {pokemon.sprites.front_shiny && <Image style={styles.PokemonSpritesImage} source={{uri: pokemon.sprites.front_shiny}} />}
              {pokemon.sprites.back_shiny && <Image style={styles.PokemonSpritesImage} source={{uri: pokemon.sprites.back_shiny}} />}
              {pokemon.sprites.front_female && <Image style={styles.PokemonSpritesImage} source={{uri: pokemon.sprites.front_female}} />}
              {pokemon.sprites.back_female && <Image style={styles.PokemonSpritesImage} source={{uri: pokemon.sprites.back_female}} />}
              {pokemon.sprites.front_shiny_female && <Image style={styles.PokemonSpritesImage} source={{uri: pokemon.sprites.front_shiny_female}} />}
              {pokemon.sprites.back_shiny_female && <Image style={styles.PokemonSpritesImage} source={{uri: pokemon.sprites.back_shiny_female}} />}
            </View>
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default Pokemon;

const styles = StyleSheet.create({
  ScrollViewContainer: {},
  PokemonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: colors.greyEight,
  },
  PokemonImage: {
    display: 'flex',
    width: 96,
    height: 96,
  },
  PokemonCardName: {
    marginBottom: 10,
    color: colors.greyOne,
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
    marginLeft: 16,
    marginRight: 16,
    // width: '95%',
    // width: 'calc(100% - 32px)',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  PokemonBaseInfoContainer: {
    padding: 8,
    margin: 8,
    // width: '25%',
    textAlign: 'center',
  },
  PokemonBaseInfoText: {
    marginBottom: 8,
    color: colors.greyOne,
    fontWeight: '400',
    fontSize: 12,
  },
  PokemonBaseInfoData: {
    color: colors.greyOne,
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'capitalize'
  },
  PokemonStats: {
    padding: 16,
    width: '100%',
  },
  PokemonStat: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  PokemonStatName: {
    color: colors.greyOne,
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'capitalize'
  },
  PokemonStatBaseNumber: {
    marginTop: 15,
    marginBottom: 15,
    color: colors.greyOne,
    fontWeight: '800',
    fontSize: 14,
  },
  PokemonStatBar: {
    width: 200,
    height: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  PokemonStatBarInner: {
    width: '100%',
    height: 10,
    backgroundColor: colors.greyOne,
    borderRadius: 8,
  },
  PokemonMoves: {
    padding: 16,
    paddingTop: 0,
    width: '100%',
  },
  PokemonMove: {
    padding: 16,
    paddingLeft: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  PokemonMoveContent: {
    marginLeft: 15,
  },
  PokemonMoveName: {
    color: colors.greyOne,
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'capitalize'
  },
  PokemonMoveAccuracy: {
    marginTop: 3,
    color: colors.greyOne,
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'capitalize'
  },
  PokemonSprites: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  PokemonSpritesImage: {
    width: 96,
    height: 96,
  },
  PokemonCategory: {
    marginBottom: 10,
    color: colors.greyOne,
    fontWeight: '700',
    fontSize: 25,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 16,
  },
  button: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    marginRight: 16,
    borderWidth: 1,
    borderColor: colors.greyOne,
    borderStyle: 'solid',
    borderRadius: 8,
  },
  buttonActive: {
    borderColor: 'transparent',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  buttonText: {
    fontSize: 16,
    color: colors.greyOne,
    fontWeight: '600',
  },
});
