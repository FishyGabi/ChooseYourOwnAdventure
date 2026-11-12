import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You look around your cell and find no wrench. Then you decide to ask
        your neighbors if they have one
      </Text>
      <Link href="/b3" style={styles.button}>
        Ask neighbors for wrench
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    padding: 32,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "none",
    backgroundColor: "#0757b4",
    padding: 16,
    borderRadius: 20,
    color: "#fff",
  },
  text: {
    fontSize: 25,
    fontWeight: 500,
  },
});
