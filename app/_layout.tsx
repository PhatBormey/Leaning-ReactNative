import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
    </Stack>
    <StatusBar style="light"/>
    </>
  );
}
