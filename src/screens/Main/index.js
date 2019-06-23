import { createStackNavigator,createAppContainer } from 'react-navigation';
import HeadScreen from './Head'
import InviteScreen from './InviteFriend'
import MyPrayersScreen from './MyPrayers'
import PrayHistoryScreen from './PrayHistory'
import SubscribedScreen from './Subscribed'
import PrayWithYouScreen from './PrayWithYou'

const MainStack  = createStackNavigator(
    {
        Head:HeadScreen,
        Invite:InviteScreen,
        MyPrayer:MyPrayersScreen,
        PrayHistory:PrayHistoryScreen,
        Subscribed:SubscribedScreen,
        PrayWidthYou:PrayWithYouScreen,
    },
    {
        initialRouteName:'Head',
        headerMode:'none'
    }
)
export default createAppContainer(MainStack)