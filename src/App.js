import "./App.css";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Components/Signup/Signup";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
