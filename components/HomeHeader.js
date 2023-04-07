import { Image, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/outline";

export default function HomeHeader() {
  return (
    <View>
      <View className="flex-row pb-3 items-center mx-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <Icons.ChevronDownIcon size={10} color="#0CB" />
          </Text>
        </View>
        <Icons.UserIcon size={35} color="#0CB" />
      </View>
    </View>
  );
}
