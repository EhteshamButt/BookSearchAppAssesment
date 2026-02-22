import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const BookDetailScreen = ({ route, navigation }: any) => {
  const { book } = route.params;

  const coverUrl = book?.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : undefined;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Detail</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          {coverUrl && (
            <Image source={{ uri: coverUrl }} style={styles.cover} />
          )}

          <Text style={styles.title}>{book?.title || "No Title"}</Text>

          <Text style={styles.author}>
            {book?.author_name?.[0] || "Unknown Author"}
          </Text>

          {book?.first_publish_year && (
            <Text style={styles.year}>
              Published in {book.first_publish_year}
            </Text>
          )}

          {/* Static rating (API doesn't provide rating) */}
          <Text style={styles.rating}>⭐⭐⭐⭐☆ 4.0 (350 reviews)</Text>
        </View>

        {/* About Author */}
        <Text style={styles.sectionTitle}>About the author</Text>
        <Text style={styles.text}>
          {book?.author_name?.[0] || "Author information not available."}
        </Text>

        {/* Overview */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.text}>
          Open Library search API does not provide description in this endpoint.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>✓ Book Read</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  center: {
    alignItems: "center",
    marginTop: 10,
  },
  cover: {
    width: 180,
    height: 250,
    borderRadius: 16,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  author: {
    color: "#666",
    marginVertical: 5,
  },
  year: {
    color: "#888",
    marginBottom: 5,
  },
  rating: {
    marginVertical: 8,
    fontSize: 14,
  },
  sectionTitle: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    color: "#555",
    marginTop: 5,
    lineHeight: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#1DBF73",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
