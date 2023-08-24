import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function PaymentSettings() {
  return (
    <Text style={styles.title}>Payment</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  }
});
