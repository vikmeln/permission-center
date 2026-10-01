import { Text, Button } from "react-native";
import { useState } from "react";
import * as Location from "expo-location";
import PermissionCard from "./PermissionCard";

export default function LocationPermission() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [status, setStatus] = useState("Permission not requested");

  const requestLocation = async () => {
    const result = await Location.requestForegroundPermissionsAsync();
    if (result.status !== "granted") {
      setStatus("Permission denied");
      return;
    }
    setStatus("Permission granted");
    const position = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  return (
    <PermissionCard>
      <Text style={{ fontSize: 22 }}>📍 Location</Text>
      <Text>Доступ до геолокації</Text>
      <Button title="Allow Location" onPress={requestLocation} />
      <Text>Status: {status}</Text>
      {location && (
        <>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </>
      )}
    </PermissionCard>
  );
}
