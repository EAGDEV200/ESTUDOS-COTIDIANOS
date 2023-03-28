import { BrowserRouter as Router,  Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import CongfigRoutes from './ConfigRoutes';

function App() {
  return (
    <Router>
        <Header/>
        <CongfigRoutes/>
        <Footer/>
    </Router>
  );
}

export default App;
