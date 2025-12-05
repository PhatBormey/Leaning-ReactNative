import React from "react";
import { ImageSourcePropType } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};
export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const transLateX = useSharedValue(0);
  const transLateY = useSharedValue(0);
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });
  const drag = Gesture.Pan().onChange((event) => {
    transLateX.value += event.changeX;
    transLateY.value += event.changeY;
  });
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: transLateX.value,
        },
        {
          translateY: transLateY.value,
        },
      ],
    };
  });
  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            style={[imageStyle, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          ></Animated.Image>
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
