import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b61() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You give up on escaping and go back to sleep. Then wake up the next
        morning and decide to give up. You have no motivation and are just happy
        to be here the rest of your life.
      </Text>
      <Link href="/" dismissTo style={styles.button}>
        Restart
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
