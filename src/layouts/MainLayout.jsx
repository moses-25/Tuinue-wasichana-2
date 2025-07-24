import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main style={{ minHeight: '80vh', paddingTop: '60px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

