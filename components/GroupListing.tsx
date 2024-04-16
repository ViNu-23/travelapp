import { View, Text, FlatList, ListRenderItem, Image, StyleSheet } from "react-native";
import React from "react";
import { GroupType } from "@/types/groupType";
import Colors from "@/constansts/Colors";
import { Ionicons } from "@expo/vector-icons";

const GroupListing = ({ listings }: { listings: GroupType[] }) => {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={{ padding: 10, justifyContent: 'center' }}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={{ flexDirection: 'row' ,alignItems:'center'}}>
            <Ionicons name='star' color={Colors.primaryColor} size={18} />
            <Text style={{marginHorizontal:6}}><Text style={{fontWeight:'700'}}>{item.rating}</Text> Ratings</Text>
          </View>
          <View style={{ flexDirection: 'row' ,alignItems:'center',marginTop:4}}>
            <Ionicons name='thumbs-up' color={Colors.primaryColor} size={18} />
            <Text  style={{marginHorizontal:6}} ><Text style={{fontWeight:'700'}}>{item.reviews}</Text> Reviews</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View>
      <Text style={styles.titleText}>Top Travels</Text>
      <FlatList data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default GroupListing

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 90,
    borderRadius: 10
  },
  itemWrapper: {
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginVertical: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 4,
  }
})
