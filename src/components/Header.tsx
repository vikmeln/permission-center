import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permission Center</Text>
      <Text style={styles.subtitle}>Керування дозволами пристрою</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: "#666",
  },
});
