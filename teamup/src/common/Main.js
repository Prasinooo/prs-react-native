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
    // this.goUser = this.goUser.bind(this);
    // 替代方法是使用 class fields 语法，或在回调中使用箭头函数
  }

  goUser() {
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Main Screen</Text>
        <Button
          onPress={(e)=>{this.goUser(e)}}
          title="Mine"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
