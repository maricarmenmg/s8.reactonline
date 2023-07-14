import Header from '../components/Header';
import { Login } from '../components/FormUsers';
import Footer from '../components/Footer';

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <Header />

      {/* Page content */}
      <main className="grow">
        {/* Page sections */}
        <Login />
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}

export default SignIn;
