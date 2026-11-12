import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function b7() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The security guard comes but instead of calling the maintenance guy, he
        decides to just take the lamp and throw it away. All your neighbors
        laugh. "Why are you guys laughing," asks the guard.. "Because he did it
        on pupose." The guard laughs but not for long because he throws you in
        solitary confinement. The End
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
