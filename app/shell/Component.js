import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Shell extends Component {
  constructor() {
    super();
    this.buttonClicked.bind(this);
  }

  buttonClicked() {
    this.a = 1;
    console.log('Pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.buttonClicked} title="Execute Shell" />
      </View>
    );
  }
}
