import { store } from "./redux/store";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artikel from "./pages/user/Artikel";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import {
  Home,
  HargaPangan,
  Analisis,
  ForumDiskusi,
  ForumDiskusiJelajahRuang,
  ForumDiskusiCari,
  ForumDiskusiRuang,
  Profil,
  ForumDiskusiDetailPostingan,
  ForumDiskusiDetailPertanyaan,
} from "./pages";
import { Provider, useSelector } from "react-redux";
import About from "./pages/user/About";
import HasilAnalisis from "./pages/user/HasilAnalisis";
import ContactUs from "./pages/user/contact_us";

import ForumDiskusiDetailRuang from "./pages/user/ForumDiskusiDetailRuang";
import { ArtikelDetail } from "./pages/user/ArtikelDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/profil" element={<Profil />} />
          <Route exact path="/harga-pangan" element={<HargaPangan />} />
          <Route exact path="/analisis" element={<Analisis />} />
          <Route exact path="/hasil-analisis" element={<HasilAnalisis />} />
          <Route exact path="/diskusi" element={<ForumDiskusi />} />
          <Route exact path="/diskusi/cari" element={<ForumDiskusiCari />} />
          <Route
            exact
            path="/diskusi/detail/postingan"
            element={<ForumDiskusiDetailPostingan />}
          />
          <Route
            exact
            path="/diskusi/detail/pertanyaan"
            element={<ForumDiskusiDetailPertanyaan />}
          />
          <Route
            exact
            path="/diskusi/jelajah-ruang"
            element={<ForumDiskusiJelajahRuang />}
          />
          <Route exact path="/diskusi/ruang" element={<ForumDiskusiRuang />} />
          <Route
            exact
            path="/diskusi/detail/ruang"
            element={<ForumDiskusiDetailRuang />}
          />

          <Route exact path="/" element={<Home />} />
          <Route exact path="/artikel" element={<Artikel />} />
          <Route exact path="/artikeldetail" element={<ArtikelDetail />} />
          <Route exact path="/contact_us" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
export default App;
