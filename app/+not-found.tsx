import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.text}>My First App</Text>
        <Link href={"./"} style={styles.button}>
          Back to home
        </Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    color: "#FFF",
    textDecorationLine: "underline",
  },
});
