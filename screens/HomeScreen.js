import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, View } from "react-native";
import { SafeAreaView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";

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
    </SafeAreaView>
  );
}
