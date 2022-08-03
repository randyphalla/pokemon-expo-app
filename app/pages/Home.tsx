import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colors } from '../constants/Colors';
import { NavigationProps } from '../types/navigation.type';

const Home = ({navigation}: NavigationProps) => {
  const { navigate } = navigation;

  const goToPokemonsPage = () => {
    navigate('Pokemons');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Pokedex</Text>

      <View style={styles.buttons}>

        <Pressable style={styles.button} onPress={goToPokemonsPage}>
          <Text style={styles.buttonText}>Pokemons</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Items (Coming Soon)</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Types (Coming Soon)</Text>
        </Pressable>

      </View>

    </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.greyOne,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 30,
  },
  buttons: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: colors.greyEight,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.greyOne,
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
});
