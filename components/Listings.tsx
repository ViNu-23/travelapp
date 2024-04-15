import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListingType } from '@/types/listingTypes'
import Colors from '@/constansts/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
    listings: any[];
    category: string;
}
export default function Listings({ listings, category }: Props) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // console.log(`listing screen`, category);
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, [category]);

    const renderItems: ListRenderItem<ListingType> = ({ item }) => {
        const trimmedCategory = category.trim();
        const trimmedItemCategory = item.category.trim();

        if (trimmedCategory == 'All' || trimmedItemCategory == category) {
            return (
                <Link href={`/listings/${item.id}`} asChild>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Image source={{ uri: item.image }}
                                style={styles.itemImage}
                            />
                            <View style={styles.bookmark}>
                                <Ionicons name='bookmark-outline' size={18} color={Colors.white} />
                            </View>
                            <Text style={styles.itemName} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <FontAwesome5 name="map-marker-alt" size={14} color={Colors.primaryColor} />
                                    <Text style={styles.itemLocation}>{item.location}</Text>
                                </View>
                                <Text style={styles.itemPrice}>${item.price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Link>
            );
        } else {
            return null;
        }
    };

    return (
        <View>
            <FlatList
                data={loading ? [] : listings}
                renderItem={renderItems}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 170
    },
    itemImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 6,
    },
    bookmark: {
        position: "absolute",
        top: 15,
        right: 15,
        backgroundColor: Colors.primaryColor,
        padding: 5,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    itemName: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 4,
    },
    itemLocation: {
        fontSize: 12,
        marginLeft: 5,
    },
    itemPrice: {
        marginRight: 4,
        fontSize: 13,
        fontWeight: '600',
        color: Colors.primaryColor
    }
})

