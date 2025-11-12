
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My First App</Text>
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#25292eff"
    },
    text:{
      color:"white"
    },
    button:{
      textDecorationLine:"underline",
      fontSize:20,
      color:"#fff"
    }
  })
