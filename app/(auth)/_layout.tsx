import { View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { Slot } from "expo-router";

const AuthLayout = () => {
  return (
    <View className="flex flex-col items-center w-full justify-center h-screen">
      <Slot />
    </View>
  );
};

export default AuthLayout;
