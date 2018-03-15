import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './app/home/Component';
import Shell from './app/shell/Component';
import Speech from './app/speech/Component';

const HomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Shell: { screen: Shell },
    Speech: { screen: Speech },
  },
  {
    initialRouteName: 'Home',
  },
);

export default class App extends Component {
  render() {
    return <HomeNavigator />;
  }
}
