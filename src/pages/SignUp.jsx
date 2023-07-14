import Header from '../components/Header';
import { Register } from '../components/FormUsers';
import Footer from '../components/Footer';


function SignUp() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Register  />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default SignUp;