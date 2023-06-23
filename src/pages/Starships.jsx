
import Header from '../components/Header';
import ShipList from '../components/ShipList';
import Footer from '../components/Footer';


function Starships() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <ShipList  />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Starships;