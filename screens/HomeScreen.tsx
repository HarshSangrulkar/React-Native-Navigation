import { View, Text, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import RootStackParamList from "../navigation/types";

type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const handleNavigate = () => {
    navigation.navigate("Details", { message: "Hello from Home!" });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={handleNavigate} />
    </View>
  );
};

export default HomeScreen;
