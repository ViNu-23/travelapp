import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constansts/Colors';
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/destination.json'
import GroupListing from '@/components/GroupListing';
import groupData from "@/data/groups.json";
import bestplaces from "@/data/bestplaces.json";

import BestDeals from '@/components/BestDeals';

export default function Page() {

  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('All')

  const onCatChanged = (category: string) => {
    setCategory(category)
  }

  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20 }} >
              <Image source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=female' }}
                style={{ width: 40, height: 40, borderRadius: 10, }}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.headingTxt}>Good Morning!</Text>
              <Text style={{
                color: Colors.primaryColor, fontSize: 14,
                fontWeight: "500",
                marginLeft: 10,
              }}>Merry Coe</Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => { }} style={{
            marginRight: 20,
            backgroundColor: Colors.primaryColor,
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
            <Ionicons name="notifications" size={20} color={Colors.white} />
          </TouchableOpacity>
        )
      }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <TextInput placeholder='Search' style={styles.inputField} />
            <Ionicons name='search' size={20} style={styles.searchIcon} />
          </View>
          {/* <TouchableOpacity onPress={() => { }} style={styles.filterButton}>
            <Ionicons name="options" size={28} color={'#ffffff'} />
          </TouchableOpacity> */}
        </View>
        <CategoryButtons onCategoryChanged={onCatChanged} />
        <Listings listings={listingData} category={category} />
        <GroupListing listings={groupData}/>
        <BestDeals deals={bestplaces}/>
        </ScrollView>
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
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
    marginLeft: 10,
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 10,
    justifyContent: 'space-between',
    position: 'relative',
    alignItems: "center",
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
  },
  inputField: {
    width: "90%",
  },
  filterButton: {
    marginLeft: 18,
    backgroundColor: Colors.primaryColor,
    padding: 6,
    borderRadius: 10,
  }
})
