import {
  Route,
  Routes,
} from "react-router-dom";

import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";
import UserProfile from "./Pages/UserProfile";
import PrivateRoutes from "./Components/PrivateRoutes";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/user/:name" element={<UserProfile />} />
          <Route path="/user/:child/userdashboard" element={<UserDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
