import Initial from '../page/registerLogin/Initial';
import Login from '../page/registerLogin/Login';
import ShortMessageLogon from '../page/registerLogin/ShortMessageLogon';
import Practice from '../page/simulation/Practice';
import TrainingBegins from '../page/simulation/TrainingBegins';
import SubjectSelection from '../page/simulation/SubjectSelection';
import BottomNavigationEntrance from '../page/BottomNavigationEntrance';
import AccountManagement from '../page/userCenter/AccountManagement';
import PaperInformation from '../page/examination/PaperInformation';
import TestpaperDetails from '../page/examination/TestpaperDetails';
import Achievement from '../page/examination/Achievement';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const screens = {
  Initial: {
    screen: Initial
  },
  Login: {
    screen: Login
  },
  ShortMessageLogon: {
    screen: ShortMessageLogon
  },
  Practice: {
    screen: Practice
  },
  BottomNavigationEntrance: {
    screen: BottomNavigationEntrance
  },
  SubjectSelection: {
    screen: SubjectSelection
  },
  AccountManagement: {
    screen: AccountManagement
  },
  PaperInformation: {
    screen: PaperInformation
  },
  TestpaperDetails: {
    screen: TestpaperDetails
  },
  Achievement: {
    screen: Achievement
  },
  TrainingBegins: {
    screen: TrainingBegins
  },
}

const config = {
  headerMode: 'none',
  initialRouteName: 'Initial'
}

const MainNavigator = createStackNavigator(screens,config);
export default createAppContainer(MainNavigator);