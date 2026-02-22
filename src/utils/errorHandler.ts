import axios from "axios";

export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data?.message || "Server error";
    }
    if (error.request) {
      return "Network error. Please check your internet connection.";
    }
  }

  return "Something went wrong.";
};
