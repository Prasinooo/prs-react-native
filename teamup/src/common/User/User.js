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
    // this.goEdit = this.goEdit.bind(this);
    // 替代方法是使用 class fields 语法，或在回调中使用箭头函数
  }

  goEdit() {
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>User page</Text>
        <Button
          onPress={(e)=>{this.goEdit(e)}}
          title="Edit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
