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
import AddKeywordHome from './components/add-keyword/addKeywordHome';
import Hooks from './components/hooks/hooksMain'
import TextUtilsHome from "./components/code-with-harry/text-utils/textUtilsHome";


export default function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="code-with-harry">
          <Route path="text-utils" element={< TextUtilsHome />} />
        </Route>
        <Route path="/hooks" element={< Hooks />} />
        <Route path="/addkeyword" element={< AddKeywordHome />} />
        <Route path="/removespaces" element={< RemoveSpaces />} />
        <Route path="/users" element={< Users />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}