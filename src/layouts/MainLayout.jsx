import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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

