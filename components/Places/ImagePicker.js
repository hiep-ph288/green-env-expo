import { Alert, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/styles";
import OutlinedButton from "../ui/OutlinedButton";

const ImagePicker = ({onTakeImage}) => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();

  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission!",
        "You need to grant camera access to use this app"
      );
      return false;
    }
    return true;
  }

  async function camerapressHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets);
    onTakeImage(image.assets);
  }

  let imagePreview = <Text style={styles.previewText}>No image taken yet</Text>;

  if (pickedImage) {
    imagePreview = (
      <Image source={{ uri: pickedImage[0].uri }} style={styles.imageStyle} />
    );
  }
  return (
    <View>
      <View style={styles.imagepreviewcontainer}>{imagePreview}</View>
      <OutlinedButton icon='camera' onPress={camerapressHandler}>Take Image</OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagepreviewcontainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    backgroundColor: "#f0cced",
    marginVertical: 8,
    borderRadius: 8,
  },
  previewText: {
    color: "#592454",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
