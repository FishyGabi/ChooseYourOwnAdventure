import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You check quickly that there are no security guards then ask "Does
        anyone have a wrench I can borrow"
      </Text>
      <Link href="/b4" style={styles.button}>
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
