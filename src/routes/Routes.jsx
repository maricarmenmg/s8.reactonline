import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Starships from '../pages/Starships';
import PageNotFound from '../pages/PageNotFound';

const Router = () => (
  <BrowserRouter>
      <Routes>   
          <Route exact path="/" element={<Home />} />
          <Route path="/starships" element={<Starships/>} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
  </BrowserRouter>
);
export default Router;