import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import RootStackParamList from "../navigation/types";

type Props = StackScreenProps<RootStackParamList, "Details">;

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { message } = route.params; // Extract message from parameters

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen</Text>
      <Text>Message: {message}</Text>
    </View>
  );
};

export default DetailsScreen;
