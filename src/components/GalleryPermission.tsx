import { Text, Button, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import PermissionCard from "./PermissionCard";

export default function GalleryPermission() {
  const [image, setImage] = useState<string | null>(null);

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.status !== "granted") {
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <PermissionCard>
      <Text style={{ fontSize: 22 }}>🖼️ Gallery</Text>
      <Text>Доступ до галереї</Text>
      <Button title="Open Gallery" onPress={openGallery} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 200,
            height: 200,
            marginTop: 20,
            borderRadius: 10,
          }}
        />
      )}
    </PermissionCard>
  );
}
