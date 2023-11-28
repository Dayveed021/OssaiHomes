import { Routes, Route } from "react-router-dom";
import Agents from "./component/Pages/admin/agents/Agents";
import Dashboard from "./component/Pages/admin/dashboard/Dashboard";
import Profile from "./component/Pages/admin/profile/Profile";
import Properties from "./component/Pages/admin/properties/Properties";
import Transactions from "./component/Pages/admin/transactions/Transactions";
import LandingPage from "./component/Pages/LandingPage";
import { Buyy } from "./component/Pages/Buyy";
import List from "./component/Pages/List";
import Search from "./component/Pages/Search";
import AgentDetails from "./component/Pages/admin/agents/Agent-details";
import Login from "./component/Pages/Login";
import SignUp from "./component/Pages/SignUp";
import Rent from "./component/Pages/Rent";
import UserLayout from "./component/Pages/DasboardPages/UserLayout";
import UserDashboard from "./component/Pages/DasboardPages/UserDashboard";
import SingleProperty from "./component/Pages/SingleProperty";
import AdminLayout from "./component/Pages/admin/home/AdminLayout";
import MyListings from "./component/Pages/DasboardPages/MyListings";
import Subscriptions from "./component/Pages/DasboardPages/Subscriptions";
import Favourites from "./component/Pages/DasboardPages/Favourites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AgentProfile from "./component/Pages/DasboardPages/AgentProfile";
import { AuthRedirect } from "./AuthRedirect";
import PublishPage from "./component/Pages/DasboardPages/PublishPage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/buy" element={<Buyy />} />
        <Route path="/property/:propertyId" element={<SingleProperty />} />
        <Route path="/list" element={<List />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route
          path="/admin"
          element={
            <AuthRedirect adminRoute>
              <AdminLayout />
            </AuthRedirect>
          }
        /> */}
        <Route
          path="/admin/"
          element={
            <AuthRedirect adminRoute>
              <Dashboard />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <AuthRedirect adminRoute>
              <Profile />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/agents"
          element={
            <AuthRedirect adminRoute>
              <Agents />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/agents/details"
          element={
            <AuthRedirect adminRoute>
              <AgentDetails />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/transactions"
          element={
            <AuthRedirect adminRoute>
              <Transactions />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/properties"
          element={
            <AuthRedirect adminRoute>
              <Properties />
            </AuthRedirect>
          }
        />
        {/* <Route
          path="/dashboard"
          element={
            <AuthRedirect userRoute>
              <UserLayout />
            </AuthRedirect>
          }
        /> */}
        <Route
          path="/dashboard/"
          element={
            <AuthRedirect userRoute>
              <UserDashboard />
            </AuthRedirect>
          }
        />
        <Route
          path="/dashboard/publish_property"
          element={
            <AuthRedirect userRoute>
              <PublishPage />
            </AuthRedirect>
          }
        />
        <Route
          path="/dashboard/my_listings/"
          element={
            <AuthRedirect userRoute>
              <MyListings />
            </AuthRedirect>
          }
        />
        <Route
          path="/dashboard/subscription"
          element={
            <AuthRedirect userRoute>
              <Subscriptions />
            </AuthRedirect>
          }
        />
        <Route
          path="/dashboard/favourites"
          element={
            <AuthRedirect userRoute>
              <Favourites />
            </AuthRedirect>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <AuthRedirect userRoute>
              <AgentProfile />
            </AuthRedirect>
          }
        />
        <Route
          path="/dashboard/help"
          element={
            <AuthRedirect userRoute>
              <UserLayout />
            </AuthRedirect>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
// We used the useState hook to store the value of the textarea element in the component's state.
