import HomePages from "./component/HomePages";
import { Routes, Route } from "react-router-dom";
import Agents from "./component/Pages/admin/agents/Agents";

import Dashboard from "./component/Pages/admin/dashboard/Dashboard";
import Profile from "./component/Pages/admin/profile/Profile";
import Properties from "./component/Pages/admin/properties/Properties";
import Transactions from "./component/Pages/admin/transactions/Transactions";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <HomePages /> */}
        <Route path="/" element={<HomePages />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/agents" element={<Agents />} />
        <Route path="/admin/transactions" element={<Transactions />} />
        <Route path="/admin/properties" element={<Properties />} />
      </Routes>
    </div>
  );
};

export default App;
// We used the useState hook to store the value of the textarea element in the component's state.
