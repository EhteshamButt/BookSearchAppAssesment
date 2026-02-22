# Book Search App

A React Native mobile application that allows users to search for books, view search results, and navigate to detailed book pages. Features include debounced search, error handling, and smooth navigation between screens.

## 🛠 Features

- Search books by title or author with live suggestions.
- Debounced API calls for better performance.
- Displays a "No books found" message if no results match.
- Shows a loading indicator while fetching data.
- Clear back button appears during search for easy navigation.
- Navigate to a book detail screen with more information.
- Handles API errors gracefully.

## 📦 Project Structure

```
/BookSearchApp
├─ /api
│  └─ booksApi.ts          # API call logic to fetch/search books
├─ /components
│  └─ SearchBar.tsx        # Reusable search input component
├─ /hooks
│  └─ useDebounce.ts       # Custom hook to debounce input
├─ /screens
│  └─ HomeScreen.tsx       # Main search screen
│  └─ BookDetailScreen.tsx # Detailed book info
├─ /types
│  └─ book.ts              # TypeScript interfaces for books
├─ /utils
│  └─ errorHandler.ts      # Centralized API error handling
├─ App.tsx                 # Main navigation setup
└─ README.md               # Project documentation
```

## ⚙️ Requirements

- Node.js ≥ 18.x
- npm or yarn
- React Native CLI or Expo CLI
- Android Studio / Xcode (for emulators)

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/EhteshamButt/BookSearchAppAssesment.git
cd BookSearchAppAssesment
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Start the development server:

```bash
npm start
# or
yarn start
```

Run on Android or iOS:

```bash
npm run android
npm run ios
```

Make sure your emulator/simulator is running, or a device is connected.

## 🤖 Android APK

Download the Android app:
[Android App (.aab)](https://expo.dev/artifacts/eas/fRpfLoMrefPu8GjgZXAzmf.aab)

## 🧩 Usage

1. Launch the app.
2. Enter at least 3 characters in the search bar to trigger book search.
3. See live search results below the search bar.
4. Tap a book to navigate to the Book Detail Screen.
5. If a search is active, the back button appears to clear the search.

## 🔧 Code Highlights

**Debounced Search:**

```ts
const debouncedQuery = useDebounce(query, 500);
```

Prevents excessive API calls by waiting 500ms after the user stops typing.

**Conditional Back Button:**

```tsx
{query.length > 0 && (
  <TouchableOpacity onPress={() => setQuery("")} style={styles.backButton}>
    <Ionicons name="arrow-back" size={24} color="#0FA47A" />
  </TouchableOpacity>
)}
```

Only shows during active search.

**API Error Handling:**

```ts
catch (error) {
  setErrorMessage(handleApiError(error));
}
```

Shows user-friendly error messages on failed API requests.

## 🖌 Styling

- The app uses React Native `StyleSheet` for styling.
- Colors and spacing are consistent for mobile-friendly UI.
- Titles are centered, and back button is positioned inside the safe area.

## 📚 Dependencies

- `react-native` – core framework
- `@expo/vector-icons` – icons library
- `react-native-safe-area-context` – handles safe areas
- `@react-navigation/native` – navigation
- `@react-navigation/stack` – stack navigation
- `typescript` – type safety
- Custom hooks & utils for debouncing and error handling

## 📝 Notes

- API calls are simulated via `searchBooks` in `/api/booksApi.ts`. Replace with a real API if needed.
- The app currently limits search results to 10 books for performance.

## 👏 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📜 License

MIT License © 2026
