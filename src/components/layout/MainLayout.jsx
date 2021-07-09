import Header from '../commons/header/Header';
import Footer from '../commons/footer/Footer';

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
