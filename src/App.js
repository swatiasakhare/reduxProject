import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";
import store from "./store/store"
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Provider store = {store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}>
                Home
              </Route>
              <Route path="/cart" element={<Cart />}>
                Cart
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
