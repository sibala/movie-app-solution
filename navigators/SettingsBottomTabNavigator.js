import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import ProfileSettings from '../screens/ProfileSettings';
import PaymentSettings from '../screens/PaymentSettings';
import Header from '../components/Header';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function SettingsBottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerBackButtonMenuEnabled: true,
      headerTintColor: 'white',
    }}>
      <Tab.Screen name="General" component={Settings} options={{
          headerTitle: () => <Header name="Settings"/>,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
          title: ''
      }}/>
      <Tab.Screen name="Profile" component={ProfileSettings} options={{
          headerTitle: () => <Header name="Settings"/>,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
          title: ''
      }}/>
      <Tab.Screen name="Payments" component={PaymentSettings} options={{
          headerTitle: () => <Header name="Settings"/>,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="payment" size={size} color={color} />
          ),
          title: ''
      }}/>
    </Tab.Navigator>
  );
}