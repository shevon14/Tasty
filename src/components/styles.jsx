import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SCREEN_SIZE } from '../constants/theme';

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 15,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.title,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  seeAll: {
    fontSize: SIZES.h3,
    fontWeight: '500',
    color: COLORS.primay,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  resturentContainer: {
    margin: 5,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: SCREEN_SIZE.width / 1.5,
    shadowColor: COLORS.icon,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  resturentBoxContainer: {
    margin: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: SCREEN_SIZE.width / 2 - 20,
    shadowColor: COLORS.icon,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    resizeMode: 'cover',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    width: SCREEN_SIZE.width / 1.5,
    height: SCREEN_SIZE.width / 3,
  },
  imageBox: {
    resizeMode: 'cover',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    width: SCREEN_SIZE.width / 2 - 20,
    height: SCREEN_SIZE.width / 3,
  },
  name: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.title,
  },
  address: {
    fontSize: SIZES.h5,
    fontWeight: '600',
    color: COLORS.subtitle,
    paddingBottom: 10,
  },
  distanceContainer: {
    position: 'absolute',
    backgroundColor: COLORS.primay,
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
    top: SCREEN_SIZE.width / 3 - 20,
  },
  distanceBoxContainer: {
    position: 'absolute',
    backgroundColor: COLORS.primay,
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    top: SCREEN_SIZE.width / 3 - 30,
  },
  distance: {
    fontSize: SIZES.h6,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  review: {
    fontSize: SIZES.h5,
    fontWeight: '400',
    color: COLORS.subtitle,
  },
  starContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    padding: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomRowContainer: {
    paddingTop: 8,
  },
});

export default styles;
