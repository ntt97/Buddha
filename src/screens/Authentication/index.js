import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./Login";
import RegisterScreen from "./Register";
import ResetScreen from "./Reset";
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Reset: ResetScreen
  },
  {
    initialRouteName: "Login",
    headerMode:'none'
  }
);
export default createAppContainer(AuthStack);
