import React, { Component } from 'react';
import { ScrollView, TouchableHighlight, Text, TextInput } from 'react-native';
import styles from './Styles';
import SqsService from '../services/SqsService';

export default class ShellScreen extends Component {
  static navigationOptions = {
    title: 'Shell Commands',
  };
  constructor() {
    super();
    this.loadingString = 'sending ...';
    this.state = {
      from: 'PROPHIX\\abaasandorj',
      to: 'PROPHIX\\abaasandorj',
      command: 'launch adhoc',
      result: '',
    };
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest() {
    this.setState({ result: this.loadingString });
    SqsService.sendShellRequest({
      from: this.state.from,
      to: this.state.to,
      command: this.state.command,
    }).then(
      (response) => {
        console.log(response);
        this.setState({ result: response });
      },
      (error) => {
        console.log(error);
        this.setState({ result: error.message });
      },
    );
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="never"
      >
        <Text style={styles.label}>User</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ from: text })}
          value={this.state.from}
        />
        <Text style={styles.label}>Target</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ to: text })}
          value={this.state.to}
        />
        <Text style={styles.label}>Command</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ command: text })}
          value={this.state.command}
        />

        <TouchableHighlight
          /* eslint react/prop-types: 0 */
          onPress={this.sendRequest}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>Send</Text>
        </TouchableHighlight>
        <Text style={styles.resultText}>{this.state.result}</Text>
      </ScrollView>
    );
  }
}
