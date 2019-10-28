import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';

import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screen/Home';
import Top5Screen from '../screen/Top5';
import SearchScreen from '../screen/Search';
import AccountScreen from '../screen/MyAccount';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  },
});

const Top5Stack = createStackNavigator({
  Top: {
    screen: Top5Screen,
    navigationOptions: ({navigation}) => ({
      title: 'Top 5',
    }),
  },
});

const SearchStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Search',
    }),
  },
});

const AccountStack = createStackNavigator({
  Top: {
    screen: AccountScreen,
    navigationOptions: ({navigation}) => ({
      title: 'My Account',
    }),
  },
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="compass-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    TopFive: {
      screen: Top5Stack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Top 5',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="star-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    Search: {
        screen: SearchStack,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: 'Search',
          tabBarIcon: ({tintColor}) => (
            <Icon
              name="magnify"
              type="material-community"
              size={22}
              color={tintColor}
            />
          ),
        }),
      },
      Account: {
        screen: AccountStack,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: 'My Account',
          tabBarIcon: ({tintColor}) => (
            <Icon
              name="home-outline"
              type="material-community"
              size={22}
              color={tintColor}
            />
          ),
        }),
      }
  },
  {
    tabBarOptions: {
      inactiveTintColor: '#646464',
      activeTintColor: '#00a680',
    },
  },
);

export default createAppContainer(RootStack);
