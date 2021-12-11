import { StyleSheet } from 'react-native';
import { COLORS, SCREEN_SIZE, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.primay,
    paddingBottom: 10,
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
  locationSearchBox: {
    flexDirection: 'row',
    backgroundColor: COLORS.header,
    width: SCREEN_SIZE.width / 1.5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
  errorScreen: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.title,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: COLORS.icon,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: COLORS.white,
    width: SCREEN_SIZE.width / 1.5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: COLORS.primay,
    borderWidth: 2,
    marginBottom: 40,
  },
  buttonSave: {
    backgroundColor: COLORS.primay,
    marginVertical: 5,
    padding: 10,
    width: SCREEN_SIZE.width / 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonCancel: {
    backgroundColor: COLORS.header,
    marginVertical: 5,
    padding: 10,
    width: SCREEN_SIZE.width / 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  buttonTextSave: {
    marginLeft: 5,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  buttonTextCancel: {
    color: COLORS.primay,
    fontWeight: 'bold',
  },
  modalText: {
    fontWeight: '600',
  },
});

export default styles;
