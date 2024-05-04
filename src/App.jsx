import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/moleculs";
import { LandingPage } from "./pages";
import { Provider } from "react-redux";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
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
