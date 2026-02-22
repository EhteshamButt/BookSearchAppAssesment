import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { searchBooks } from "../api/booksApi";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "../components/SearchBar";
import { Book } from "../types/book";
import { handleApiError } from "../utils/errorHandler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper/lib/typescript/components/List/List";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }: any) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.length > 2) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [debouncedQuery]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const data = await searchBooks(debouncedQuery);
      setBooks(data.slice(0, 10));
    } catch (error) {
      setErrorMessage(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {query.length > 0 && (
          <TouchableOpacity
            onPress={() => setQuery("")}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#0FA47A" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>Search Book</Text>
      </View>

      <SearchBar value={query} onChange={setQuery} />

      {loading && (
        <ActivityIndicator
          size="large"
          color="#1DBF73"
          style={{ marginTop: 20 }}
        />
      )}

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {!loading && books.length === 0 && debouncedQuery.length > 2 && (
        <Text style={styles.empty}>No books found.</Text>
      )}

      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Text
            style={styles.resultItem}
            onPress={() => navigation.navigate("BookDetail", { book: item })}
          >
            {item.title}
            <Text style={styles.author}>
              {"\n"}by {item.author_name?.[0] || "Unknown Author"}
            </Text>
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F8F8F8",
  },
  header: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // needed for absolute back button
  },

  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  resultItem: {
    fontSize: 16,
    paddingVertical: 12,
    color: "#0FA47A",
  },
  author: {
    fontSize: 13,
    color: "#666",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
});
