import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Header({name}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            title="Info"
            style={styles.icon}
          >
        <Ionicons name="menu-sharp" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
  }
})
