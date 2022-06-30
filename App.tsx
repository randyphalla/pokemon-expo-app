import { StyleSheet, View } from 'react-native';
// import Home from './app/pages/Home';
// import Pokemons from './app/pages/Pokemons';
import Pokemon from './app/pages/Pokemon';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Pokemons /> */}
      <Pokemon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
