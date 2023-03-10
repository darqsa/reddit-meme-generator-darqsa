import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import MyFavoritesPage from "./pages/MyFavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/meme/:id" element={<DetailsPage />} />
        <Route path="/favorites" element={<MyFavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
