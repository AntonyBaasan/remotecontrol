import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/home/Component';
import ShellScreen from './app/shell/Component';
import SpeechScreen from './app/speech/Component';

const HomeNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Shell: { screen: ShellScreen },
    Speech: { screen: SpeechScreen },
  },
  {
    initialRouteName: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
      // backgroundColor: '#D63411',
    },
    headerTintColor: '#D63411',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
);

export default class App extends Component {
  render() {
    return <HomeNavigator />;
  }
}
