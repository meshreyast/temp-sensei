import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/temp-sensei/" element={<UserProfile />} />
          <Route path="/temp-sensei/login" element={<Login />} />
          <Route path="/temp-sensei/userdashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
