import { createDrawerNavigator } from '@react-navigation/drawer';
// import MovieList from '../screens/MovieList';
import Settings from '../screens/Settings';
import MovieStackNavigator from './MovieStackNavigator';
import Header from '../components/Header';
import SettingsBottomTabNavigator from './SettingsBottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MovieList" screenOptions={{
      headerStyle: { backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerBackButtonMenuEnabled: true,
      headerTintColor: 'white',
    }}>
      <Drawer.Screen 
        name="Movie List" 
        component={MovieStackNavigator} 
        options={{
          headerShown: false,
      }}/>
      <Drawer.Screen 
        name="Settings" 
        component={SettingsBottomTabNavigator} 
        options={{
          headerShown: false,
          headerTitle: () => <Header name="Settings"/>,
          // headerLeft: () => null
      }}/>
    </Drawer.Navigator>
  );
}