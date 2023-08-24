import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Settings() {
  return (
    <Text style={styles.title}>General</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  }
});