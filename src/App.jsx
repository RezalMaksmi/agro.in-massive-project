import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/moleculs";
import { Home, LandingPage, HargaPangan } from "./pages";
import { Provider } from "react-redux";
import About from "./pages/user/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/harga-pangan" element={<HargaPangan />} />
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
