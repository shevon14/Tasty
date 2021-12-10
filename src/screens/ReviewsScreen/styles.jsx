import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  topContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.title,
    paddingTop: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  reviewContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  imgContainer: {
    flex: 0.5,
  },
  textContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  dataContainer: {
    paddingLeft: 20,
    flex: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 2,
  },
  name: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.title,
  },
  date: {
    fontSize: SIZES.h5,
    fontWeight: '500',
    fontStyle: 'italic',
    color: COLORS.subtitle,
  },
  review: {
    flex: 3,
    flexWrap: 'wrap',
  },
});

export default styles;
