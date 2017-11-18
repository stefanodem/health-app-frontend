import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HealthCenterScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: 'Health',
      headerTitle: 'Person Name', //can be String, React Element or React Componen
      //header: can be React Element or a function --> for customizing headers
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />;
      },
    };
  }

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

export default connect(null, actions)(HealthCenterScreen);