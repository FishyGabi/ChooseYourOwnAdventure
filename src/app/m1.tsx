import { StyleSheet, Text, View } from "react-native";

export default function m1() {
  return (
    <View style={styles.container}>
      <Text>You Look around and see you are in a jail cell.</Text>
      {/* <Link href="">Look Around</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
