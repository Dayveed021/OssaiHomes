import { Routes, Route } from "react-router-dom";
import Agents from "./component/Pages/admin/agents/Agents";
import Dashboard from "./component/Pages/admin/dashboard/Dashboard";
import Profile from "./component/Pages/admin/profile/Profile";
import Properties from "./component/Pages/admin/properties/Properties";
import Transactions from "./component/Pages/admin/transactions/Transactions";
import LandingPage from "./component/Pages/LandingPage";
import { Buyy } from "./component/Pages/Buyy";
import List from "./component/Pages/List";
import MyList from "./component/Pages/MyList";
import AgentDetails from "./component/Pages/admin/agents/Agent-details";
import Login from "./component/Pages/Login";
import SignIn from "./component/Pages/SignUp";
import Rent from "./component/Pages/Rent";
import UserLayout from "./component/Pages/DasboardPages/UserLayout";
import UserDashboard from "./component/Pages/DasboardPages/UserDashboard";
import SingleProperty from "./component/Pages/SingleProperty";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/buy" element={<Buyy />} />
        <Route path="/property" element={<SingleProperty />} />
        <Route path="/list" element={<List />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/agents" element={<Agents />} />
        <Route path="/admin/agents/details" element={<AgentDetails />} />
        <Route path="/admin/transactions" element={<Transactions />} />
        <Route path="/admin/properties" element={<Properties />} />
        <Route path="/dashboard" element={<UserLayout />} />
        <Route path="/dashboard/home" element={<UserDashboard />} />
        <Route path="/dashboard/my_listings" element={<UserLayout />} />
        <Route path="/dashboard/subscription" element={<UserLayout />} />
        <Route path="/dashboard/favourites" element={<UserLayout />} />
        <Route path="/dashboard/profile" element={<UserLayout />} />
        <Route path="/dashboard/help" element={<UserLayout />} />
      </Routes>
    </div>
  );
};

export default App;
// We used the useState hook to store the value of the textarea element in the component's state.
