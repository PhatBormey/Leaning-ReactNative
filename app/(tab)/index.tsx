
import { StyleSheet, View } from "react-native";

import ImageViewer from "../components/ImageViewer";
const PlaceholderImage=require("@/assets/images/bg.jpg");
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      backgroundColor:"#25292eff",
    },
    imageContainer:{
      flex:1,
    },
  })
