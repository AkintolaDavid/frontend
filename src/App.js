import "./App.css";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Components/Signup/Signup";
import { ContentPage } from "./Components/ContentPage/ContentPage";
import { Course_page } from "./Course_page/Course_page";
import { Coursecategory } from "./Coursecategory/Coursecategory";
import { Landingpage } from "./Components/Landingpage/Landingpage";
import Question from "./Questions/Question";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginPage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/landingPage" element={<Landingpage />}></Route>
          <Route path="/contentPage" element={<ContentPage />}></Route>
          <Route
            path="/all"
            element={<Coursecategory category="All" />}
          ></Route>
          <Route
            path="/science_tech"
            element={<Coursecategory category="Science And Technology" />}
          ></Route>
          <Route
            path="/engineering"
            element={<Coursecategory category="Engineering" />}
          ></Route>
          <Route
            path="/social_science"
            element={<Coursecategory category="Social Science" />}
          ></Route>
          <Route
            path="/law"
            element={<Coursecategory category="Law" />}
          ></Route>
          <Route
            path="/health_care"
            element={<Coursecategory category="Health Care" />}
          ></Route>
          <Route path="/Course_page" element={<Course_page />}>
            <Route path=":courseId" element={<Course_page />}></Route>
          </Route>
          <Route path="/questions/:courseCode" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
