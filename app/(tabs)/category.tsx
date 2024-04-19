import Colors from "@/constansts/Colors";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import category from "@/data/category.json";
import { CategoryType } from "@/types/categoryType";

export default function Page() {
  const [categories, setCategories] = useState<string>("");
  const [filteredCategory, setFilteredCategory] = useState<CategoryType[]>(category);

  const handleInputText = (text: string) => {
    setCategories(text);
    const filtered = category.filter((item) => item.category.toLowerCase().includes(text.toLowerCase()));
    setFilteredCategory(filtered);
  };

  const handleSearch = () => {
    setCategories("");
    setFilteredCategory(category);
  };

  const handleCategoryClick = (category: string) => {
    console.log('Clicked category:', category);
  };

  return (
    <ScrollView>
      <View style={styles.searchSectionWrapper}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search Places"
            style={styles.inputField}
            onChangeText={handleInputText}
            value={categories}
          />
          {categories && (
            <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
              <Ionicons name="close" size={25} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.categoryContainer}>
        {filteredCategory.map((item: CategoryType) => (
          <TouchableOpacity key={item.id} style={styles.categoryItem} onPress={() => handleCategoryClick(item.category)}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <View style={styles.overlay}>
              <Text style={styles.categoryName}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.05)",
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
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 10,
    justifyContent: "space-between",
    position: "relative",
    alignItems: "center",
  },
  searchIcon: {
    position: "absolute",
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
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 20,
    backgroundColor: "RGBA(0, 0, 0, 0.8)",
  },
  categoryItem: {
    width: "48%",
    marginBottom: 10,
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Position overlay absolutely within the parent
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.white,
    letterSpacing: 2,
  },
});
