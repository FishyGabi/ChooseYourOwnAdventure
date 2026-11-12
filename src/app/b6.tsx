import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b6() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You decide you need to break something. You choose the lamp. You smash
        it on the floor then call a security guard over.
      </Text>
      <Link href="/b7" style={styles.button}>
        Continue
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
