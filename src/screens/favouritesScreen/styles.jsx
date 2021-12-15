import { Platform, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: COLORS.header,
    height: Platform.OS === 'ios' ? 120 : 80,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
    marginBottom: 20,
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
