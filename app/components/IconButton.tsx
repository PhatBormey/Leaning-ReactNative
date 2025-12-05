import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};
export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <View>
      <Pressable style={styles.iconButton}>
        <MaterialIcons name={icon} size={24} color={"#fff"} />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
