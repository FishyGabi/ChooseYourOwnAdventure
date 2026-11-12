import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b4() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        "Nope," says one. "Shut up," says another. "Only the maintenance guy
        one," says another.
      </Text>
      <Link href="/b5" style={styles.button}>
        Ask who the maintenance guy is
      </Link>
      <Link href="/b51" style={styles.button}>
        Cuss out your neighbors
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
