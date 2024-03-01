import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import VideosHome from "./VideosHome";
import AdminHome from "./AdminHome";

export default function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/VideosHome"
              element={<VideosHome></VideosHome>}
            ></Route>
            <Route path="/AdminHome" element={<AdminHome></AdminHome>}></Route>
          </Routes>
          <Link to="/VideosHome">VideosHome</Link>
        </BrowserRouter>
      </main>
    </div>
  );
}
