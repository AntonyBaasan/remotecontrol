import React, { Component } from 'react';
import { View, TouchableHighlight, Text, TextInput } from 'react-native';
import styles from './Styles';
import SqsService from '../services/SqsService';

export default class ShellScreen extends Component {
  static navigationOptions = {
    title: 'Shell Commands',
  };
  constructor() {
    super();
    this.state = {
      from: 'PROPHIX\\abaasandorj',
      to: 'PROPHIX\\abaasandorj',
      command: 'launch adhoc',
    };
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest() {
    this.a = 1;
    console.log('hello world');
    // console.log(this);
    console.log(this.state);
    SqsService.sendShellRequest({
      from: this.state.from,
      to: this.state.to,
      command: this.state.command,
    });
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
          onPress={this.sendRequest}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
