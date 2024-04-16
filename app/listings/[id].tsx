import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import listingData from "@/data/destination.json";
import { ListingType } from "@/types/listingTypes";
import Colors from "@/constansts/Colors";
import { Feather, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

export default function ListingDetails() {
  const { id } = useLocalSearchParams();
  const listing: ListingType = (listingData as ListingType[]).find(
    (item) => item.id === id
  );
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                padding: 4,
                marginTop: 10,
              }}

            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather
                  name="arrow-left"
                  size={20}
                  color={Colors.primaryColor}
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => { }}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                padding: 4,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  name="bookmark-outline"
                  size={20}
                  color={Colors.primaryColor}
                />
              </View>
            </TouchableOpacity>
          ),

        }}

      />
      <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.contentWrapper} >
          <Text style={styles.listingName}>{listing.name}</Text>
          <View style={styles.listingLocationWrapper}>
            <FontAwesome5
              name="map-marker-alt"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.listingLocationText}>{listing.location}</Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.icons}>
                <Ionicons name="time" size={20} color={Colors.white} />
              </View>
              <View style={{ marginHorizontal: 8 }}>
                <Text style={{ opacity: 0.4 }}>Duration</Text>
                <Text style={{ fontWeight: '600' }}>{listing.duration} Days</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.icons}>
                <FontAwesome name="users" size={19} color={Colors.white} />
              </View>
              <View style={{ marginHorizontal: 8 }}>
                <Text style={{ opacity: 0.4 }}>Persons</Text>
                <Text style={{ fontWeight: '600' }}>{listing.duration}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.icons}>
                <Ionicons name="star" size={20} color={Colors.white} />
              </View>
              <View style={{ marginHorizontal: 8 }}>
                <Text style={{ opacity: 0.4 }}>Rating</Text>
                <Text style={{ fontWeight: '600' }}>{listing.rating}</Text>
              </View>
            </View>
          </View>
          <Text style={{ marginTop: 20, textAlign: 'justify', fontSize: 16 }}>{listing.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => { }}
          style={[styles.footerBtn, styles.footerBookBtn]}
        >
          <Text style={styles.footerBtnTxt}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={{
          backgroundColor: Colors.black,
          padding: 20,
          borderRadius: 10,
          alignItems: "center",
        }}>
          <Text style={{ color: Colors.white ,fontSize:18}}>${listing.price}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingBottom: 300
  },
  contentWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.white,
  },
  listingName: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.black,
    letterSpacing: 0.5,
  },
  listingLocationWrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  listingLocationText: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
  icons: {
    padding: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    width: width,
  },
  footerBtn: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  footerBookBtn: {
    flex: 2,
    backgroundColor: Colors.primaryColor,
    marginRight: 20,
  },
  footerBtnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
