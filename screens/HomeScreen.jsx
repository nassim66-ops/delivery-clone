import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
//We should import this down here from it is not from react-native because it's not working perfectly
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"] {
    ...,
    restaurant[]->{
      ...,
      dishes[]->
    }
  }
  `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  // console.log(featuredCategories);

  return (
    <SafeAreaView>
      {/* This is the header here, from top to the search bar */}
      <View className="bg-white pt-5">
        <View className="flex-row pb-3 items-center nx-4 space-x-2 px-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>

      {/* Body */}
      {/* <View> */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Features Rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            // featuredCategory="featured"
          />
        ))}
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
