import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constansts/Colors';
import { useHeaderHeight } from "@react-navigation/elements";
import { SearchBar } from 'react-native-screens';
import CategoryButtons from '@/components/CategoryButtons';

export default function Page() {

  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20 }} >
            <Image source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=female' }}
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => { }} style={{
            marginRight: 20,
            backgroundColor: Colors.white,
            padding: 12,
            borderRadius: 10,
            shadowColor: 'rgba(0, 0, 0, 0.05)',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 1,
          }}>
            <Ionicons name="notifications" size={20} color={Colors.black} />
          </TouchableOpacity>
        )
      }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingTxt}>Hello, John Doe</Text>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <TextInput placeholder='Search' style={styles.inputField} />
            <Ionicons name='search' size={20} style={styles.searchIcon}/>
          </View>
          <TouchableOpacity onPress={() => { }} style={styles.filterButton}>
            <Ionicons name="options" size={28} color={'#ffffff'} />
          </TouchableOpacity>
        </View>
        <CategoryButtons/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
    justifyContent:'space-between',
    position: 'relative',
    alignItems: "center",
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
  },
  inputField:{
    width: "90%",
  },
  filterButton:{
    marginLeft:18,
    backgroundColor:Colors.primaryColor,
    padding: 8,
    borderRadius: 10,
  }
})
