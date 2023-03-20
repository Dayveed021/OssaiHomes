import { Route, Routes } from 'react-router-dom';
import '../src/styles/Navbar.scss';
import Agents from './component/Pages/admin/agents/Agents';

import Dashboard from './component/Pages/admin/dashboard/Dashboard';
import Profile from './component/Pages/admin/profile/Profile';
import Properties from './component/Pages/admin/properties/Properties';
import Transactions from './component/Pages/admin/transactions/Transactions';
import { Buyy } from './component/Pages/Buyy';
import LandingPage from './component/Pages/LandingPage';
import List from './component/Pages/List';
import Login from './component/Pages/Login';
import MyAgent from './component/Pages/MyAgent';
import MyList from './component/Pages/MyList';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/buy" element={<Buyy />} />
        <Route path="/list" element={<List />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/myagent" element={<MyAgent />} />
        <Route path="/login" element={<Login />} />
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