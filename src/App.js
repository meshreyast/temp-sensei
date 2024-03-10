import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";
import UserProfile from "./Pages/UserProfile";
import PrivateRoutes from "./Components/PrivateRoutes";
import Home from "./Pages/Home";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/user/:name",
  //     element: <UserProfile />,
  //   },
  //   {
  //     path: "/user/:child/userdashboard",
  //     element: <UserDashboard />,
  //   },
  // ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/user/:name" element={<UserProfile />} />
            <Route path="/user/:child/userdashboard" element={<UserDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
