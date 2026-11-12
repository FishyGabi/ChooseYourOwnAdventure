import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You inspect the toilet. You find that it is bolted into the wall with 4
        large bolts. You need a wrench
      </Text>
      <Link href="/b2" style={styles.button}>
        Look for Wrench
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
