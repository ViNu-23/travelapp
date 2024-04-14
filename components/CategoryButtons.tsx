import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constansts/Colors'

export default function CategoryButtons() {
  return (
    <View>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
       fontSize :24,
       fontWeight:"600",
       color:Colors.black,

    }
})