import TopMenu from "./components/TopMenu";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import AddProduct from "./components/products/AddProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Routes>
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" exact element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
