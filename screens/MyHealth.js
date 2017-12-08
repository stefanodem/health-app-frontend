import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyHealthScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Health Center Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(null, actions)(MyHealthScreen);