import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b51() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You Cuss out your neighbors. One is close enough to punch you. He does.
        The next thing you see is darkness. The End
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
