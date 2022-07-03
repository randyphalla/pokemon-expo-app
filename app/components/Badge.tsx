import { StyleSheet, Text, Pressable, View } from 'react-native';
import { colors } from '../constants/Colors';

type BadgeProps = {
  text: string;
  outline?: string;
  outlineColor?: string;
  filled?: string;
  filledColor?: string;
  onPress?: () => void;
};

const Badge = (props: BadgeProps) => {
  const {text, outline, outlineColor, filled, filledColor, onPress} = props;
  // console.log(outline);
  // console.log(outlineColor);
  // console.log(filled);
  // console.log(filledColor);
  // console.log(onPress);

  const generateBadgeStyle = () => {}

  const generateBadgeTextStyle = () => {}

  if (onPress) {
    return (
      <Pressable
        style={styles.badge}
        onPress={onPress}
      >
        <Text style={styles.badgeText}>{text}</Text>
      </Pressable>
    )
  }

  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  )
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.white,
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  badgeText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  bug: {},
  dark: {},
  dragon: {},
  electric: {},
  fairy: {},
  fighting: {},
  fire: {},
  flying: {},
  ghost: {},
  grass: {},
  ground: {},
  ice: {},
  normal: {},
  poision: {},
  psychic: {},
  rock: {},
  steel: {},
  water: {},
});
