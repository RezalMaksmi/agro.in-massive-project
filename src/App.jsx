import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/moleculs";
import { Home, LandingPage, HargaPangan } from "./pages";
import { Provider } from "react-redux";
import About from "./pages/user/About";
import ContactUs from "./pages/user/contact_us";
import ProfilePage from "./pages/user/profile_page";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/harga-pangan" element={<HargaPangan />} />
        <Route exact path="/contact_us" element={<ContactUs />} />
        <Route exact path="profile_page" element={<ProfilePage />} />
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
