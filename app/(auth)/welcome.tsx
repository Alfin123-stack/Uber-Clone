import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
const OnBoarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <SafeAreaView className="h-full w-full flex items-center justify-between">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-in")}
        className="w-full flex justify-end items-end p-5">
        <Text className="text-black text-sm font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        style={{ height: "100%" }}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286ff] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}>
        {onboarding.map((item) => (
          <View className="flex justify-center items-center p-5" key={item.id}>
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex justify-center items-center gap-4 w-full mt-10">
              <Text className="text-3xl mx-10 font-JakartaSemiBold text-center">
                {item.title}
              </Text>
              <Text className="text-sm mx-10 font-JakartaSemiBold text-center text-gray-400">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default OnBoarding;
