import { Route, Routes } from 'react-router-dom';
import '../src/styles/Navbar.scss';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
import { Buyy } from './component/Pages/Buyy';
import LandingPage from './component/Pages/LandingPage';
import List from './component/Pages/List';
import MyAgent from './component/Pages/MyAgent';
import MyList from './component/Pages/MyList';

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/buy" element={<Buyy />} />
        <Route path="/list" element={<List />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/myagent" element={<MyAgent />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
// We used the useState hook to store the value of the textarea element in the component's state.