import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Sidebar from "./Components/Sidebar/Sidebar";

import Signin from "./Pages/Auth/Signin";
import Signup from "./Pages/Auth/Signup";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";

import { RootState } from "./Features/Features";

import Dashboard from "./Pages/Dashboard/Dashboard";
import CreatedTeams from "./Pages/CreatedTeams/CreatedTeams";
import ChatBox from "./Pages/ChatBox/ChatBox";
import CreatedTasks from "./Pages/CreatedTasks/CreatedTasks";
import ManageJrAdmin from "./Pages/ManageJrAdmin/ManageJrAdmin";
import TeamAnalytics from "./Pages/TeamAnalytics/TeamAnalytics";
import Setting from "./Pages/Setting/Setting";

function AppContent() {
  const location = useLocation();
  const showSidebar =
    location.pathname !== "/" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/reset-password" &&
    location.pathname !== "/forget-password";
  const darkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <div
      className={`${
        !darkMode ? "bg-[#F1F5F9]" : "bg-[#24303F]"
      } flex min-h-screen`}
    >
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/created-teams" element={<CreatedTeams />} />
          <Route path="/chat-box" element={<ChatBox />} />
          <Route path="/team-analytics" element={<TeamAnalytics />} />
          <Route path="/created-tasks" element={<CreatedTasks />} />
          <Route path="/manage-junior-admin" element={<ManageJrAdmin />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
