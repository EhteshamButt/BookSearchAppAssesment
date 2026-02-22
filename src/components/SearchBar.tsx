import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={22} color="#999" />
      <TextInput
        style={styles.input}
        placeholder="Book title or author"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 12,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});
