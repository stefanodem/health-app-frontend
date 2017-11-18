import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store/index';

import RootContainer from './containers/root_container'
import TemplateScreen from './screens/TemplateScreen';
import HealthCenter from './screens/HealthCenter';

export default class App extends React.Component {

  render() {
    const MainNavigator = DrawerNavigator({
      main: {
        screen: TabNavigator({
          template: {
            screen: StackNavigator({
              template: { screen: TemplateScreen },
            }),
          },
          healthCenter: {
            screen: StackNavigator({
              healthCenter: { screen: HealthCenter },
            })
          },
        }),
      },
      abc: { screen: StackNavigator({
              healthCenter: { screen: HealthCenter },
            }) },

    },
    {
      headerMode: 'screen',
      initialRouteName: 'main',
      contentOptions: {
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1
        }
      }
    }
    )

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
