import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Arts from "./pages/Arts";
import Pagenotfound from "./pages/Pagenotfound";
import SignInSide from "./pages/Signin";
import SignUp from "./pages/Signup";
import Paintings from "./Paintings";
import  Museum  from "./Museum";
import Digitalarts from "./Digitalarts";
import Wonders from "./Wonders";
import Hanginggarden from "./Hanginggarden";
import Valleys from "./Valleys";
import Bull from "./Bull";
import Sundari from "./Sundari";
import Art3d from "./Art3d";
import Mordernportrait from "./Mordernportrait";
// import Profile from "./pages/Profile";
// import LogoutButton from "./pages/LogoutButton";
import Profile1 from "./pages/Profile1";
// import Dashboard from "./Admin.js/Dashboard";
// import Dash from "./Artist.js/Dash";
import Admin from "./pages/Admin";
import AddArts from "./pages/AddArts"
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin/>} /> 
          <Route path="/addarts" element={<AddArts/>} />  
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/wonders" element={<Wonders />} />
          <Route path="/digitalarts" element={<Digitalarts />} />
          <Route path="/valley" element={<Valleys />} />
          <Route path="/bull" element={<Bull />} />
          <Route path="/arts3d" element={<Art3d />} />     
          <Route path="/sundari" element={<Sundari />} />
          <Route path="/modernportraits" element={<Mordernportrait />} />
          <Route path="/hanginggarden" element={<Hanginggarden />} />  
          <Route path="/profile1" element={<Profile1 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
