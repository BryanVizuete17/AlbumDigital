import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlightComponent, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Profile } from './screens/Profile';
import Icon from 'react-native-vector-icons/Entypo';
import { PhotoAlbum } from './screens/PhotoAlbum';
import { Store } from './screens/Store';
import { Users } from './screens/Users';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
      <Drawer.Screen name="User" component={Users}></Drawer.Screen>
    
    </Drawer.Navigator>
  )
}

function TabHome(){
return(
  <Tab.Navigator>
    <Tab.Screen
    name="ScreenProfile"
    component={Profile}
    options={{
      tabBarLabel:"Profile",
      tabBarIcon:()=>(
       <Icon
       name='user'
       size={34}
       color="blue" />
      )
    }}
  ></Tab.Screen>

  <Tab.Screen
  name="PhotoAlbum"
  component={PhotoAlbum}
  options={{
    tabBarLabel:"PhotoAlbum",
    tabBarIcon:()=>(
      <Icon
      name='user'
      size={32}
      color="orange"/>
    )
  }}
  ></Tab.Screen>

  <Tab.Screen
  name="Store"
  component={Store}
  options={{
    tabBarLabel:"Store",
    tabBarIcon:()=>(
      <Icon
      name='user'
      size={32}
      color='orange'/>
      
    )
  }}
  ></Tab.Screen>

  <Tab.Screen
  name="Users"
  component={Users}
  options={{
    tabBarLabel:"Users",
    tabBarIcon:()=>(
      <Icon
      name="user"
      size={32}
      color="orange"/>
    )
  }}
  ></Tab.Screen>
  </Tab.Navigator>
)
}

export default function App(){
  return(
    <NavigationContainer>
     
     
  
     <Stack.Navigator style={style.cabecera} initialRouteName="TabHomeScreen">
     
     
     {/**
      * <Stack.Screen  name="TabHomeDrawer" component={MyDrawer}></Stack.Screen>
     }
    
    {/**
     *<Stack.Screen name="TabHomeScreen" component={TabHome}></Stack.Screen>
      
     */} 
       
      <Stack.Screen name="PhotoAlbum" component={PhotoAlbum}></Stack.Screen>
      <Stack.Screen name="Store" component={Store}></Stack.Screen>
    
      <Drawer.Screen name="Users" component={Users}></Drawer.Screen>
      <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
     
      </Stack.Navigator>
 
      

    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  cabecera:{
    flex:1,
    backgroundColor:'yellow',
  }
})