import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, View } from "react-native";
import { SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Testing",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text className="text-red-500">
        {/* Header */}
        <View>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>
      </Text>
    </SafeAreaView>
  );
}
