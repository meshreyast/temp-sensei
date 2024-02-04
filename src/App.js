import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";
import UserProfile from "./Pages/UserProfile";

function App() {

  const phoneNumber = localStorage.getItem("userPhoneNumber");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/temp-sensei/userprofile" element={phoneNumber ? <UserProfile /> : <Login />} />
          <Route path="/temp-sensei/login" element={phoneNumber ? <UserProfile /> : <Login />} />
          <Route path="/temp-sensei/userdashboard" element={phoneNumber ? <UserDashboard /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
