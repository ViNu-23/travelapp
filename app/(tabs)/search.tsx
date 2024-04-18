import React from 'react';
import { StyleSheet, View, FlatList, Image, ListRenderItem, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import exploreData from "@/data/explore.json";
import { exploreType } from '@/types/exploreType';
import Colors from '@/constansts/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Page () {

  const renderItem: ListRenderItem<exploreType> = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={{ height: 200, width: 345 ,borderRadius:15,marginBottom:10}}
        />
      </View>
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{paddingHorizontal:15}}>
      <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <TextInput placeholder='Search Plan' style={styles.inputField} />
            <Ionicons name='search' size={20} style={styles.searchIcon} />
          </View>
          <TouchableOpacity onPress={() => { console.log('clicked');
          }} style={styles.filterButton}>
            <Ionicons name="options" size={28} color={'#ffffff'} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={exploreData}
          renderItem={renderItem}
        />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:10
  },
  imageContainer:{
    alignItems: "center",
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: "center",
    shadowColor: 'rgba(0, 0, 0, 0.05)',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 1,
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
