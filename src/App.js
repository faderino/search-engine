import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ImageResult from "./containers/ImageResult";
import NewsResult from "./containers/NewsResult";
import NormalResult from "./containers/NormalResult";
import SearchResultPage from "./pages/SearchResultPage";
import ReadingListPage from "./pages/ReadingListPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/images" element={<HomePage />} />
      <Route path="/news" element={<HomePage />} />
      <Route path="/search-result" element={<SearchResultPage />}>
        <Route path="normal" element={<NormalResult />} />
        <Route path="images" element={<ImageResult />} />
        <Route path="news" element={<NewsResult />} />
      </Route>
      <Route path="/reading-list" element={<ReadingListPage />} />
      <Route path="*" element={<div>404. Not found</div>} />
    </Routes>
  );
};

export default App;
