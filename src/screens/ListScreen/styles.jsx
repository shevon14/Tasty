import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.primay,
    paddingBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  searchBox: {
    flex: 5,
    flexDirection: 'row',
    marginRight: 5,
    padding: 10,
    height: 40,
    backgroundColor: COLORS.background,
    borderRadius: 5,
  },
  locationBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    height: 40,
    borderRadius: 5,
  },
});

export default styles;
