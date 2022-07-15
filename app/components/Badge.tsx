import { StyleSheet, Text, Pressable, View } from 'react-native';
import { colors, TypeColors } from '../constants/Colors';

type BadgeProps = {
  type?: string
  text?: string;
  outline?: string;
  outlineColor?: string;
  filled?: string;
  filledColor?: string;
  onPress?: () => void;
};

const Badge = (props: BadgeProps) => {
  const { type, text, outline, outlineColor, filled, filledColor, onPress } = props;
  // console.log('type ', type);
  // console.log('outline ', outline);
  // console.log('outlineColor ', outlineColor);
  // console.log('filled ', filled);
  // console.log('filledColor ', filledColor);

  const generateBadgeStyle = () => {
    if (type === 'bug') return styles.bug;
    if (type === 'dark') return styles.dark;
    if (type === 'dragon') return styles.dragon;
    if (type === 'electric') return styles.electric;
    if (type === 'fairy') return styles.fairy;
    if (type === 'fighting') return styles.fighting;
    if (type === 'fire') return styles.fire;
    if (type === 'flying') return styles.flying;
    if (type === 'ghost') return styles.ghost;
    if (type === 'grass') return styles.grass;
    if (type === 'ground') return styles.ground;
    if (type === 'ice') return styles.ice;
    if (type === 'normal') return styles.normal;
    if (type === 'poison') return styles.poison;
    if (type === 'psychic') return styles.psychic;
    if (type === 'rock') return styles.rock;
    if (type === 'steel') return styles.steel;
    if (type === 'water') return styles.water;
    if (type === 'unknown') return styles.unknown;
  };

  const generateBadgeTextStyle = () => {
    if (type === 'bug') return styles.bug;
    if (type === 'dark') return styles.dark;
    if (type === 'dragon') return styles.dragon;
    if (type === 'electric') return styles.electric;
    if (type === 'fairy') return styles.fairy;
    if (type === 'fighting') return styles.fighting;
    if (type === 'fire') return styles.fire;
    if (type === 'flying') return styles.flying;
    if (type === 'ghost') return styles.ghost;
    if (type === 'grass') return styles.grass;
    if (type === 'ground') return styles.ground;
    if (type === 'ice') return styles.ice;
    if (type === 'normal') return styles.normal;
    if (type === 'poison') return styles.poison;
    if (type === 'psychic') return styles.psychic;
    if (type === 'rock') return styles.rock;
    if (type === 'steel') return styles.steel;
    if (type === 'water') return styles.water;
    if (type === 'unknown') return styles.unknown;
  };

  const generateBadgeAltStyle = () => {
    let bgColor = '';
    if (type === 'bug') bgColor = TypeColors.bug;
    if (type === 'dark') bgColor = TypeColors.dark;
    if (type === 'dragon') bgColor = TypeColors.dragon;
    if (type === 'electric') bgColor = TypeColors.electric;
    if (type === 'fairy') bgColor = TypeColors.fairy;
    if (type === 'fighting') bgColor = TypeColors.fighting;
    if (type === 'fire') bgColor = TypeColors.fire;
    if (type === 'flying') bgColor = TypeColors.flying;
    if (type === 'ghost') bgColor = TypeColors.ghost;
    if (type === 'grass') bgColor = TypeColors.grass;
    if (type === 'ground') bgColor = TypeColors.ground;
    if (type === 'ice') bgColor = TypeColors.ice;
    if (type === 'normal') bgColor = TypeColors.normal;
    if (type === 'poison') bgColor = TypeColors.poison;
    if (type === 'psychic') bgColor = TypeColors.psychic;
    if (type === 'rock') bgColor = TypeColors.rock;
    if (type === 'steel') bgColor = TypeColors.steel;
    if (type === 'water') bgColor = TypeColors.water;
    if (type === 'unknown') bgColor = TypeColors.unknown;
    return bgColor;
  };

  if (!text) {
    return (
      <View
        style={{
          backgroundColor: generateBadgeAltStyle(),
          height: 15,
          width: 15,
          borderRadius: 15,
        }}
      />
    );
  }

  if (onPress) {
    return (
      <Pressable style={styles.psychic} onPress={onPress}>
        <Text style={styles.badgeText}>{text}</Text>
      </Pressable>
    );
  }

  return (
    <View style={[styles.badge, generateBadgeStyle()]}>
      <Text style={[styles.badgeText, generateBadgeTextStyle()]}>{text}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.greyOne,
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  badgeText: {
    color: colors.greyOne,
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  bug: {
    color: TypeColors.bug,
    borderColor: TypeColors.bug,
  },
  dark: {
    color: TypeColors.dark,
    borderColor: TypeColors.dark,
  },
  dragon: {
    color: TypeColors.dragon,
    borderColor: TypeColors.dragon,
  },
  electric: {
    color: TypeColors.electric,
    borderColor: TypeColors.electric,
  },
  fairy: {
    color: TypeColors.fairy,
    borderColor: TypeColors.fairy,
  },
  fighting: {
    color: TypeColors.fighting,
    borderColor: TypeColors.fighting,
  },
  fire: {
    color: TypeColors.fire,
    borderColor: TypeColors.fire,
  },
  flying: {
    color: TypeColors.flying,
    borderColor: TypeColors.flying,
  },
  ghost: {
    color: TypeColors.ghost,
    borderColor: TypeColors.ghost,
  },
  grass: {
    color: TypeColors.grass,
    borderColor: TypeColors.grass,
  },
  ground: {
    color: TypeColors.ground,
    borderColor: TypeColors.ground,
  },
  ice: {
    color: TypeColors.ice,
    borderColor: TypeColors.ice,
  },
  normal: {
    color: TypeColors.normal,
    borderColor: TypeColors.normal,
  },
  poison: {
    color: TypeColors.poison,
    borderColor: TypeColors.poison,
  },
  psychic: {
    color: TypeColors.psychic,
    borderColor: TypeColors.psychic,
  },
  rock: {
    color: TypeColors.rock,
    borderColor: TypeColors.rock,
  },
  steel: {
    color: TypeColors.steel,
    borderColor: TypeColors.steel,
  },
  water: {
    color: TypeColors.water,
    borderColor: TypeColors.water,
  },
  unknown: {
    color: TypeColors.unknown,
    borderColor: TypeColors.unknown,
  },
});
