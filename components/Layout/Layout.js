import Nav from "../nav/Nav";
import styles from '../../styles/Home.module.css'


const Layout = ({ children }) => {
  
  return (
      <>
          <header className={styles.header}>
       Header for website
      </header>
          <Nav />
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;


