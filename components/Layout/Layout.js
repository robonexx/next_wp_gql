import Nav from '../nav/Nav';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ data, children }) => {
  console.warn('data: ', data);
  return (
    <>
      <Header />
      <Nav navItems={data?.menus?.headerMenu}/>
      <div>{children}</div>
      <Footer footerItems={data?.menus?.footerMenu} />
    </>
  );
};

export default Layout;
