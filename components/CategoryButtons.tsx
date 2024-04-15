import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '@/constansts/Colors'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
    onCategoryChanged:(category: string) => void
}

export default function CategoryButtons({onCategoryChanged}: Props) {
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<ScrollView>(null);

    const handleSelectCatagory = (index: number) => {
        const selected = itemRef.current[index];
        setActiveIndex(index);
        selected?.measure((x) => {
            scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
        });
        onCategoryChanged(destinationCategories[index].title)

    };
  
    return (
        <View>
            <Text style={styles.heading}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                marginBottom: 10,
            }}
                ref={scrollRef}
            >
                {
                    destinationCategories.map((category, index) => (
                            <TouchableOpacity key={category.id}
                                onPress={() => handleSelectCatagory(index)}
                                style={activeIndex == index ? styles.categoryBtnActive : styles.catagoryButton}
                                ref={(el) => itemRef.current[index] = el}
                            >
                                <MaterialCommunityIcons name={category.iconName as any} size={22} color={activeIndex == index ? Colors.white : Colors.black} />
                                <Text style={activeIndex == index ? styles.categoryBtnTxtActive : styles.btnText}>{category.title}</Text>
                            </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: "600",
        color: Colors.black,
    },
    catagoryButton: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3
    },
    categoryBtnActive: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3
    },
    btnText: {
        marginLeft: 5,
        color: Colors.black,
    },
    categoryBtnTxtActive: {
        marginLeft: 5,
        color: Colors.white,
    }
})