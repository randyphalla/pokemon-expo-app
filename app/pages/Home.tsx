import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationProps } from '../types/navigation.type';

const Home = ({navigation}: NavigationProps) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Pokemons"
        onPress={() => navigate('Pokemons')}
      />
    </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
