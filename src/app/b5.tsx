import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b5() {
  return (
    <View style={styles.container}>
      <Text>
        "Who is that maintenance guy are where can I find him?" You ask. "He
        only comes when something is broken," says your neighbor.
      </Text>
      <Link href="/b6" style={styles.button}>
        Break Something
      </Link>
      <Link href="/b61" style={styles.button}>
        Give up and go back to sleep
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
