import { Text, Button } from "react-native";
import { useState } from "react";
import { Camera } from "expo-camera";
import PermissionCard from "./PermissionCard";

export default function CameraPermission() {
  const [status, setStatus] = useState("Permission not requested");

  const requestCamera = async () => {
    const result = await Camera.requestCameraPermissionsAsync();
    if (result.status === "granted") {
      setStatus("Permission granted");
    } else {
      setStatus("Permission denied");
    }
  };

  return (
    <PermissionCard>
      <Text>📷 Camera</Text>
      <Text>Доступ до камери пристрою</Text>
      <Button title="Allow Camera" onPress={requestCamera} />
      <Text>Status: {status}</Text>
    </PermissionCard>
  );
}
