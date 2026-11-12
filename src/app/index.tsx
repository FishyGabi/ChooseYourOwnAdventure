import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("/Users/gabrielkromwyk/Documents/CAS Comp Sci/ChooseYourOwnAdventure/assets/images/Cover.jpg")}
        style={styles.image}
      ></Image>
      <Text style={styles.text}>
        You wake up in a rough bed with a headache. You don't know where you
        are.
      </Text>
      <Link href="/m1" style={styles.button}>
        Look Around
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
  image: {
    width: 300,
    height: 300,
    backgroundColor: "#bd1212",
  },
});
