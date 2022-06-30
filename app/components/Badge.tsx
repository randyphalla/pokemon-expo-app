import { StyleSheet, Text, View } from 'react-native';

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
    borderColor: '#fff',
    borderRadius: 15,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  badgeText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'capitalize',
  }
});
