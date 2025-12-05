import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};
export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imagSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={imagSource} style={styles.image} />;
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
