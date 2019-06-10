import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationActions } from 'react-navigation';

const navigateAction = NavigationActions.navigate({
  routeName: 'UserEdit',

  params: {},

  action: NavigationActions.navigate({ routeName: 'UserEdit' }),
});

export default class User extends React.Component {
  constructor(props) {
    super(props);

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.goEdit = this.goEdit.bind(this);
  }

  goEdit() {
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>User page</Text>
        <Button
          onPress={this.goEdit}
          title="Edit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
