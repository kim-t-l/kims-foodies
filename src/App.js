import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Album from "./Album.js";


export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/paris" element={<Album city='paris'></Album>}>
          </Route>
          <Route path="/london" element={<Album city='london'></Album>}>
          </Route>
          <Route path="/" element={<Album></Album>}>
          </Route>
        </Routes>
    </Router>
  );
}