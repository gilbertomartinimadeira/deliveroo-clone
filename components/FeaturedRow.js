import { View, Text, ScrollView } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  console.log(`id da feature carregada: ${id}`);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Icons.ArrowRightIcon size={20} color="#0CB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
      <Text className="px-4">{featuredCategory}</Text>
    </View>
  );
};

export default FeaturedRow;
