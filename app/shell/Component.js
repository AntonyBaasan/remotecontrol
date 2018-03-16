import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
  },
  label: {
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    height: 50,
    backgroundColor: '#D63411',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonLabel: {
    fontSize: 26,
    color: '#fff',
  },
});

export default class ShellScreen extends Component {
  static navigationOptions = {
    title: 'Shell Commands',
  };
  constructor() {
    super();
    this.buttonClicked.bind(this);
    this.state = {
      from: 'PROPHIX\\abaasandorj',
      to: 'PROPHIX\\abaasandorj',
      command: 'launch adhoc',
    };
  }

  buttonClicked() {
    this.a = 1;
    console.log('Pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>User</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ from: text })}
          value={this.state.from}
        />
        <Text style={styles.label}>Target</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ to: text })}
          value={this.state.to}
        />
        <Text style={styles.label}>Command</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ command: text })}
          value={this.state.command}
        />

        <TouchableHighlight
          /* eslint react/prop-types: 0 */
          onPress={this.buttonClicked}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}> Send</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
