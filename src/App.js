import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { GeneralProvider } from "./context/General";
import GlobalStyles from "./globalStyles/GlobalStyles";
import Home from "./pages/Main/Main";
import NewEntry from "./pages/NewEntry";
import NewExit from "./pages/NewExit";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UpdateEntries from "./pages/UpdateEntries";
import UpdateExits from "./pages/UpdateExits";

//gustavo@gmail.com

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Raleway", "Saira Stencil One"],
      },
    });
  }, []);

  return (
    <GeneralProvider>
      <BrowserRouter>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/new-entry" element={<NewEntry />} />
          <Route path="/home/new-exit" element={<NewExit />} />
          <Route path="/home/update-entries" element={<UpdateEntries />} />
          <Route path="/home/update-exits" element={<UpdateExits />} />
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
}
