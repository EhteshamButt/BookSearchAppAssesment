import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0FA47A" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
