import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function Page () {
    return (
      <View style={styles.container}>
        <Text> category </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
