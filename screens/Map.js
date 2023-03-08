import React, { useCallback, useLayoutEffect, useState } from "react";
import MapView, { Callout } from "react-native-maps";
import { StyleSheet, View, Text, Image, Alert, Button } from "react-native";
import { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const state = {
    coordinate: [
      { name: "1", latitude: 37.8025259, longitude: -122.4351431 },
      { name: "2", latitude: 37.7896386, longitude: -122.421646 },
      { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
      { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
      { name: "5", latitude: 37.7948605, longitude: -122.4596065 },
      { name: "6", latitude: 37.8025259, longitude: -122.4351431 },
    ],
  };
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  },[navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={selectLocationHandler}
      >
        {selectedLocation && (
          <Marker
            title="Picked Location"
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
          >
            <Callout>
              <Image
                style={{ width: 500, height: 500 }}
                source={require("../assets/nhatan.jpg")}
              />
              <Text>Nhatannn</Text>
              <Button
                title="Go welcome screen"
                onPress={() => navigation.navigate("Welcome")}
              />
            </Callout>
          </Marker>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
