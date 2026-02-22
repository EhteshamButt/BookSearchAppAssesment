import axios from "axios";
import { Review } from "../types/book";

const API_KEY = "YOUR_NYTIMES_API_KEY";

export const fetchReviews = async (title: string): Promise<Review[]> => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=${API_KEY}`,
  );
  console.log("Reviews API Response:", response.data);
  return response.data.results;
};
