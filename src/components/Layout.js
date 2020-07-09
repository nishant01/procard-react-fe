import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
