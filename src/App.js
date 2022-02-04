import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import GlobalStyles from "./globalStyles/GlobalStyles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Raleway", "Saira Stencil One"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
