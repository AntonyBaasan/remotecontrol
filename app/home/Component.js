import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    width: 300,
    height: 90,
    marginBottom: 15,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtonLabel: {
    fontSize: 26,
  },
});

export default class Home extends Component {
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
          <Text style={styles.menuButtonLabel}> Speech</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
