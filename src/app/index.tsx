import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import CameraPermission from "../components/CameraPermission";
import LocationPermission from "../components/LocationPermission";
import ContactsPermission from "../components/ContactsPermission";
import GalleryPermission from "../components/GalleryPermission";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <CameraPermission />
      <LocationPermission />
      <ContactsPermission />
      <GalleryPermission />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
