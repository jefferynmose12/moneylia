import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center } from 'native-base';
import { DashBoard } from '../screens/DashBoard';
import PagopaServices from '../screens/PagopaServices';
import { StyleSheet } from 'react-native';
import { colors } from '../assets/color';
import HomeIcon from '../components/HomeIcon';
import PagoIcon from '../components/PagoIcon';
import PagoIconHover from '../components/PagoIconHover';
import ExtractScreen from '../screens/ExtractScreen';
import ExtractIcon from '../components/ExtractIcon';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileIcon from '../components/ProfileIcon';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Dashboard' screenOptions={{
      tabBarShowLabel : false,
      tabBarStyle : {...Styles.tab},
      headerShown : false,
      tabBarHideOnKeyboard : true
    }}>
      <Tab.Screen name='Dashboard' component={DashBoard} options={{
        tabBarIcon: ({focused}) => (
          <Center>
            {focused ? (<HomeIcon text='Dashboard' color={true} />) : (<HomeIcon text='Home' />)}
          </Center>
        )
      }}/>
      <Tab.Screen name='Extract' component={ExtractScreen} options={{
        tabBarIcon: () => (
          <Center>
            <ExtractIcon />
          </Center>
        )
      }}/>
      <Tab.Screen name='PagopaServices' component={PagopaServices} options={{
        tabBarIcon: ({focused}) => (
          <Center>
            {focused ? (<PagoIconHover />) : (<PagoIcon />)}
          </Center>
        )
      }}/>
      <Tab.Screen name='Person' component={ProfileScreen} options={{
        tabBarIcon: () => (
          <Center>
            <ProfileIcon />
          </Center>
        )
      }}/>
    </Tab.Navigator>
  )
}

const Styles = StyleSheet.create({
  tab : {
    elevation: 0,
    backgroundColor : colors.white,
    height : 65
  }
})

export default BottomTabs