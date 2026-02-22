import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Book } from "../types/book";

interface Props {
  book: Book;
  onPress: () => void;
}

const BookCard: React.FC<Props> = ({ book, onPress }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : undefined;

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {coverUrl && <Image source={{ uri: coverUrl }} style={styles.image} />}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{book.title}</Text>
        <Text>{book.author_name?.join(", ")}</Text>
        <Text>{book.first_publish_year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 90,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
