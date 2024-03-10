import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";
import UserProfile from "./Pages/UserProfile";
import PrivateRoutes from "./Components/PrivateRoutes";
import Home from "./Pages/Home";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/temp-sensei/user/:name" element={<UserProfile />} />
            <Route path="/temp-sensei/user/:child/userdashboard" element={<UserDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
