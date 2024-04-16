import { FlatList, ListRenderItem, StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import Colors from "@/constansts/Colors";
import { BestDealType } from "@/types/dealsType";
import { MaterialIcons } from "@expo/vector-icons";


export default function BestDeals({ deals }: { deals: BestDealType[] }) {
  const renderItem: ListRenderItem<BestDealType> = ({ item }) => {
    return (
      <View style={styles.imageRow}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.discountText}>
          <Text style={{fontWeight:'500',color:Colors.primaryColor,fontSize:16}}>{item.discount}%</Text>
        <MaterialIcons name="local-offer" size={28} color={Colors.primaryColor} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.titleText}>Best Deals on Hotel</Text>
      <FlatList data={deals} 
      renderItem={renderItem} 
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginVertical: 10,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: Colors.white,
    margin:10,
    borderRadius:14,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius:14
  },
  discountText:{
    flexDirection:'row',
    position:'absolute',
    top: 10,
    right:-12,
  },
});

