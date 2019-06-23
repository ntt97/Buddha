
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import MainScreen from '../screens/Main'
import AuthScreen from '../screens/Authentication'
import AuthLoadingScreen from '../screens/AuthLoading'
const switchNavigator = createSwitchNavigator(
    {   AuthLoading:AuthLoadingScreen,
        Main:MainScreen,
        Auth:AuthScreen,
    },
    {
        initialRouteName:"AuthLoading"
    }  
)
export default createAppContainer(switchNavigator)