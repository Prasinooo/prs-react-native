import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from '../common/Main'
import User from '../common/User/User'
import UserEdit from '../common/User/UserEdit'

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    User: {
      screen: User
    },
    UserEdit: {
      screen: UserEdit
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
