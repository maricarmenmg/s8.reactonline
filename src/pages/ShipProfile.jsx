import Header from '../components/Header';
import ShipDetail from '../components/ShipDetail';
import Footer from '../components/Footer';

function ShipProfile() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <Header />

      {/* Page content */}
      <main className="grow">
        {/* Ship detail */}
        <ShipDetail />
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}

export default ShipProfile;
