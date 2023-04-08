import { View, Text } from "react-native";
import React from "react";

const RestaurantScreen = (props) => {
  const { title } = props.route.params;

  const elements = [];
  let i = 0;
  for (var p in props.route.params) {
    ++i;
    elements.push(
      <Text key={i}>
        {p} : {title}
      </Text>
    );
  }

  return <View>{elements}</View>;
};

export default RestaurantScreen;
