import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.header,
    height: Platform.OS === 'ios' ? 80 : 60,
  },
  title: {
    fontSize: SIZES.h1 * 1.7,
    fontWeight: 'bold',
    color: COLORS.title,
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingLeft: 10,
  },
});

export default styles;
