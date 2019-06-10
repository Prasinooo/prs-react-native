import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationActions } from 'react-navigation';

const navigateAction = NavigationActions.navigate({
  routeName: 'User',

  params: {},

  action: NavigationActions.navigate({ routeName: 'User' }),
});


export default class Main extends React.Component {
  constructor(props) {
    super(props);

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.goUser = this.goUser.bind(this);
  }

  goUser() {
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Main Screen</Text>
        <Button
          onPress={this.goUser}
          title="Mine"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
