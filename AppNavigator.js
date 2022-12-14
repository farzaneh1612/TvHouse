// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screen/TabNavigator/Home';
import Profile from './src/screen/TabNavigator/Profile';
import BasketShop from './src/screen/TabNavigator/BasketShop';
import Category from './src/screen//TabNavigator/Category';
import {Icon, Text} from './src/components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabNavigator = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior={'initialRoute'}
      screenOptions={({route}) => ({
        tabBarLabel: ({focused, color, size}) => {
          let label;
          if (route.name === 'Home') {
            size = focused ? 12 : 10;
            label = 'خانه';
          } else if (route.name === 'Profile') {
            size = focused ? 12 : 10;

            label = 'پروفایل';
          } else if (route.name === 'BasketShop') {
            size = focused ? 12 : 10;

            label = 'سبدخرید';
          } else if (route.name === 'Category') {
            size = focused ? 12 : 10;

            label = 'محصولات';
          }
          return (
            <Text size={size} textAlign={'center'} color={color}>
              {label}
            </Text>
          );
        },

        tabBarIcon: ({focused, color, size}) => {
          let iconName, type, label;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-outline' : 'ios-home-outline';
            type = 'ion';
            size = focused ? 30 : 27;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
            type = 'ion';
            size = focused ? 30 : 27;
          } else if (route.name === 'BasketShop') {
            iconName = focused ? 'ios-cart-outline' : 'ios-cart-outline';
            type = 'ion';
            size = focused ? 30 : 27;
          } else if (route.name === 'Category') {
            iconName = focused ? 'table' : 'table';
            type = 'material-community-icons';
            size = focused ? 30 : 27;
          }
          // You can return any component that you like here!
          return (
            <Icon
              type={type}
              name={iconName}
              size={size}
              color={color}
              style={{marginTop: 5}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {height: 62},
      }}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="BasketShop" component={BasketShop} />
      <Tab.Screen name="Category" component={Category} />

      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="tabNavigator"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="tabNavigator" component={tabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
