import { Route, Routes } from 'react-router-dom';
import { viewsData } from './viewsData';
import { routes } from '../types/paths';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Router = () => {

  const pageRoutes = viewsData.map(({ path, title, element }: routes) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <>
    <Navbar />
    <Routes>
      {pageRoutes}
    </Routes>
    <Footer />
    </>
  );
};

export default Router;