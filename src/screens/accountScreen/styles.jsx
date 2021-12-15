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
  profileContainer: {
    backgroundColor: COLORS.primay,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageContainer: {
    marginHorizontal: 25,
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  name: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  email: {
    fontSize: SIZES.h5,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  reviewconatiner: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.title,
    paddingBottom: 10,
  },
  reviewBox: {
    alignItems: 'center',
  },
  reviewText: {
    color: COLORS.title,
    fontWeight: '300',
  },
});

export default styles;
