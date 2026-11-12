import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function m2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You look around and see a toilet and a cell door with a lock.
      </Text>
      <Link href="/b1" style={styles.button}>
        Inspect the toilet
      </Link>
      <Link href="/c1" style={styles.button}>
        Inspect the lock
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
