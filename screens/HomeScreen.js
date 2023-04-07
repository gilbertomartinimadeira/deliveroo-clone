import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView, TextInput, View } from "react-native";
import { SafeAreaView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";
import * as Icons from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Testing",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-10 ">
      {/* Header */}
      <HomeHeader />

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200">
          <Icons.MagnifyingGlassIcon color="#08B" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          ></TextInput>
        </View>

        <Icons.AdjustmentsVerticalIcon size={35} color="#0CB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-200"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}

        <FeaturedRow
          id={1}
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />

        <FeaturedRow
          id={2}
          title="Tasty Discounts"
          description="Everyone is been enjoying theses juicy discounts!"
          featuredCategory="discounts"
        />

        <FeaturedRow
          id={3}
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
