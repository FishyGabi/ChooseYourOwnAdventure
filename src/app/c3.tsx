import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function c3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You ignore your neighbor and go back to the lock. You insert the bone
        and start jiggling it around like you learned as a child
      </Text>
      <Link href="/c4" style={styles.button}>
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
