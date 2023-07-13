import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Posts from "./components/posts/Posts";

import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";
import SinglePost from "./components/singlePost/SinglePost";
import Contact from "./pages/contact/Contact";




function App() {
  const user=false;
  return (
    <Router>
      <Topbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/register" element={user ? <Home/> : <Register/>}/>
          <Route path="/login" element={user ? <Home/> : <Login/>}/>
          <Route path="/write" element={user ? <Write/> : <Write/>}/>
          <Route path="/about" element={user ? <Posts/> : <Posts/>}/>
          <Route path="/contact" element={user ? <Contact/> : <Contact/>}/>

          <Route path="/sidebar" element={user ? <Write/> : <Sidebar/>}/>
          <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
          <Route path="/post/:postId" element={<Single/>}/>

        
        </Routes>

    </Router>
  );
}

export default App;
