import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createAppContainer} from "react-navigation"
import ASCII from "./ASCII"
import Txt_speech from "./Txt_speech"
import DNAmRNA from "./DNAmRNA"
import Icon from 'react-native-vector-icons/Ionicons';  
import CelToFar from "./celToFar"

const TabNavigator=createBottomTabNavigator(
  {
    ASCII:{
      screen: ASCII,
      navigationOptions:{
        tabBarLabel:"ASCII translate",
        tabBarOptions:{
          activeTintColor:"midnightblue"
        },
        tabBarIcon:(tabInfo)=>{
          return(
            <Icon
            name= "md-repeat"
            size={24}
            color={tabInfo.focused?"midnightblue":"gray"}
            />
          );
        },
      },
    },
       TextToSpeech:{
      screen: Txt_speech,
      navigationOptions:{
        tabBarLabel:"Text To Speech",
        tabBarOptions:{
          activeTintColor:"midnightblue"
        },
        tabBarIcon:(tabInfo)=>{
          return(
            <Icon
            name= "md-volume-high"
            size={24}
            color={tabInfo.focused?"midnightblue":"gray"}
            />
          );
        },
      },


       }, 

       DNAtransC:{
      screen: DNAmRNA,
      navigationOptions:{
        tabBarLabel:"DNA Transcription",
        tabBarOptions:{
          activeTintColor:"midnightblue"
        },
        tabBarIcon:(tabInfo)=>{
          return(
            <Icon
            name= "md-refresh"
            size={24}
            color={tabInfo.focused?"midnightblue":"gray"}
            />
          );
        },
      },


       },  CelToFar:{
      screen: CelToFar,
      navigationOptions:{
        tabBarLabel:"Celcius to Farenheit",
        tabBarOptions:{
          activeTintColor:"midnightblue"
        },
        tabBarIcon:(tabInfo)=>{
          return(
            <Icon
            name= "cloud-outline"
            size={24}
            color={tabInfo.focused?"midnightblue":"gray"}
            />
          );
        },
      },


       }, 

  //ASCII_translate: ASCII,
  //TexttoSpeech:  Txt_speech
  }
)//md sync w/ md person w/ md desktop
//md volume up



export default createAppContainer(TabNavigator);  