
import { Link } from 'react-router-dom';

import  Header  from '../components/Header';
import  NotFoundImage from '../assets/images/joda.png';
import  Footer  from '../components/Footer';


function PageNotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="relative">
          <div className="max-w-6xl mx-auto pt-40 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                {/* Top image */}
                <div className="relative inline-flex flex-col mb-6 aos-init animate-float"  data-aos-delay="400">
                <img src={NotFoundImage} width="256" height="256" alt="Hero Images" />
                </div>
                {/* 404 content */}
                <h2 className="h2 mb-4 font-prompt font-semibold leading-tight">Wrong page, huh?</h2>
                <h4 className="h4 mb-4 font-prompt font-semibold leading-tight">Fear not!
               Show you the <Link to="/" className="text-project-100 hover:text-gray-500 ">way </Link>, force will do!</h4>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default PageNotFound;