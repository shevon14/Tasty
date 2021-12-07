import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import AccountScreen from '../screens/accountScreen';
import FavouritesScreen from '../screens/favouritesScreen';
import { COLORS } from '../constants/theme';

const homeStack = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      title: 'Find Best Resturents',
      headerTintColor: COLORS.background,
      headerStyle: {
        paddingTop: 40,
        backgroundColor: COLORS.primay,
        elevation: 0,
        borderBottomWidth: 0,
        height: 50,
      },
    },
  },
  Details: DetailsScreen,
  Reviews: ReviewsScreen,
});

const mainStack = createBottomTabNavigator({
  favourites: {
    screen: FavouritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => <Icon name="heart-circle" size={25} color={tintColor} />,
    },
  },
  home: {
    screen: homeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
    },
  },
  account: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="person-circle" size={25} color={tintColor} />,
    },
  },
}, {
  initialRouteName: 'home',
  tabBarOptions: {
    activeTintColor: COLORS.primay,
    inactiveTintColor: COLORS.icon,
    labelStyle: {
      color: COLORS.subtitle,
    },
    style: {
      backgroundColor: COLORS.background,
      paddingTop: 10,
    },
  },
});

const Router = createAppContainer(mainStack);

export default Router;
