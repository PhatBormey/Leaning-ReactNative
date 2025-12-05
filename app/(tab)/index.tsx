

import { useEffect, useState, useRef } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import EmojiList from "../components/EmojiList";
import EmojiPicker from "../components/EmojiPicker";
import EmojiSticker from "../components/EmojiSticker";
import IconButton from "../components/IconButton";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage=require("@/assets/images/bg.jpg");

export default function Index() {
  const [permissionResponse, requestPermission]=MediaLibrary.usePermissions();
  useEffect(()=>{
    if(!permissionResponse?.granted){
      requestPermission();
    }
  },)
  const imageRef=useRef<View>(null);
  const [selectedImage,setSelectedImage]=useState<string | undefined>(undefined);
  const [showAppOptions,setShowAppOptions]=useState<boolean>(false); 
  const [isModalVisible,setIsModalVisible]=useState<boolean>(false);
  const [pickedEmoji,setPickedEmoji]=useState<ImageSourcePropType | undefined>(undefined);
  
  const pickImageAsync= async () => {
    let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes:["images"],
      allowsEditing:true,
      quality:1
    });
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
    }else{
      alert("You did not select any image");
    }
  };
  const onReset= ()=> setShowAppOptions(false);
  const onAddSticker=()=>{setIsModalVisible(true)};
  const onModalClose=()=>setIsModalVisible(false);
  const onSaveImageAsync=async()=>{
    try {
      const localUri=await captureRef(imageRef,{
        height:440,
        quality:1
      });

      await MediaLibrary.saveToLibraryAsync(localUri);

      if(localUri){
        alert("Saved");
      }
    } catch (e) {
      console.log(e);
    }
  };


  
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
        </View>
      </View>
      {showAppOptions ? 
        (
          <View style={styles.optionContainer}>
            <View style={styles.optionRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset}/>
              <CircleButton onPress={onAddSticker}/>
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
            </View>
          </View>
        ):(
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}></Button>
            <Button label="Use this photo" onPress={()=>setShowAppOptions(true)}></Button>
          </View>
        )
      }
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
    </GestureHandlerRootView>
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
    footerContainer:{
      flex:1/3,
      alignItems:"center",
    },
    optionContainer:{
      position:"absolute",
      bottom:40
    },
    optionRow:{
      alignItems:"center",
      flexDirection:"row"
    }
  })

