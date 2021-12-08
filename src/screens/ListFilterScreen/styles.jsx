import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.header,
    height: 70,
  },
  title: {
    fontSize: SIZES.h1 * 1.7,
    fontWeight: 'bold',
    color: COLORS.title,
    paddingTop: 15,
    paddingLeft: 10,
  },
});

export default styles;
