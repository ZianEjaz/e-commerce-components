import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// components
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Users from './components/users/users';
import RemoveSpaces from './components/remove-spaces/remove-spaces';
import AddKeyword from './components/add-keyword/AddKeyword'


export default function App() {
  return (

    <Router>
      <Header />
      <Routes>
      <Route path="/addkeyword" element={< AddKeyword />} />
        <Route path="/removespaces" element={< RemoveSpaces />} />
        <Route path="/users" element={< Users />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}