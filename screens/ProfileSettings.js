import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function ProfileSettings() {
  return (
    <Text style={styles.title}>Profile</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  }
});