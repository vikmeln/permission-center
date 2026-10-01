import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PermissionCard({ children }: Props) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 3,
  },
});
