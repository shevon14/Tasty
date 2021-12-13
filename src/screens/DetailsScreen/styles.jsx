import { StyleSheet } from 'react-native';
import { COLORS, SCREEN_SIZE, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.title,
    paddingTop: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.title,
  },
  verfied: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
    marginBottom: 10,
  },
  address: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.title,
  },
  containerTitle: {
    paddingHorizontal: 10,
  },
  imgContainer: {
    paddingTop: 5,
    // shadowColor: COLORS.icon,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 3,
    // elevation: 5,
  },
  image: {
    width: SIZES.width - 10,
    height: ((SIZES.width - 10) / 16) * 9,
    borderRadius: 3,
  },
  reviewBar: {
    paddingVertical: 10,
  },
  line: {
    marginVertical: 10,
    marginHorizontal: -10,
    height: 1,
    backgroundColor: COLORS.icon,
    opacity: 0.5,
  },
  circle: {
    backgroundColor: COLORS.header,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  reviewBox: {
    borderColor: COLORS.primay,
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  reviewText: {
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    color: COLORS.primay,
  },
  hoursContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  hoursValuesContainer: {
    paddingHorizontal: 20,
  },
  day: {
    fontWeight: 'bold',
    color: COLORS.title,
  },
  time: {
    fontWeight: '600',
    color: COLORS.title,
  },
  buttonAddReviewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonAddReview: {
    backgroundColor: COLORS.primay,
    marginVertical: 5,
    padding: 10,
    width: SCREEN_SIZE.width - 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextAddReviews: {
    marginLeft: 5,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default styles;
