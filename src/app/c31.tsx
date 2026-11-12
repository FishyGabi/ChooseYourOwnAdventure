import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function c31() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You lunch toward the neighbor with the bone in your right hand. You
        swing the bone toward the head of your neighbor but he dodges your
        attack. You neighbor is much stronger then you so he grabs you by the
        arm and strangles you. The End
      </Text>
      <Link href="/" style={styles.button} dismissTo>
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
