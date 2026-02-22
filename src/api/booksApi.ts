import axios from "axios";
import { Book } from "../types/book";

const BASE_URL = "https://openlibrary.org";

export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await axios.get(`${BASE_URL}/search.json?q=${query}`);
  console.log("Books API Response:", response.data);
  return response.data.docs;
};
