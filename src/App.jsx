import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/moleculs";
import Artikel from "./pages/user/Artikel";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import {
  Home,
  LandingPage,
  HargaPangan,
  Analisis,
  ForumDiskusi,
  ForumDiskusiJelajahRuang,
  ForumDiskusiCari,
  ForumDiskusiDetail,
  ForumDiskusiRuang,
} from "./pages";
import { Provider } from "react-redux";
import About from "./pages/user/About";
import HasilAnalisis from "./pages/user/HasilAnalisis";
import ContactUs from "./pages/user/contact_us";

import ForumDiskusiDetailRuang from "./pages/user/ForumDiskusiDetailRuang";
import { ArtikelDetail } from "./pages/user/ArtikelDetail";
import TemplateLogin from "./template/TemplateLogin";

const Router = () => {
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  return (
    <BrowserRouter>
      {role && token ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/harga-pangan" element={<HargaPangan />} />
          <Route exact path="/analisis" element={<Analisis />} />
          <Route exact path="/hasil-analisis" element={<HasilAnalisis />} />
          <Route exact path="/diskusi" element={<ForumDiskusi />} />
          <Route exact path="/diskusi/cari" element={<ForumDiskusiCari />} />
          <Route
            exact
            path="/diskusi/detail"
            element={<ForumDiskusiDetail />}
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
        </Routes>
      ) : (
        <></>
      )}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/artikel" element={<Artikel />} />
        <Route exact path="/artikeldetail" element={<ArtikelDetail />} />
        <Route exact path="/contact_us" element={<ContactUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
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
