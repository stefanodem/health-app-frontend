import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TemplateScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />;
      },
      drawerLabel: 'Super Templates',
      drawerIcon: ({ tintColor }) => (
        <Icon name="favorite" size={20} color={tintColor} />
      ),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a Template</Text>
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

export default connect(null, actions)(TemplateScreen);