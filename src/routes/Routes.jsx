import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Starships from '../pages/Starships';
import ShipProfile from '../pages/ShipProfile';
import SignIn  from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import PageNotFound from '../pages/PageNotFound';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starships/" element={<Starships />} />
      <Route path="/shipprofile/:id" element={<ShipProfile />} />
      <Route path="/signin/" element={<SignIn />} />
      <Route path="/signup/" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;