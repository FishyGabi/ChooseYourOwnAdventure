import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function c2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You look around your room and find only a bone. "This should do," you
        say. "Are you tryna pick that lock," says you neighbor. "Shut up," you
        reply. "Make me."
      </Text>
      <Link href="/c3" style={styles.button}>
        Ignore him and go to the lock again
      </Link>
      <Link href="/c31" style={styles.button}>
        Attack him with the bone
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
