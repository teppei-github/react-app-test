import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./Pages/Top";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import MyPage from "./Pages/MyPage";

import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
