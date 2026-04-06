import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import EnterMobile from "./pages/EnterMobile";
import VerifyOtp from "./pages/VerifyOtp";
import Home from "./pages/Home";
import PartyScreen from "./pages/PartyScreen";
import ProfilePage from "./pages/ProfilePage";
import Chat from "./pages/ChatPage";
import ChatDetails from "./pages/ChatDetails";
import EditProfile from "./pages/EditProfile";
import FollowingPage from "./pages/FollowingPage";
import FollowersPage from "./pages/FollowersPage";
import StorePage from "./pages/StorePage";
import Notification from "./pages/Notification";
import UserLevel from "./pages/UserLevel";
import VoiceRoom from './pages/VoiceRoom';
import RechargePage from './pages/RechargePage';
// import Mine from './pages/Mine';
// import Settings from './pages/Settings';
// import MenuPage from './pages/MenuPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<h1>Home Page</h1>} />

          <Route path='/login' element={<Login/>}/>
          <Route path='/enter-mobile' element={<EnterMobile/>}/>
          <Route path='/verify-otp' element={<VerifyOtp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/party' element={<PartyScreen/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/chat-details' element={<ChatDetails/>}/>
          <Route path='/edit-profile' element={<EditProfile/>}/>
          <Route path='/following' element={<FollowingPage/>}/>
          <Route path='/followers' element={<FollowersPage/>}/>
          <Route path='/store' element={<StorePage/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/level' element={<UserLevel/>}/>
          <Route path='/room' element={<VoiceRoom/>}/>
          <Route path='/recharge' element={<RechargePage/>}/>
          {/* <Route path='/mine' element={<Mine/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/menu/:name' element={<MenuPage/>}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;