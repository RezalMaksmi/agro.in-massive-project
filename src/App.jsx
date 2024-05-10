import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/moleculs";
import { Home, LandingPage, HargaPangan, Analisis } from "./pages";
import { Provider } from "react-redux";
import About from "./pages/user/About";
import HasilAnalisis from "./pages/user/HasilAnalisis";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/harga-pangan" element={<HargaPangan />} />
        <Route exact path="/analisis" element={<Analisis />} />
        <Route exact path="/hasil-analisis" element={<HasilAnalisis />} />
      </Routes>
      <Footer />
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
