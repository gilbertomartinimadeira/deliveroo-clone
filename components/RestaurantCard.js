import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as OutLineIcons from "react-native-heroicons/outline";
import * as SolidIcons from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} className="w-64 h-36 rounded" />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <SolidIcons.StarIcon size={22} color="green" opacity={0.5} />
          <Text>
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
