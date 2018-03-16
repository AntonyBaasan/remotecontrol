import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './Styles';
import AppConfig from '../config/app.config';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          /* eslint react/prop-types: 0 */
          onPress={() => this.props.navigation.navigate('Shell')}
          style={styles.menuButton}
        >
          <Text style={styles.menuButtonLabel}> Shell Commands</Text>
        </TouchableHighlight>
        <TouchableHighlight
          /* eslint react/prop-types: 0 */
          onPress={() => this.props.navigation.navigate('Speech')}
          style={styles.menuButton}
        >
          <Text style={styles.menuButtonLabel}>Speech</Text>
        </TouchableHighlight>
        <Text style={styles.versionLabel}>{AppConfig.version}</Text>
      </View>
    );
  }
}
