import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function c1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You go inspect the lock. It is one of those big ones that aren't that
        hard to lockpick.
      </Text>
      <Link href="/c2" style={styles.button}>
        Look for something to lock pick with
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
