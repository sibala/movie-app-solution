
import { createStackNavigator } from '@react-navigation/stack';
import MovieList from '../screens/MovieList';
import MovieDetails from '../screens/MovieDetails';
import Header from '../components/Header';
import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


export default function MovieStackNavigator() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
      <Stack.Navigator initialRouteName="MovieList" screenOptions={{
        headerStyle: { backgroundColor: 'black'},
        headerTitleStyle: {color: 'white'},
        headerBackButtonMenuEnabled: true,
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="MovieList" component={MovieList} options={{
            headerTitle: () => <Header name="Movie List"/>,
        }}/>
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{
            headerTitle: "Movie Details",
        }}/>
      </Stack.Navigator>
  );
}
