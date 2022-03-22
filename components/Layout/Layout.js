import Nav from '../nav/Nav';
import Header from '../header/Header';

const Layout = ({ data, children }) => {
  console.warn('data: ', data);
  return (
    <>
      <Header />
      <Nav navItems={data?.menus?.headerMenu}/>
      <div>{children}</div>
    </>
  );
};

export default Layout;
